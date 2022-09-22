import react from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import AboutComponent from '../components/AboutComponent/AboutComponent';
import Portfolio from '../components/Portfolio/Portfolio';
const Home = ()=>{
    return (
    <div>
        <Navbar />
        <Hero />
        <AboutComponent />
        
        <Footer />
    </div>
    );
};
export default Home;