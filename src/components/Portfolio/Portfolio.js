import './Portfolio.scss'
import React from 'react'
import obensonWork from "../../assets/images/obenson-portfolio.jpg"
import panierMobile from "../../assets/images/test1.png"
import { Link } from "react-router-dom";

const Portfolio = () => {
	
	return (
		<>
			<div className='header-text'>
				<h1>PORTFOLIO</h1>
			</div>
			<div className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2">
				<Link to="/project">
				<img
					className="rounded-xl object-cover w-full border shadow-lg"
					
					src={obensonWork}
				/>
				<p className='text-descripton'> Personal Portfolio </p>
				<Link to='/project' className="btn"> View Project </Link>
				</Link> 

				<Link to="/project">
				<img
					className="rounded-xl object-cover w-full border"
					src={panierMobile}
				/>
				<p className='text-descripton'> Panier Mobile 2022 </p>
				<Link to='/project' className="btn"> View Project </Link>
				</Link>

				<Link to="/project">
				<img
					className="rounded-xl object-cover w-full border"
					src={obensonWork}
				/>
				<p className='text-descripton'> Panier Mobile 2022 </p>
				<Link to='/project' className="btn"> View Project </Link>
				</Link>

				<Link to="/project"></Link>

			</div>
		</>

	);
};

export default Portfolio;
