import './CartWidget.css'


const CartWidget = ({ totalQuantity }) => {
    return (
        <div className='menu_carrito'>
            <img  className='CartImg' src='../images/cart.svg' alt='cart-widget' />
            <text>{ totalQuantity }</text>
        </div>
    )
}

export default CartWidget