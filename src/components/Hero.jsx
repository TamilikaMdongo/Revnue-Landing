import React  ,{ useRef} from 'react'
import emailjs from '@emailjs/browser';
import Nav from './Nav'
import overview from './assets/04. Dashboard (v2) - Desktop (1).jpg'
const Hero = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fqefdkw', 'template_r8utypp', form.current, {
        publicKey: '60KdI3TveYtJufTIs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 function pop(){
  let alert=document.getElementById('submit');
  alert = window.alert('You have submitted your form')
}
  return (
    <div className='Hero-Section'>
      <Nav/>
      <h2>Smart and affordable platform to cut costs, maximize revenue and grow your business</h2>
      <p>Take control of your business growth with tools designed to simplify, optimize, and accelerate your success. From reducing overhead costs to unlocking new revenue streams, we make smart business management effortless and affordable.</p>
      <form ref={form} onSubmit={sendEmail} className="waitlist">
        <input typeof='text' name='user_email' placeholder='Enter your email address'></input>
        <button type='submit' onClick={pop}>Signup</button>
        
      </form>
      <div className="hero-image">
       
      </div>
     
    </div>
  )
}

export default Hero
