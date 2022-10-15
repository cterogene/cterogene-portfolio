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
			<div className="grid grid-cols-1 gap-1 lg:grid-cols-3 sm:grid-cols-3 ">


				<Link to='/project' >
					<div class="flex flex-col justify-center items-center m-1">
						<img class="rounded-xl object-cover w-full border " src={panierMobile} alt="" />
						<p className="mb-4 text-lg leading-relaxed text-indigo-700 m-10">  MOBILE CHART </p>


						<button
							className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 "
							type="button"
							style={{ transition: "all .15s ease" }}>See More</button>
					</div>
				</Link>



				<Link to='/project' >
					<div class="flex flex-col justify-center items-center m-1">
						<img class="rounded-xl object-cover w-full border " src={flixterApp} alt="" />
						<p className="mb-4 text-lg leading-relaxed text-indigo-700 m-10"> FLIXTER APP </p>


						<button
							className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 "
							type="button"
							style={{ transition: "all .15s ease" }}>See More</button>
					</div>
				</Link>




				<Link to='/project' >
					<div class="flex flex-col justify-center items-center m-1">
						<img class="rounded-xl object-cover w-full border" src={obensonWork} alt="" />
						<p className="mb-4 text-lg leading-relaxed text-indigo-700 m-10">GARIZIM</p>



						<button
							className="bg-indigo-700 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 "
							type="button"
							style={{ transition: "all .15s ease" }}>See More</button>
					</div>


				</Link>




			</div>

		</>

	);
};

export default Portfolio;
