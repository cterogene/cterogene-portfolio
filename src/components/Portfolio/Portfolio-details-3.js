import './Portfolio-details-3.scss'
import React from 'react'
import flixterApp1  from "../../assets/images/flixterApp1.png"
import flixterApp2 from "../../assets/images/flixterApp2.png"
import flixterApp3  from "../../assets/images/flixterApp3.png"


import { Link } from "react-router-dom";

const Portfolio_Details_1 = () => {
    return (
		<>
			<div className='header-text'>
				<h3 className="text-2xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5">
					FLIXTER APP
                    </h3>
			</div>
			<div className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2">
				
				<img
					className="rounded-xl object-cover w-full border shadow-lg"
					
					src={flixterApp1}
				/>

				<img
					className="rounded-xl object-cover w-full border"
					src={flixterApp2}
				/>

				
				<img
					className="rounded-xl object-cover w-full border"
					src={flixterApp3}
				/>

			</div>
			
		</>

	);
}

export default Portfolio_Details_1