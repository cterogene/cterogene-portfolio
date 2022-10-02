import './Portfolio.scss'
import React from 'react'
import obensonWork from "../../assets/images/obenson-portfolio.jpg"
import obensonWork2 from "../../assets/images/obenson-work2.png"
import { Link } from "react-router-dom";

const Portfolio = () => {
	
	return (
		<>
		<div className='header-text'>
			<h1>PORTFOLIO</h1>
		</div>
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<Link to="/project">
			<img
				className="rounded-xl object-cover w-full border shadow-lg"
				
				src={obensonWork}
			/>
			</Link> 

			<img
				className="rounded-xl object-cover w-full border"
				src={obensonWork}
			/>
			<img
				className="rounded-xl object-cover w-full border"
				src={obensonWork}
			/>
			<img
				className="rounded-xl object-cover w-full border shadow-lg"
				src={obensonWork}
		/>
	</div>
	</>
	);
};

export default Portfolio;
