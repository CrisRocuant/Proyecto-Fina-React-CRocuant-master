import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom'
import "./CartContainer.css"
import Swal from 'sweetalert2'

const CartContainer = ({ id, name, quantity, price }) => {
    const navigate = useNavigate()
    const { deleteItem } = useContext(CartContext)
    

    const handleDeleteItem = () => {
        deleteItem(id) 
        Swal.fire({
            title: 'Producto eliminado',
            icon: 'error',

        })
        
    }

    return (
        
                        <>    
                            <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{quantity}</td>
                            <td>${price}</td>
                            <td>${price * quantity}</td>
                            <td><button className='Button' onClick={() => navigate(`/detail/${id}`)}>Detalle</button></td>
                            <td><button className='Button' onClick={handleDeleteItem}>Borrar</button></td>
                            </tr>                            
                        </>
                    
    )
    
    }

export default CartContainer 

