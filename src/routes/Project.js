import react from 'react';
import Navbar from '../components/Navbar';
import SecondHero from '../components/SecondHero/SecondHero'
import Footer from '../components/Footer/Footer';
import ProjectHero from '../components/SecondHero/ProjectHero';
const Project = ()=>{
    return (
        <div> 
            <Navbar />
            <ProjectHero />
            <Footer />
        </div>
    )

}
export default Project;