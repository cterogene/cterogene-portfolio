import './index.scss'
import {Link} from 'react-router-dom'
import {useState} from "react";

import { FaBars, FaTimes} from "react-icons/fa";
import { faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor=()=>{
        if (window.scrollY >=1){
            setColor(true);
        }
        else{
            setColor(false);
        }

    };
    window.addEventListener("scrool", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1 className='name'> CLAUDIO TEROGENE</h1>
          
        </Link>
        <ul className={click ? "nav-menu active" :
         "nav-menu"}>
            <li className='li'>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/project">MY PROJECT</Link>
            </li> 
            <li>
                <Link to="/about">ABOUT ME</Link>
            </li>
            <li>
                <Link to="/contact">CONTACT ME</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={23} style={{color: '#fff'}} />
            ) : (<FaBars size={23} style={{color: '#fff'}} />)}
            
            
        </div>

    </div>
  ); 
};
export default Navbar 
