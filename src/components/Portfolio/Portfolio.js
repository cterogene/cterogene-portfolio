import './Portfolio.scss'
import React from 'react'
import obensonWork from "../../assets/images/obenson-portfolio.jpg"
import obensonWork2 from "../../assets/images/obenson-work2.png"
import { Link } from "react-router-dom";

const Portfolio = () => {
	
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			
	
					<div className="mb-10 sm:mb-0" >
						<img
							src={obensonWork}
                           
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							
						/>
                        <img
							src={obensonWork}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							
						/>
                       
					</div>
				
		
		</div>
	);
};

export default Portfolio;
