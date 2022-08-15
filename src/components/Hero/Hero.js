import './Hero.scss'
import Herobg from "../../assets/images/image-1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src = {Herobg} alt="Hero-img" />
            </div>
            <div className="content">
                <p> HI,  WELCOME TO MY PORTFOLIO</p>
                <h1> I'm a Software Developer  </h1>
                <div>
                    <Link to="/project" className="btn"> Project</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
            
        </div>

    );

};
export default Hero