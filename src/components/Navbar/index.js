import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from "react";
import day from "../../assets/images/day.png"
import night from "../../assets/images/night.png"
import { FaBars, FaTimes } from "react-icons/fa";


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
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1 className='name'> CLAUDIO TEROGENE</h1>

            </Link>
            <ul className={click ? "nav-menu active" :
                "nav-menu"}>

                <li>
                    <img src={day} />
                </li>

                <li>
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
