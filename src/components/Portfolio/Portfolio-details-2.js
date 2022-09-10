import './Portfolio-details-2.scss'
import React from 'react'
import obensonWork from "../../assets/images/obenson-portfolio.jpg"
import obensonWork2 from "../../assets/images/obenson-work2.png"
import obensonWork3 from "../../assets/images/obenson-work3.png"


import { Link } from "react-router-dom";

const Portfolio_Details_2 = () => {
    return ( 
        <>
         <div className='project'>
             <h1>Panier Mobile 2022</h1>
            
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
                        <img src={obensonWork3} alt="" />
                        <Link to='/project'><button>See More</button></Link>
                    </div>

                </div>
            </div>

            <div className='description'>
                        <p>Personal Portfolio of obenson Androuin. I used Asp.net and Bootstrap to code and design the app.</p>
                        <p>For the hosting, the service was from <a href='https://somee.com' target='_blank'>somee.com</a> and it was a success with the client.</p>
                        <p><a href='https://github.com/cterogene/ObensonPortfolio/' target='_blank'>project Github link</a> |  <a href='http://garizim.somee.com/' target='_blank'>Website</a></p>
                    </div></>


    
    )
}

export default Portfolio_Details_2