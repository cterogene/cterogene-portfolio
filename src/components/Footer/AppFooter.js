import { FiGithub, FiTwitter, FiFacebook } from 'react-icons/fi';
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import AppFooterCopyright from '../Footer/AppFooterCopyright';
import "./AppFooter.scss";

const socialLinks = [
	{
		id: 1,
		icon: <FaGithub size={30} style={{
			color:
				"#303F9F"
		}} />,
		url: 'https://github.com/cterogene',
	},
	{
		id: 2,
		icon: <FaTwitter size={30} style={{
			color:
				"#303F9F"
		}} />,
		url: 'https://twitter.com/cterogene',
	},
	{
		id: 3,
		icon: <FaFacebook size={30} style={{
			color:
				"#303F9F"
		}} />,
		url: 'https://web.facebook.com/terogene.claudio',
	},
	{
		id: 4,
		icon: <FaLinkedin size={30} style={{
			color:
				"#303F9F"
		}} />,
		url: 'https://www.linkedin.com/in/cterogene/',
	},
];

const AppFooter = () => {
	return (
		<div className='bg-indigo-700 dark:bg-slate-900'>
			<div className="container mx-auto">
				<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-neutral-50">
					{/* Footer social links */}
					<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
						<p className="text-3xl sm:text-4xl text-primary-light dark:text-primary-light mb-5">
							CONNECT WITH ME
						</p>
						<ul className="flex gap-4 sm:gap-8">
							{socialLinks.map((link) => (
								<a
									href={link.url}
									target="__blank"
									key={link.id}
									className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-slate-900 hover:bg-gray-100 shadow-sm p-4 duration-300"
								>
									<i className="text-xl sm:text-2xl md:text-3xl dark:bg-slate-200">
										{link.icon}
									</i>
								</a>
							))}
						</ul>
					</div>

					<AppFooterCopyright />
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
