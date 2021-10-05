import React from "react";
import "./style.css";
import { FiPhoneIncoming } from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
function Contact() {
  return (
    <div >
      
      <h5>Contacts</h5>
      <div className="content">
          <div className="left">
        <h4>Get In Touch...</h4>
            <div className="left-content">
            <label htmlFor="name" >Enter your name</label>
            <input type="text" id="name" className="form-control"/> 
            </div>
            <div className="left-content">
            <label htmlFor="email" >Enter your Email</label>
            <input type="email" className="form-control"/> 
        </div>
        <div className="left-content">
            <label htmlFor="subject" >Enter your Subject</label>
            <input type="text" id="subject" className="form-control"/> 
        </div>
        <div className="form-field">
            <label className="our-message" htmlFor="text-area" >Enter Your Message</label>
            <textarea name="textarea" id="textarea" cols="30" rows="10" /> 
        </div>
        <button>Send Email</button>
          </div>
          <div className="right">
              <div className="right-data" >
                <FiPhoneIncoming  className="phone-icon"/>
                <div className="for-text">
                <h4>Phone</h4>
                <h6> +4915751788499 </h6>
                </div>
                </div>
              <div className="right-data" >
                <HiOutlineMail className="email-icon"/>
                <div className="for-text" >
                <h4>Email</h4>
                <h6> shukrullahnavid12@gmail.com </h6>
                </div>
                </div>
              <div className="right-data" >
                <GoLocation className="address-icon"/>
                <div className="for-text">
                <h4>Address</h4>
                <h6> Kappenberger Damm 258, 48163 Münster-Germany </h6>
                </div>
                </div>
          </div>
         
      </div>
    </div>
  );
}

export default Contact;
