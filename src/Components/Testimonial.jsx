import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";


const Testimonials = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonials</p>
                <h1 className="primary-heading">What They Are Saying</h1>
                <p className="primary-text">
                    lorem ispsum dolor sit amet cons. non tincid magna
                    elit. dolor turpis moles dui magnis facill at dfringilla quam.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} />
                <p>
                lorem ispsum dolor sit amet cons. non tincid magna
                    elit. dolor turpis moles dui magnis facill at dfringilla quam.
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Jon Doe</h2>
            </div>
        </div>
    )
};

export default Testimonials;