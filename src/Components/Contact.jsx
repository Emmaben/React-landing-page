import React from "react";

const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">Do You Have Any Questions</h1>
            <h1 className="primary-heading">Let Us Help You!</h1>
            <div className="contact-form-container">
                <input type="text" placeholder="Enter Your Email" />
                <button className="secondary-button">Submit</button>
            </div>
        </div>
    );
};

export default Contact;