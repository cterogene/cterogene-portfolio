import './index.scss'
import {Link} from 'react-router-dom'
import logo from '../assets/images/claudio-logo.png'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={logo} alt="logo"/>
        </Link>
        <ul className='nav-menu'>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/"> Project </Link>
            </li>
            <li>
                <Link to="/"> About </Link>
            </li>
            <li>
                <Link to="/"> Contact </Link>
            </li>
        </ul>



    </div>

)



export default Navbar 
