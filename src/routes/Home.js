import react from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero/Hero';

import AboutComponent from '../components/AboutComponent/AboutComponent';
import AppFooter from '../components/Footer/AppFooter';
const Home = ()=>{
    return (
    <div>
        <Navbar />
        <Hero />
        <AboutComponent />
        <AppFooter />
    </div>
    );
};
export default Home;