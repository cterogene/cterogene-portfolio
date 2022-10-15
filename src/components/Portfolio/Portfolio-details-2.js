
import React from 'react'
import panierMobile1 from "../../assets/images/panier-mobile-1.png"
import panierMobile2 from "../../assets/images/panier-mobile-2.png"
import panierMobile3 from "../../assets/images/panier-mobile-3.png"
import panierMobile4 from "../../assets/images/panier-mobile-4.png"


import { Link } from "react-router-dom";

const Portfolio_Details_2 = () => {

    return (
        <>
            <div className='header-text'>
                <h3 className="text-2xl sm:text-2xl text-primary-dark dark:text-primary-light mb-5 text-indigo-700 text-center m-10 ">
                     MOBILE CHART 
                </h3>
            </div>
            <div className="grid grid-cols-1 gap-1 lg:grid-cols-4 sm:grid-cols-2">
                <a href='https://github.com/cterogene/PanierMobile1.0' target="_blank">
                    <img
                        className="rounded-xl object-cover w-full border shadow-lg"

                        src={panierMobile1}
                    />
                </a>
                <a href='https://github.com/cterogene/PanierMobile1.0' target="_blank">
                    <img
                        className="rounded-xl object-cover w-full border"
                        src={panierMobile2}
                    />
                </a>
                <a href='https://github.com/cterogene/PanierMobile1.0' target="_blank">
                    <img
                        className="rounded-xl object-cover w-full border "
                        src={panierMobile3}
                    />
                </a>
                <a href='https://github.com/cterogene/PanierMobile1.0' target="_blank">
                    <img
                        className="rounded-xl object-cover w-full border"
                        src={panierMobile4}
                    />
                </a>
            </div>

            <div className='details' class="flex flex-col justify-center items-center m-5">
                <p className='mb-4 text-lg leading-relaxed text-gray-800 m-5text-center '>
                     Mobile chart is a collaboration android app that lets users add product, sell product and buy product within the app with secure connections.
                    For now the project is on the development stage and is ready to view on Github.
                </p>

                <a href='https://github.com/cterogene/PanierMobile1.0' target='_blank' ><button
                    className="bg-indigo-700 active:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}

                > View Project on Github
                </button></a>

            </div>

        </>

    );

}

export default Portfolio_Details_2