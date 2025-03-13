import React, { useRef, useState } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

export default function Join() {
  const [email, setEmail] = useState("")
    const form = useRef()

      const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = "service_ibrm3xd";
        const templateId = "template_kjv6icd";
        const publicKey = "VA-q8hsi1J6pwZbvw";
        const templateParams = {
          user_email: email,
        };
        emailjs.send(serviceId, templateId, templateParams, publicKey).then(
          (result) => {

            setEmail("");
    
            alert("Message Sent Successfully");
          },
          (error) => {
            alert("Error Sending Message");
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
                <input type="email" name="user_email" placeholder='Enter your Email Address here...' onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}
