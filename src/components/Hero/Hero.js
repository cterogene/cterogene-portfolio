import './Hero.scss'
import Herobg from "../../assets/images/image-3.jpg";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src = {Herobg} alt="Hero-img" />
            </div>
            <div className="content">
                <p> </p>
                
                <div className='type'>
                    <Typewriter
                        options={{
                            strings: ['HI,  WELCOME TO MY PORTFOLIO'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <h1 > I'm a Software Developer based in Haiti </h1>
                <div>
                    <Link to="/project" className="btn"> Project</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
            
        </div>

    );

};
export default Hero