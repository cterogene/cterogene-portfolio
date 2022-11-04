import './Hero.scss'

import useThemeSwitcher from '../Toggle/useThemeSwitcher';
import Herobg1 from "../../assets/images/homeHeader2.jpg";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { FiArrowDownCircle } from 'react-icons/fi';


const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={Herobg1} alt="Developer" />
            </div>
            <div className="content">

                <div className='type'>

                    <Typewriter
                        options={{
                            strings: ['HI THERE ! ', 'WELCOME TO MY PORTFOLIO'],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                </div>
                <h1 className="dark:text-gray-300"> I'm a Software Developer based in Haiti </h1>
                <div>
                    
                    <Link to="/project" className="btn dark:bg-slate-800 dark:text-gray-200">My Projects</Link>
                    <Link to="/contact" className="btn btn-light dark:text-gray-200 dark:bg-slate-800">Hire Me</Link>
                </div>
            </div>

        </div>

    );

};
export default Hero