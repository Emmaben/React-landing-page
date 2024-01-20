import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: `Select your meal by clicking on the picture.`,
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: `Select your meal by clicking on the picture.`,
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: `Select your meal by clicking on the picture.`,
        },
    ];

    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">
                    lorem ispum dolor sit amet ocmsn, nun kbwyui ubdd,
                    evvbkxjbx hkbsy yskh ykshys uksys yskhs.
                </p>
            </div>
            <div className="work-section-bottom">
                {
                    workInfoData.map((data) => (
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))};
            </div>
        </div>
    );
};

export default Work;