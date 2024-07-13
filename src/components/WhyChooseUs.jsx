import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="d-flex align-items-center gap-1 justify-content-center">
        <h3 className="ourServiceHeading">Why</h3>
        <h3 className="ourServiceHeading headingColor">Choose Us</h3>
      </div>
      <img src="/assets/icons/question1.svg" alt="question" className="widthWhyChooseUsImage" />
      <div className="d-flex justify-content-end">
        <img src="/assets/icons/question2.svg" alt="question" className="widthWhyChooseUsImage" />
      </div>
      <img src="/assets/icons/question3.svg" alt="question" className="widthWhyChooseUsImage" />
      <div className="d-flex justify-content-end">
        <img src="/assets/icons/question4.svg" alt="question" className="widthWhyChooseUsImage" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
