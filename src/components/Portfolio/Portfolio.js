import './Portfolio.scss'
import React from 'react'
import obensonWork from "../../assets/images/obenson-portfolio.jpg"
import panierMobile from "../../assets/images/panier-mobile-Images.png"
import flixterApp from "../../assets/images/flixterApp.png"

import { Link } from "react-router-dom";

const Portfolio = () => {
	
	return (
		<>
			<div className='header-text'>
				<h1>PORTFOLIO</h1>
			</div>
			<div className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2 ">
				

					<a href="project">
						<img class="rounded-t-lg " src={panierMobile} alt="" />
						<p className="text-xl font-bold block uppercase tracking-wide text-purple-700 text-center"> PANIER MOBILE 2022</p>
						<div class="flex flex-col justify-center items-center m-5">

						<button
								className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 "
								type="button"
								style={{ transition: "all .15s ease" }}>See More</button>
						</div>
					</a>
				

					<a href="project">
						<img class="rounded-t-lg text-center" src={obensonWork} alt="" />
						<p className="text-xl font-bold block uppercase tracking-wide text-purple-700 text-center">PERSONAL PORTFOLIO</p>
						<div class="flex flex-col justify-center items-center m-5">

						<button
								className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 "
								type="button"
								style={{ transition: "all .15s ease" }}>See More</button>
						</div>
							
						
					</a>
					

					<a href="project">
						<img class="rounded-t-lg " src={flixterApp} alt="" />
						<p className="text-xl font-bold block uppercase tracking-wide text-purple-700 text-center"> FLIXTER APP </p>
						<div class="flex flex-col justify-center items-center m-5">

						<button
								className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 "
								type="button"
								style={{ transition: "all .15s ease" }}>See More</button>
						</div>
					</a>
				
			</div>
			
		</>

	);
};

export default Portfolio;
