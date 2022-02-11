import React, { useRef } from 'react';
import './ContactWithUs.css'

const ContactWithUs = () => {
    const form = useRef();

    return (
        <div id="contact" className="form-container">
            <h1 className="section-title">Contact With Us</h1>
            <div className="form container">
                <form ref={form}>
                    <label>Name</label>
                    <input className="mb-3" type="text" name="name" />
                    <label>Email</label>
                    <input className="mb-3" type="email" name="email" />
                    <label>Message</label>
                    <textarea className="text-area" name="message" />
                    <button className="send-btn" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactWithUs;