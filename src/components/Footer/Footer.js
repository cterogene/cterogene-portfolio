import "./Footer.scss";
 
import {FaHome} from "react-icons/fa";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container" >
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style = {{ color:
                            "#000", marginRignt: "2rem"}}/>
                    </div>
                </div>
                <div className="right">

                </div>
                
            </div>
        </div>

    );
};
export default Footer;