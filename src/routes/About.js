import react from 'react';
import Navbar from '../components/Navbar';
import Resume from '../components/About/Resume';
import AboutHero from '../components/SecondHero/AboutHero';
import AppFooter from '../components/Footer/AppFooter';

const About = ()=>{
    return (
        <div> 
            <Navbar />
            <AboutHero />
            <Resume />
            <AppFooter />
        </div>
    )

}
export default About;