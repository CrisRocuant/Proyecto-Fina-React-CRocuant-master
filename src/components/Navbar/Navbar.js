import { NavLink, Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const NavBar = () => {

	const navigate = useNavigate()
	const { totalQuantity } = useContext(CartContext)

	return (
		<nav className="NavBar" >
			<h3 onClick={() => navigate('/')}>Audio<span>Mania</span></h3>
			<div className="Categories">
				<NavLink to={`/category/vinilos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Vinilos</NavLink>
				<NavLink to={`/category/torna`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tornamesas</NavLink>
				<NavLink to={`/category/parlantes`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Parlantes</NavLink>
			</div>
			<Link  to='/cart'><CartWidget totalQuantity={totalQuantity} /></Link>
		</nav>
	)
}
export default NavBar


