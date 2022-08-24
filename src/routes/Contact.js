import react from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SecondHero from '../components/SecondHero/SecondHero';
import ContactUs from '../components/ContactForm/ContactUs';
const Contact = ()=>{
    return (
        <div> 
            <Navbar />
            <SecondHero />
            <ContactUs />
            <Footer />
        </div>
    )

};
export default Contact;