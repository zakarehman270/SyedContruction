import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { DeepServiceDetailsList } from "../Data";
import { Link, useLocation } from "react-router-dom";
const DeepServiceDetails = () => {
  const [ActiveTas, setActiveTas] = useState("1");
  const [DataService, setDataService] = useState(null);
  const [TabsData, setTabsData] = useState(null);
  const location = useLocation();
  let userID = location?.search?.replace("?", "");
  useEffect(() => {
    for (let i = 0; i < DeepServiceDetailsList?.length; i++) {
      if (userID === DeepServiceDetailsList[i]?.id) {
        setDataService(DeepServiceDetailsList[i]);
        setTabsData(DeepServiceDetailsList[i]?.tabs[0]);
        setActiveTas("1");
        break;
      }
    }
  }, [location?.search]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {};
  }, [location.pathname]);
  return (
    <div className="pb-5 mt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-wrap gap-3 justify-content-between"> 
              <p className="ourServiceHeading headingColor text-wrap text-start ">
                Professional {DataService?.title} In Dubai
              </p>
              <div className="d-flex">
                <Link
                  className="text-decoration-none"
                  to={`/book-professional?1`}
                >
                  <Button className="button d-block d-lg-none">Book Now</Button>
                </Link>
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
            <p className="ServiceListSubHeading mt-1">
              {DataService?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="outerWrapperSideMenu">
              <div className="mb-3 d-flex justify-content-center">
                <Link to={"/"}>
                  <div>
                    <img
                      src="/assets/icons/logo.png"
                      alt="logo"
                      className="HeaderLogoInMenu"
                    />
                  </div>
                </Link>
              </div>
              {DataService?.tabs?.map((item, index) => {
                return (
                  <div
                    className={`c_pointer tabsTitle d-flex  gap-1 ${
                      ActiveTas === item?.id ? "activeTabs" : ""
                    }`}
                    key={index}
                    onClick={() => {
                      setActiveTas(item.id);
                      setTabsData(item);
                    }}
                  >
                    <img src={item?.img} alt="img" className="imageInMenu" />
                    <p>{item?.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-5">
            <p className="ourServiceHeading MarginTopInMobileSize text-wrap">
              Welcome to the {TabsData?.title}
            </p>
            <p className="ServiceListSubHeading mt-1">
              {TabsData?.description}
            </p>
            <Link className="text-decoration-none" to={`/book-professional?1`}>
              <Button className="button mt-2 d-none d-lg-block">
                Book Now
              </Button>
            </Link>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src={TabsData?.img}
                alt="furnitureassembly"
                className="DeepServiceDetailsImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepServiceDetails;
