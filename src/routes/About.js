import react from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import Resume from '../components/About/Resume';
import AboutHero from '../components/SecondHero/AboutHero';

const About = ()=>{
    return (
        <div> 
            <Navbar />
            <AboutHero />
            <Resume />
            <Footer />
        </div>
    )

}
export default About;