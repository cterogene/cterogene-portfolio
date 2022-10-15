
import React from 'react'
import obensonWork1 from "../../assets/images/obenson-portfolio.jpg"
import obensonWork from "../../assets/images/obenson-portfolio-1.png"
import obensonWork2 from "../../assets/images/obenson-portfolio-2.png"


import { Link } from "react-router-dom";

const Portfolio_Details_1 = () => {
	return (
		<>
			<div className='header-text'>
				<h3 className="text-2xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5 text-indigo-700 text-center m-10 ">
					GARIZIM
				</h3>
			</div>
			<div className="grid grid-cols-1 gap-1 lg:grid-cols-3 sm:grid-cols-3">
				<a href='http://garizim.somee.com/' target="_blank">
					<img
						className="rounded-xl object-cover w-full border shadow-lg"

						src={obensonWork}
					/>
				</a>
				<a href='http://garizim.somee.com/' target="_blank">
					<img
						className="rounded-xl object-cover w-full border"
						src={obensonWork1}
					/>
				</a>

				<a href='http://garizim.somee.com/' target="_blank">
					<img
						className="rounded-xl object-cover w-full border"
						src={obensonWork2}
					/>
				</a>

			</div>

			<div className='details' class="flex flex-col justify-center items-center m-5">
				<p className='mb-4 text-lg leading-relaxed text-gray-800 m-5 text-center'>
					Garizim is a personal portfolio made with Asp.net and bootstrap. user can see detailed project with all of the most recent work. It is being hosted on <a className='mb-4 text-lg leading-relaxed text-gray-800 m-5' href="" target="_blank">somee</a>

				</p>

				<a href='http://garizim.somee.com/' target='_blank' ><button
					className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
					type="button"
					style={{ transition: "all .15s ease" }}

				> View Live Project
				</button></a>

			</div>

		</>

	);
}

export default Portfolio_Details_1