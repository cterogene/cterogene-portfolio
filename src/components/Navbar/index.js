import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from "react";
import Toggle from "../Toggle/Toggle"
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }

    };

    window.addEventListener("scroll", changeColor);


    return (
        <div className={color ? "header header-bg dark:bg-slate-900 dark:text-slate-400" : "header"}>
            <Link to="/">
                <h1 className='name dark:text-gray-200'> CLAUDIO TEROGENE</h1>

            </Link>

            <Toggle />

            <ul className={click ? "nav-menu active dark:text-gray-200" :
                "nav-menu"}>
                <li className='dark:text-gray-200'>
                    <Link to="/project">WORKS</Link>
                </li>
                <li>
                    <Link to="/about">RESUME</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={23} style={{ color: '#fff' }} />
                ) : (<FaBars size={23} style={{ color: '#fff' }} />)}
            </div>

        </div>



    );
};
export default Navbar 
