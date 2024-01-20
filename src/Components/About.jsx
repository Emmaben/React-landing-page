import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="Background Image" />
            </div>
            <div className="about-section-image-container">
                <img src= {AboutBackgroundImage} />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food is an important part of a balanced diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consfeh non sbuisu
                    gvvsus uysvhj,buav djhkavx avgvsyk yhkvsyl
                </p>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consfeh non sbuisu
                    gvvsus uysvhj,buav djhkavx avgvsyk yhkvsyl
                </p>
                <div className="about-button-container">
                    <button className="secondary-button">
                        Learn More
                    </button>
                    <button className="watch-video-button"> <BsFillPlayCircleFill/> Watch Video </button>
                </div>
            </div>
        </div>
    )
}

export default About;