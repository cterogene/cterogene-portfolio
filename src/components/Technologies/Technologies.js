
import html from "../../assets/images/tools-and-languages/html.png"
import css from "../../assets/images/tools-and-languages/css.png"
import javaScript from "../../assets/images/tools-and-languages/javaScript.png"
import git from "../../assets/images/tools-and-languages/git.png"
import android from "../../assets/images/tools-and-languages/android-studio.png"
import java from "../../assets/images/tools-and-languages/java.png"
import react from "../../assets/images/tools-and-languages/react.png"
import figma from "../../assets/images/tools-and-languages/figma.png"

import { Link } from "react-router-dom";
import { FaReacteurope } from "react-icons/fa"


const Technologies = () => {

    return (
        <>
            <div className='header-text'>
                <h3 className="text-4xl sm:text-4xl text-primary-dark dark:text-primary-light m-15 text-indigo-700 text-center m-10">
                    LANGUAGES  AND TECHNOLOGIES
                </h3>
            </div>
            <div className="grid grid-cols-4 gap-1 lg:grid-cols-8 sm:grid-cols-4">


                <div class="flex flex-col justify-center items-center m-6">
                    <img class="rounded-xl object-cover w-full border dark:bg-gray-200 " src={html} alt="" />
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 m-5 dark:text-white"> HTML</p>
                </div>


                <div class="flex flex-col justify-center items-center m-6">
                    <img class="rounded-xl object-cover w-full border dark:bg-gray-200" src={css} alt="" />
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 m-5 dark:text-white"> CSS </p>
                </div>


                <div class="flex flex-col justify-center items-center m-6">
                    <img class="rounded-xl object-cover w-full border dark:bg-gray-200" src={javaScript} alt="" />
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 m-5 dark:text-white">JAVASCRIPT</p>
                </div>


                <div class="flex flex-col justify-center items-center m-6">
                    <img class="rounded-xl object-cover w-full border dark:bg-gray-200" src={git} alt="" />
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 m-5 dark:text-white"> GIT</p>
                </div>


                <div class="flex flex-col justify-center items-center m-6">
                    <img class="rounded-xl object-cover w-full border dark:bg-gray-200" src={react} alt="" />
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 m-5 dark:text-white"> REACT </p>
                </div>


                <div class="flex flex-col justify-center items-center m-6">
                    <img class="rounded-xl object-cover w-full border dark:bg-gray-200" src={figma} alt="" />
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 m-5 dark:text-white">FIGMA</p>
                </div>


                <div class="flex flex-col justify-center items-center m-6">
                    <img class="rounded-xl object-cover w-full border dark:bg-gray-200" src={java} alt="" />
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 m-5 dark:text-white"> JAVA </p>
                </div>


                <div class="flex flex-col justify-center items-center m-6">
                    <img class="rounded-xl object-cover w-full border dark:bg-gray-200" src={android} alt="" />
                    <p className="mb-4 text-lg leading-relaxed text-gray-700 m-5 dark:text-white">ANDROID </p>
                </div>



            </div>


        </>

    );

}

export default Technologies