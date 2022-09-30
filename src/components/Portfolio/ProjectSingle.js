
import ProjectGallery from '../Portfolio/ProjectGallery';
import { SingleProjectProvider}  from '../Portfolio/SingleProjectContext';
//import { motion } from 'framer-motion';

const ProjectSingle = () => {
	return (
		/*<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		> */
			<SingleProjectProvider>
				<ProjectGallery />
			</SingleProjectProvider>
		//</motion.div>
	);
};

export default ProjectSingle;
