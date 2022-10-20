import react from 'react';
import Navbar from '../components/Navbar';
import SecondHero from '../components/SecondHero/SecondHero'
import AppFooter from '../components/Footer/AppFooter';
import ProjectHero from '../components/SecondHero/ProjectHero';
import Portfolio_Details from '../components/Portfolio/Portfolio-details';

const Project = () => {
    return (
        <div>
            <Navbar />
            <ProjectHero />
            <Portfolio_Details />
            <AppFooter />
        </div>
    )

}
export default Project;