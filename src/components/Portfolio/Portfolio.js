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
			<div className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2">
				
				<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-purple-800 dark:border-gray-700">
					<a href="project">
						<img class="rounded-t-lg" src={obensonWork} alt="" />
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PERSONAL PORTFOLIO</h5>
						</a>
						<a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
							Read more
							<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
					</div>
				</div>


				<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-purple-800 dark:border-gray-700">
					<a href="project">
						<img class="rounded-t-lg" src={panierMobile} alt="" />
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PANIER MOBILE 2022</h5>
						</a>
						<a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
							Read more
							<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
					</div>
				</div>

				<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-purple-800 dark:border-gray-700">
					<a href="project">
						<img class="rounded-t-lg" src={flixterApp} alt="" />
					</a>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">FLIXTER APP</h5>
						</a>
						<a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
							Read more
							<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
					</div>
				</div>

			</div>
			
		</>

	);
};

export default Portfolio;
