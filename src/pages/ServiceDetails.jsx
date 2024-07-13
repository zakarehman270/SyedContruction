import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { serviceDetailsList } from "../Data";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
const ServiceDetails = () => {
  const [DataService, setDataService] = useState(null);
  const location = useLocation();
  let userID = location?.search?.replace("?", "");
  useEffect(() => {
    for (let i = 0; i < serviceDetailsList?.length; i++) {
      if (userID === serviceDetailsList[i]?.id) {
        setDataService(serviceDetailsList[i]);
        break;
      }
    }
  }, [location?.search]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
    }
  }, [location.pathname])
  return (
    <div className="pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="pt-4 d-flex flex-wrap gap-2 align-items-center justify-content-between">
              <p className="ourServiceHeading headingColor text-wrap text-start ">
                {DataService?.title}
              </p>
              <div className="">
                <div className="d-flex justify-content-end gap-2">
                  <div>
                    <a href="https://www.facebook.com/" className="">
                      <img
                        src="/assets/icons/facebookService.svg"
                        alt="facebookService"
                        className="MediaIcons ImageHover"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://web.whatsapp.com/" className="">
                      <img
                        src="/assets/icons/whatsAppService.svg"
                        alt="whatsAppService"
                        className="MediaIcons ImageHover"
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://mail.google.com/" className="">
                      <img
                        src="/assets/icons/EmialService.svg"
                        alt="EmialService"
                        className="MediaIcons ImageHover"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <p className="ServiceListSubHeading">{DataService?.description1}</p>
            <Link
              className="text-decoration-none"
              to={`/book-professional?${DataService?.id}`}
            >
              <Button className="button mt-2">Book Now</Button>
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src={DataService?.img}
              alt="imageInServiceDetails"
              className="imageInServiceDetails"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="mt-3">
              {DataService?.details}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div className="mt-3">
              <h1 className="TitleDetailService">{DataService?.title2}</h1>
              <p className="ServiceListSubHeading">
                {DataService?.description2}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ReactPlayer
              url={DataService?.video}
              width={"100%"}
              className="w-100 imageInServiceDetails"
            />
          </div>
          <div className="col-md-6">
            <h1 className="TitleDetailService">{DataService?.title3}</h1>
            <p className="ServiceListSubHeading">{DataService?.description3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
