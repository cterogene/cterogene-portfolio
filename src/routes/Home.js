import react from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import AboutComponent from '../components/AboutComponent/AboutComponent';
import ProjectsGrid from '../components/Portfolio/ProjectsGrid';
import {ProjectsProvider } from '../components/Portfolio/ProjectsContext';
import AboutMeBio from '../components/About/AboutMeBio';
import { AboutMeProvider } from '../components/About/AboutMeContext';
import AppFooter from '../components/Footer/AppFooter';
const Home = ()=>{
    return (
    <div>
        <Navbar />
        <Hero />
        <AboutComponent />

        <AboutMeProvider>
			<AboutMeBio />
          </AboutMeProvider>

        <ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
        
        <AppFooter />
    </div>
    );
};
export default Home;