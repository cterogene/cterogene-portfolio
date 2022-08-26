import react from 'react';
import './AboutComponent.scss'
import claudio from "../../assets/images/claudio-img.jpg";
import { Link } from "react-router-dom";
const AboutComponent = () => {
    return (
        <div className='aboutSection'>
            <div className='aboutSection-container'>
                <div className='left'>
                    <img className='about-img' src={claudio} alt='claudio-about' />
                </div>
                <div className='right'>
                    <h1>ABOUT ME</h1>
                    
                    <p>I'm a passionate about technologies. I have a bachelor degree in Computer Science at Espoir University. (2017-2022)</p>
                    <p>My tech jouney started in 2017. From this date i have been using Java, C#, Html and Css.</p>
                    <p>I'm also a CodePath alumni. I have  1+ year experience working with Android Studio.</p>
                    <p>I have 2+ month working with the React framework, I'm learning the core skills to create beautiful front-end design.</p>
                    
                    <div>
                    <Link to="/about" className="btn">See More</Link>
                </div>
                    
                </div>

            </div>
        </div>

    );
};
export default AboutComponent