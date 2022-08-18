import "./Footer.scss";
 
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container" >
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style = {{ color:
                            "#554994", marginRignt: "2rem"}}/>
                            <p># 81 Lambert Street, Pétion-Ville</p>
                            <p>Haiti</p>
                    </div>
                    <div className="phone">
                        <h4>
                    <FaPhone size={20} style = {{ color:
                            "#554994", marginRignt: "2rem"}}/>
                            +509 3721-6869</h4>
                    </div>
                    <div className="mail">
                        <h4>
                    <FaMailBulk size={20} style = {{ color:
                            "#554994", marginRignt: "2rem"}}/>
                             cterogene@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h1> About Me</h1>
                    <p> I'm a software developer with 2+ years of experiences. I have a Bachelor's degree in Computer Science at Espoir University.
                        I have experiences working with MySql Server, React, Android Studio(Java) and C#.
                    </p>
                    <div className="social">
                        <FaGithub size={30} style = {{ color:
                                "#554994", marginRignt: "1rem"}}/>
                        <FaLinkedin size={30} style = {{ color:
                                "#554994", marginRignt: "1rem"}}/>
                         <FaFacebook size={30} style = {{ color:
                            "#554994", marginRignt: "1rem"}}/>
                    </div>
                    
                </div>
                
            </div>
        </div>

    );
};
export default Footer;