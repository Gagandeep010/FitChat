import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

export default function Join() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ji2emxl",       // Your Service ID
      "template_tx5zdns",      // Your Template ID
      form.current,            // Form element (must use ref)
      "VA-q8hsi1J6pwZbvw"      // Your Public Key
    ).then(
      () => {
        alert("Message Sent Successfully!");
        form.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Error Sending Message. Check Console.");
      }
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
        <form ref={form} className="email-container" onSubmit={handleSubmit}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address here..."
            required
          />
          <button type="submit" className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
}
