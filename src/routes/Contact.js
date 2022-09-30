import react from 'react';
import Navbar from '../components/Navbar';
import AppFooter from '../components/Footer/AppFooter';
import SecondHero from '../components/SecondHero/SecondHero';
import ContactUs from '../components/ContactForm/ContactUs';
const Contact = ()=>{
    return (
        <div> 
            <Navbar />
            <SecondHero />
            <ContactUs />
            <AppFooter />
        </div>
    )

};
export default Contact;