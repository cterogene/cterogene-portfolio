import React from 'react'
import obensonWork from "../../assets/images/obenson-portfolio.jpg"
import panierMobile from "../../assets/images/panier-mobile-Images.png"
import flixterApp from "../../assets/images/flixterApp.png"
import NFTapp from "../../assets/images/NftCard.png"
import { HashLink } from 'react-router-hash-link';

const Portfolio = () => {

	return (
		<>
			<div className='header-text '>
				<h1 className='dark:text-white text-4xl sm:text-4xl text-primary-dark dark:text-primary-light m-15 text-indigo-700 text-center m-10'>PORTFOLIO</h1>
			</div>
			<div className="grid grid-cols-2 gap-1 lg:grid-cols-4 sm:grid-cols-2 ">
				<HashLink to='/project#mobile' smooth>
					<div class="flex flex-col justify-center items-center m-1">
						<img class="rounded-xl object-cover w-full border " src={panierMobile} alt="" />
						<p className="mb-4 text-lg leading-relaxed text-indigo-700 m-10 dark:text-white">  MOBILE CHART </p>
						<button
							className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 dark:bg-slate-900"
							type="button"
							style={{ transition: "all .15s ease" }}>See More</button>
					</div>
				</HashLink>
				<HashLink to='/project#flixter' smooth>
					<div class="flex flex-col justify-center items-center m-1">
						<img class="rounded-xl object-cover w-full border " src={flixterApp} alt="" />
						<p className="mb-4 text-lg leading-relaxed text-indigo-700 m-10 dark:text-white "> FLIXTER APP </p>
						<button
							className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 dark:bg-slate-900"
							type="button"
							style={{ transition: "all .15s ease" }}>See More</button>
					</div>
				</HashLink>
				<HashLink to='/project#garizim' >
					<div class="flex flex-col justify-center items-center m-1">
						<img class="rounded-xl object-cover w-full border" src={obensonWork} alt="" />
						<p className="mb-4 text-lg leading-relaxed text-indigo-700 m-10 dark:text-white">GARIZIM</p>
						<button
							className="bg-indigo-700 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 dark:bg-slate-900"
							type="button"
							style={{ transition: "all .15s ease" }}>See More</button>
					</div>
				</HashLink>
				<HashLink to='' smooth>
					<div class="flex flex-col justify-center items-center m-1">
						<img class="rounded-xl object-cover w-full border " src={NFTapp} alt="" />
						<p className="mb-4 text-lg leading-relaxed text-indigo-700 m-10 dark:text-white"> NFT APP </p>
						<button
							className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 dark:bg-slate-900"
							type="button"
							style={{ transition: "all .15s ease" }}>See More</button>
					</div>
				</HashLink>
			</div>

		</>

	);
};

export default Portfolio;
