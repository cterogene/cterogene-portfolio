import './Portfolio-details-3.scss'
import React from 'react'
import flixterApp1 from "../../assets/images/flixterApp1.png"
import flixterApp2 from "../../assets/images/flixterApp2.png"
import flixterApp3 from "../../assets/images/flixterApp3.png"


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
				<a href='https://github.com/cterogene/Flixter' target="_blank">
					<img
						className="rounded-xl object-cover w-full border shadow-lg"

						src={flixterApp1}
					/>
				</a>
				<a href='https://github.com/cterogene/Flixter' target="_blank">
					<img
						className="rounded-xl object-cover w-full border"
						src={flixterApp2}
					/>
				</a>
				<a href='https://github.com/cterogene/Flixter' target="_blank">
					<img
						className="rounded-xl object-cover w-full border"
						src={flixterApp3}
					/>
				</a>
			</div>

			<div className='details' class="flex flex-col justify-center items-center m-5">
				<p className='mb-4 text-lg leading-relaxed text-gray-800 m-5 text-center'>
					Flixter App is an android app that lets users to see the latest popular movies using the movieDB Api. It also allows users to see the trailer of a selected movie within the list.
				</p>

				<a href='https://github.com/cterogene/Flixter' target='_blank' ><button
					className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
					type="button"
					style={{ transition: "all .15s ease" }}

				> View Project on Github
				</button></a>

			</div>

		</>

	);
}

export default Portfolio_Details_1