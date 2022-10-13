import react from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import AppFooter from '../components/Footer/AppFooter';
import Technologies from '../components/Technologies/Technologies';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Technologies />
            <Portfolio />
            <AppFooter />
        </div>
    );
};
export default Home;