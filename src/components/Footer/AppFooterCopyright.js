import "./AppFooter.scss";

function AppFooterCopyright() {
	return (
		<div className="copy">
			<div className="font-general-regular flex justify-center items-center text-center">
				<div className="text-secondary-white dark:text-secondary-light font-medium uppercase hover:underline">

					&copy; {new Date().getFullYear()}
				</div>
				<a
					href="https://www.linkedin.com/in/cterogene/"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					CLAUDIO TEROGENE
				</a>

			</div>
			<div className="flex flex-col justify-center items-center m-5">
				<p className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
					Made with ❤ from HAITI
				</p>
			</div>
		</div>

	);
}

export default AppFooterCopyright;
