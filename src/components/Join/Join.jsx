import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ibrm3xd', 'template_nvl9wqh', form.current, 'jaERfVbUH58kIU7v5',
          )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='storke-text'>Ready to </span>
                <span>Level up</span>
            </div>
            <div>
                <span>your body </span>
                <span className='storke-text'>with us?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email Address here...' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join