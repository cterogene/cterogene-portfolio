import react from 'react';
import './AboutComponent.scss'
import claudio from "../../assets/images/claudio-intro1.jpg";
import { Link } from "react-router-dom";
import pdf from '../../assets/resume/Claudio-Terogene-Resume.pdf';
const AboutComponent = () => {
    return (
        <div className='aboutSection'>
            <div className='aboutSection-container'>
                <div className='left'>
                    <img className='about-img' src={claudio} alt='claudio-about' />
                </div>
                <div className='right'>
                    <h1>ABOUT ME</h1>
                    <ul>
                        <li><p>I'm a passionate about technologies. I have a bachelor degree in Computer Science at Espoir University. (2017-2022)</p></li>
                        <p>My tech jouney started in 2017. From this date I have been using Java, C#, Python, Html and Css.</p>
                        <p>I'm also a CodePath alumni. I have  1+ year experience working with Android Studio.</p>
                        <p>I have 6+ month working with the React framework, I'm learning the core skills to create beautiful front-end design and back-end.</p>
                    </ul>
                    <div>
                    <Link to="/about" className="btn">See More</Link>
                    <a href={pdf} download className="btn"> Download CV </a>
                </div>
                    
                </div>

            </div>
        </div>

    );
};
export default AboutComponent