import './contact.scss';
import React  from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ()=>{

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s0j3eki', 'template_6ptan4b', form.current, 'WIQJ-LIsfPZtG3GD-')
        .then((result) => {
            console.log(result.text);
            console.log("Thank you for your message, we'll be in touch soon !")
        }, (error) => {
            console.log(error.text);
        });
  };

    return (
        <div className='formDesign'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Subject</label>
                <input type="text" name="user_subject" />
               
                <label>Message</label>
                
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );

};
export default ContactUs;