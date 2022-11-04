import './ProjectHero.scss'
import { Link } from "react-router-dom";
import pdf from '../../assets/resume/Claudio-Terogene-Resume.pdf';

const ProjectHero = ()=>{

    return (
        <div className='hero-img4'>
            <div className='heading' id="projects">
                <h1> MY Projects </h1>
                <div>
                    <a href={pdf} download className="btn dark:bg-slate-800 dark:text-gray-200"> Download CV </a>
                    <Link to="/contact" className="btn btn-light dark:bg-slate-800 dark:text-gray-200">Hire Me</Link>
                </div>
            </div>
        </div>

    );

};
export default ProjectHero;