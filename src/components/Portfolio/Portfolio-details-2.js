import './Portfolio-details-2.scss'
import React from 'react'
import panierMobile1 from "../../assets/images/panier-mobile-1.png"
import panierMobile2  from "../../assets/images/panier-mobile-2.png"
import panierMobile3  from "../../assets/images/panier-mobile-3.png"
import panierMobile4  from "../../assets/images/panier-mobile-4.png"


import { Link } from "react-router-dom";

const Portfolio_Details_2 = () => {

    return (
		<>
			<div className='header-text'>
				<h3 className="text-2xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5">
					PANIER MOBILE 2022
                    </h3>
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
				
				<img
					className="rounded-xl object-cover w-full border shadow-lg"
					
					src={panierMobile1}
				/>

				<img
					className="rounded-xl object-cover w-full border"
					src={panierMobile2}
				/>

				
				<img
					className="rounded-xl object-cover w-full border"
					src={panierMobile3}
				/>

                <img
					className="rounded-xl object-cover w-full border"
					src={panierMobile4}
				/>

			</div>
			
		</>

	);
    /*
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
    */
}

export default Portfolio_Details_2