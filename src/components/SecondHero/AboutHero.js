import './AboutHero.scss'
import { Link } from "react-router-dom";

const AboutHero = ()=>{
    return (
        <div className='hero-img2'>
            <div className='heading'>
                <h1> My Resume </h1>
                <div>
                    <Link to="/contact" className="btn"> Hire Me</Link>
                    
                </div>
            </div>
        </div>

    );

};
export default AboutHero;