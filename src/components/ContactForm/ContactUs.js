import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

export const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s0j3eki', 'template_6ptan4b', form.current, 'WIQJ-LIsfPZtG3GD-')
            .then((result) => {
                console.log(result.text);
                alert('Thank you for your message, We\'ll be in touch soon !');
                form.current?.reset();
            }, (error) => {
                console.log(error.text);
                alert("Failed to send the message, Please try again.")
            });
    };


    return (

        <div className="container mx-auto pt-16">
            <div className="lg:flex">
                <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none dark:bg-slate-900 dark:text-gray-200">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold dark:text-gray-200">Get in touch</h1>
                        <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4 dark:text-gray-200">Got a question about me? Are you interested in partnering with me? Have some suggestions or just want to say Hi? Just contact me. I'm here to assist you.</p>
                        <div className="flex pb-4 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                            </div>
                            <p className="pl-4 text-white text-base dark:text-gray-200">+(509) 3721-6869</p>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <p className="pl-4 text-white text-base dark:text-gray-200">cterogene@gmail.com</p>
                        </div>
                        <p className="text-lg text-white pt-10 tracking-wide dark:text-gray-200">
                            Morne-Hercule, Pétion-Ville <br />
                            Port-au-Prince, Haiti
                        </p>

                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br dark:bg-slate-700">
                    <form id="contact" ref={form} onSubmit={sendEmail} className="bg-white py-4 px-8 rounded-tr rounded-br dark:bg-slate-800">
                        <h1 className="text-4xl text-gray-800 font-extrabold mb-6 dark:text-gray-200">Enter Details</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2 dark:text-gray-200">
                                        Full Name
                                    </label>
                                    <input required id="full_name" name="user_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border dark:bg-slate-900" placeholder />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2 dark:text-gray-200">
                                        Email
                                    </label>
                                    <input required id="email" name="user_email" type="email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border dark:bg-slate-900" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2 dark:text-gray-200">
                                        Phone
                                    </label>
                                    <input required id="phone" name="user_phone" type="phone" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border dark:bg-slate-900" placeholder />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2 dark:text-gray-200">
                                        Subject
                                    </label>
                                    <input required id="subject" name="user_subject" type="subject" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border dark:bg-slate-900" placeholder />
                                </div>
                            </div>
                        </div>


                        <div className="w-full mt-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-800 mb-2 dark:text-gray-200" htmlFor="message">
                                    Message
                                </label>
                                <textarea required placeholder name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700 dark:bg-slate-900" rows={8} id="message" defaultValue={""} />
                            </div>
                            <button type="submit" className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6 dark:bg-slate-900">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );

};
export default ContactUs