import './Portfolio-details-1.scss'
import React from 'react'
import obensonWork1 from "../../assets/images/obenson-portfolio.jpg"
import obensonWork from "../../assets/images/obenson-portfolio-1.png"
import obensonWork2 from "../../assets/images/obenson-portfolio-2.png"


import { Link } from "react-router-dom";

const Portfolio_Details_1 = () => {
    return (
		<>
			<div className='header-text'>
				<h3 className="text-2xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5">
					PERSONAL PORTFOLIO
                    </h3>
			</div>
			<div className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2">
				
				<img
					className="rounded-xl object-cover w-full border shadow-lg"
					
					src={obensonWork}
				/>

				<img
					className="rounded-xl object-cover w-full border"
					src={obensonWork1}
				/>

				
				<img
					className="rounded-xl object-cover w-full border"
					src={obensonWork2}
				/>

			</div>
			
		</>

	);
}

export default Portfolio_Details_1