
import React from 'react'
import obensonWork1 from "../../assets/images/obenson-portfolio.jpg"
import obensonWork from "../../assets/images/obenson-portfolio-1.png"
import obensonWork2 from "../../assets/images/obenson-portfolio-2.png"

import panierMobile1 from "../../assets/images/panier-mobile-1.png"
import panierMobile2 from "../../assets/images/panier-mobile-2.png"
import panierMobile3 from "../../assets/images/panier-mobile-3.png"
import panierMobile4 from "../../assets/images/panier-mobile-4.png"

import flixterApp1 from "../../assets/images/flixterApp1.png"
import flixterApp2 from "../../assets/images/flixterApp2.png"
import flixterApp3 from "../../assets/images/flixterApp3.png"

import nft1 from "../../assets/images/nft1.png"
import nft3 from "../../assets/images/nft2.png"
import nft2 from "../../assets/images/nft3.png"



import { Link } from "react-router-dom";

const Portfolio_Details = () => {
	return (
		<>

			<div className='header-text' id="mobile">
				<h3 className="text-2xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5 text-indigo-700 text-center m-10 " >
					MOBILE CHART
				</h3>
			</div>
			<div className="grid grid-cols-1 gap-1 lg:grid-cols-4 sm:grid-cols-2 " >
				<a href='https://github.com/cterogene/PanierMobile1.0' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border shadow-lg"

						src={panierMobile1}
					/>
				</a>
				<a href='https://github.com/cterogene/PanierMobile1.0' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border"
						src={panierMobile2}
					/>
				</a>
				<a href='https://github.com/cterogene/PanierMobile1.0' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border "
						src={panierMobile3}
					/>
				</a>
				<a href='https://github.com/cterogene/PanierMobile1.0' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border"
						src={panierMobile4}
					/>
				</a>
			</div>

			<div className='details' class="flex flex-col justify-center items-center m-5">
				<p className='mb-4 text-lg leading-relaxed text-gray-800 m-5 text-center dark:text-gray-200 '>
					Mobile chart is a collaboration android app that lets users add product, sell product and buy product within the app with secure connections.
					For now the project is on the development stage and is ready to view on Github.
				</p>

				<a href='https://github.com/cterogene/PanierMobile1.0' target='_blank' rel="noreferrer"><button
					className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 dark:bg-slate-900"
					type="button"
					style={{ transition: "all .15s ease" }}

				> View Project on Github
				</button></a>

			</div>

			<div className='header-text' id="flixter">
				<h3 className="text-2xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5 text-indigo-700 text-center m-10 ">
					FLIXTER APP
				</h3>
			</div>
			<div className="grid grid-cols-1 gap-1 lg:grid-cols-3 sm:grid-cols-3" id='flixterApp'>
				<a href='https://github.com/cterogene/Flixter' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border shadow-lg"

						src={flixterApp1}
					/>
				</a>
				<a href='https://github.com/cterogene/Flixter' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border"
						src={flixterApp2}
					/>
				</a>
				<a href='https://github.com/cterogene/Flixter' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border"
						src={flixterApp3}
					/>
				</a>
			</div>

			<div className='details' class="flex flex-col justify-center items-center m-5">
				<p className='mb-4 text-lg leading-relaxed text-gray-800 m-5 text-center dark:text-gray-200'>
					Flixter App is an android app that lets users to see the latest popular movies using the movieDB Api. It also allows users to see the trailer of a selected movie within the list.
					I did use the movieDB api for all the movies information.
				</p>

				<a href='https://github.com/cterogene/Flixter' target='_blank' rel="noreferrer" ><button
					className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 dark:bg-slate-900"
					type="button"
					style={{ transition: "all .15s ease" }}

				> View Project on Github
				</button></a>

			</div>


			<div className='header-text' id="garizim" >
				<h3 className="text-2xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5 text-indigo-700 text-center m-10 ">
					GARIZIM
				</h3>
			</div>
			<div className="grid grid-cols-1 gap-1 lg:grid-cols-3 sm:grid-cols-3" >
				<a href='http://garizim.somee.com/' target="_blank" rel="noreferrer">
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
				<p className='mb-4 text-lg leading-relaxed text-gray-800 m-5 text-center dark:text-gray-200'>
					Garizim is a personal portfolio made with Asp.net and bootstrap. user can see detailed project with all of the most recent work. It is being hosted on <a className='mb-4 text-lg leading-relaxed text-gray-800 m-5 dark:text-gray-300' href="" target="_blank">somee</a>

				</p>

				<a href='http://garizim.somee.com/' target='_blank' ><button
					className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 dark:bg-slate-900"
					type="button"
					style={{ transition: "all .15s ease" }}

				> View Live Project
				</button></a>

			</div>

			<div className='header-text' id="nft">
				<h3 className="text-2xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5 text-indigo-700 text-center m-10 ">
					NFT APP
				</h3>
			</div>
			<div className="grid grid-cols-1 gap-1 lg:grid-cols-3 sm:grid-cols-3" id='flixterApp'>
				<a href='https://github.com/cterogene/React-Native-Nft-app' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border shadow-lg"

						src={nft1}
					/>
				</a>
				<a href='https://github.com/cterogene/React-Native-Nft-app' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border"
						src={nft2}
					/>
				</a>
				<a href='https://github.com/cterogene/React-Native-Nft-app' target="_blank" rel="noreferrer">
					<img
						className="rounded-xl object-cover w-full border"
						src={nft3}
					/>
				</a>
			</div>

			<div className='details' class="flex flex-col justify-center items-center m-5">
				<p className='mb-4 text-lg leading-relaxed text-gray-800 m-5 text-center dark:text-gray-200'>
					NFT app is build using A cross platform technology, React Native. You can search for NFT, details of each one and much more.
					It's build using JavaScript and has two main Screens. One for a list of all the NFT's and the other for a  detailed view. 
				</p>
				<div className='flex flex-row justify-center items-center m-5'>
					<a href='https://github.com/cterogene/React-Native-Nft-app' target='_blank' rel="noreferrer" ><button
						className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 dark:bg-slate-900"
						type="button"
						style={{ transition: "all .15s ease" }}

					> View Project on Github
					</button ></a>
					<a href='https://expo.dev/@cterogene/nft-native?serviceType=classic&distribution=expo-go' target='_blank' rel="noreferrer" >
						<button
						className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 dark:bg-slate-900 p-5"
						type="button"
						style={{ transition: "all .15s ease" }}

					> View project on Expo Store
					</button></a>
				</div>

			</div>

		</>

	);
}

export default Portfolio_Details