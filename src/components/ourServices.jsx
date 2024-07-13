import React from "react";
import { Button } from "react-bootstrap";
import { services } from "../Data";
import { Link } from "react-router-dom";
import FadeInAnimation from "./FadeInAnimation";
const OurServices = () => {
  return (
    <div>
      <div className="d-flex align-items-center gap-1 justify-content-center">
        <h3 className="ourServiceHeading">our</h3>
        <h3 className="ourServiceHeading headingColor">Services</h3>
      </div>
      <p className="text-center mb-3">
        Check out some of our top home services
      </p>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {services?.map((item, index) => {
          return (
            <FadeInAnimation key={index}>
              <div  className="outerWrapperServices text-center">
                <div>
                  <Link to={`/service-details?${item?.id}`}>
                    <img
                      src={item?.img}
                      alt={item?.title}
                      className="w-100 ImageHover outerWrapperServiceImage"
                    />
                  </Link>
                </div>
                <h3 className="serviceHeading my-2">{item?.title}</h3>
                <p className="serviceDescription mb-1">{item?.description}</p>
                <Link to={`/book-professional?${item?.id}`}>
                  <Button className="button">Book Now</Button>
                </Link>
              </div>
            </FadeInAnimation>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
