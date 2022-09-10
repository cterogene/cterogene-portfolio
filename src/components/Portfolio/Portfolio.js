import './Portfolio.scss'
import React from 'react'
import obensonWork from "../../assets/images/obenson-portfolio.jpg"
import obensonWork2 from "../../assets/images/obenson-work2.png"
import { Link } from "react-router-dom";

const Portfolio = () => {
    return ( 
        <>
         <div className='project'>
             <h1>My Projects</h1>
            
        </div>
        <div className='works'>
                <div className="work__section">
        
                    <div className="cards">
                        <img src={obensonWork} alt="" />
                        <Link to='/project'><button>See More</button></Link>
                    </div>

                    <div className="cards">
                        <img src={obensonWork2} alt="" />
                        <Link to='/project'><button>See More</button></Link>
                    </div>

                    <div className="cards">
                        <img src={obensonWork2} alt="" />
                        <Link to='/project'><button>See More</button></Link>
                    </div>

                </div>
            </div></>
    
    )
}

export default Portfolio