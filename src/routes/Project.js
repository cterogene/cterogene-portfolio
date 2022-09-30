import react from 'react';
import Navbar from '../components/Navbar';
import SecondHero from '../components/SecondHero/SecondHero'
import AppFooter from '../components/Footer/AppFooter';
import ProjectHero from '../components/SecondHero/ProjectHero';
import Portfolio_Details_1 from '../components/Portfolio/Portfolio-details-1';
import Portfolio_Details_2 from '../components/Portfolio/Portfolio-details-2';
const Project = ()=>{
    return (
        <div> 
            <Navbar />
            <ProjectHero />
            <Portfolio_Details_1 />
            <Portfolio_Details_2 />
            <AppFooter />
        </div>
    )

}
export default Project;