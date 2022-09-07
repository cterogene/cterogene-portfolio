import './AboutHero.scss'
import { Link } from "react-router-dom";

const AboutHero = ()=>{
    return (
        <div className='hero-img2'>
            <div className='heading'>
                <h1> MY RESUME </h1>
                <div>
                    <Link to="" className="btn"> Download CV</Link>
                    <Link to="/contact" className="btn btn-light">Hire Me</Link>
                </div>
            </div>
        </div>

    );

};
export default AboutHero;