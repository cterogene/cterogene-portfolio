import React from 'react'
import claudio from "../../assets/images/claudio-intro2.jpg"
import pdf from '../../assets/resume/Claudio-Terogene-Resume.pdf';
const Stats = () => {
    return (
        <>
        <main className="profile-page">
            <section className="relative block" style={{ height: "500px" }}>
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                }}
            >
                <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
                ></span>
            </div>
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: "70px" }}
            >
                <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
                >
                <polygon
                    className="text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100"
                ></polygon>
                </svg>
            </div>
            </section>
            <section className="relative py-16 bg-gray-300">
            <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative">
                        <img
                            alt="..."
                            src={claudio}
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                            style={{ minWidth: "150px" }}
                        />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div className="py-6 px-3 mt-32 sm:mt-0">
                        <a href="contact"><button
                            className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            
                        >
                            HIRE ME
                        </button></a>
                        <a href="project"><button
                            className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 m-6"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            
                        >
                            PROJECT
                        </button></a>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            10+
                            </span>
                            <span className="text-sm text-gray-500">Project</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            50+
                            </span>
                            <span className="text-sm text-gray-500">Tech articles</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            10+
                            </span>
                            <span className="text-sm text-gray-500">New technologies tested</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                        Claudio Terogene
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                        Pétion-Ville, Haiti
                    </div>
                    <div className="mb-2 text-gray-700 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                        Software Developer - Freelancer - Computer Scientist
                    </div>
                    <div className="mb-2 text-gray-700">
                        <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                       Bachelor Degree at  Espoir university of Calvary Chapel
                    </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        I'm a passionate about technologies. I have a bachelor degree in Computer Science at Espoir University. (2017-2022)

                        My tech jouney started in 2017. From this date I have been using Java, C#, Python, Html and Css.

                        I'm also a CodePath alumni. I have 1+ year experience working with Android Studio.

                        I have 6+ month experiences working with the React framework, I'm learning the core skills to create beautiful front-end design and back-end.
                                                Fun Fact:  I love Software Development. 
                        </p>
                        
                        <a href={pdf} download ><button
                            className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            
                        >
                            DOWNLOAD CV
                        </button></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </main>
            
        </>
    );
}
export default Stats