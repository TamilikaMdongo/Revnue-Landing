import React  ,{ useRef} from 'react'
import emailjs from '@emailjs/browser';

const Testimonials = () => {

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
    <div className='parent-container'>
        <div className="parent-text">
       <h1>
        Ready to take charge of your finances?
      
       </h1>
      <h3>Fill in the form below and gain early access to our platform</h3>
      </div>
      <form ref={form}  onSubmit={sendEmail} className="CTA">
        <input typeof='text' name='user_email' placeholder='Enter your email address'></input>
        <button  type='submit' onClick={pop}>Signup</button>
        
      </form>
    </div>
  )
}

export default Testimonials
