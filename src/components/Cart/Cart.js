import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import CartContainer from '../CartContainer/CartContainer'
import "../Cart/Cart.css"
import { Link } from "react-router-dom" 


const Cart = () => {
    
    const navigate = useNavigate()
    const { totalQuantity,total ,cart} = useContext(CartContext)

if(!totalQuantity) {
        return (
            <div className='cart-container'>
                <header className="Header">
                    <h2 className="ItemHeader">
                        Carrito Vacio
                    </h2>
                </header>
                <div>
                    <button className="Button2" onClick={() => navigate('/')}>
                        Volver
                    </button>
                </div>
            </div>
        )
    } 


    return (
        <>
            <div>
            <h1>Este es su Carrito de Compra</h1>
            </div>

            <div className='cart-container'>
                <table>
                    <tr>
                        <th>#ID</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {cart.map(prod => <CartContainer key={prod.id} {...prod}/>)} 
                </table>
            </div>
            
            
                <div className='check-out'>
                    <p className='check-out__total-price'>Total de la compra: ${total}</p>
                    <div className='check-out__btn'>
                        <Link to='/checkout'><button className="Button" variant="contained">Terminar compra</button></Link>
                    </div> 
                </div>

        </>
    )    
    
    
}

export default Cart