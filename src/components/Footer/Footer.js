import "./Footer.scss";
 
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container" >
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style = {{ color:
                            "#554994", marginRight: "2rem"}}/>
                            <div>
                                <p># 81 Lambert Street, Pétion-Ville</p>
                                <p>Haiti</p>     
                            </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style = {{ color:
                            "#554994", marginRight: "2rem"}}/>
                             +509 3721-6869
                        </h4>
                    </div>
                    <div className="mail">
                        <h4>
                            <FaMailBulk size={20} style = {{ color:
                            "#554994", marginRight: "2rem"}}/>
                              cterogene@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h1> About Me</h1>
                    <p> I'm a software developer with 2+ years of experiences. I have a Bachelor's degree in Computer Science at Espoir University.
                        I have experiences working with MySql Server, React, Android Studio(Java) and C#.
                    </p>
                    <div className="social">
                        < a href="https://github.com/cterogene" target= "_blank" ><FaGithub size={30} style = {{ color:
                                "#554994", marginRight: "2rem"}}/> </a>
                         <a href = "https://www.linkedin.com/in/cterogene/" target ="_blank"><FaLinkedin size={30} style = {{ color:
                                "#554994", marginRight: "2rem"}}/> </a>
                        <a href="https://web.facebook.com/terogene.claudio" target="_blank" > <FaFacebook size={30} style = {{ color:
                            "#554994", marginRight: "2rem"}}/> </a>
                    </div>

                    
                    
                </div>

                
                
            </div>
            <div className="copy"> 
                        <p style= {{textAlign:'center', marginTop:'1rem'}}> Made with ❤ by cterogene from Haiti</p>
                    </div>
        </div>

    );
};
export default Footer;