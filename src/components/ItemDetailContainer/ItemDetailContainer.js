import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle de Producto'
    }, [])

    useEffect(() => {
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(response => {
            const dataProduct = response.data()
            const productsAdapted = { id: response.id, ...dataProduct }
            setProduct(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <h1>Caracteristicas de {product.name}</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer