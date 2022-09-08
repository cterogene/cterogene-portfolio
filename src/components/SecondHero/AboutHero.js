import './AboutHero.scss'
import { Link } from "react-router-dom";
import pdf from '../../assets/resume/Claudio-Terogene-Resume.pdf';

const AboutHero = ()=>{

    return (
        <div className='hero-img2'>
            <div className='heading'>
                <h1> MY RESUME </h1>
                <div>
                    <a href={pdf} download className="btn"> Download CV </a>
                    <Link to="/contact" className="btn btn-light">Hire Me</Link>
                </div>
            </div>
        </div>

    );

};
export default AboutHero;