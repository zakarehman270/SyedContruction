import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import OurServices from "../components/ourServices";
import { services } from "../Data";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomCarousel from "../components/CustomCarousel";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import LeftRightSideAnimation from "../components/LeftRightSideAnimation";
import videoUrl from "../../public/assets/WhatsApp Video 2024-07-07 at 7.43.03 PM.mp4";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedInnerIndex, setSelectedInnerIndex] = useState(0);
  const [ServiceId, setServiceId] = useState(null);
  const [filter, setFilter] = useState("");
  const dropdownRef = useRef(null);
  const location = useLocation();


  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {};
  }, [location.pathname]);
  const handleSearchInputChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredServices = services.filter((option) =>
    option.title.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Clicked outside the dropdown, close it
        setIsOpen(false);
      }
    };

    // Add event listener to the document body
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="mb-5">
      <div className="">
        <div className="">
          <div className="d-flex SizeOhHome">
            <div className="outerWrapperEllipseImage position-relative">
              <LeftRightSideAnimation x={"-100%"}>
                <div className="outerWrapperLeftSideContentHome">
                  <h3 className="HomeHeading">
                    Syed Construction and Maintenance{" "}
                  </h3>
                  <p className="SubHeadingInHome">
                    Syed Construction and Maintenance is your trusted partner
                    for all your home improvement needs. Our team of skilled
                    professionals is dedicated to delivering top-notch repair
                    and maintenance services. Whether it's a leaky faucet, a
                    faulty electrical system, or a renovation project, we're
                    here to make your home a better place. With Syed
                    Construction and Maintenance , your home is in capable
                    hands.
                  </p>
                  <div className="my-3  outerWrapperSearchInHomeInHome py-2 px-3">
                    <p className="textInSearchHome mb-1">
                      Select your service.
                    </p>
                    <div className="d-flex align-items-baseline gap-2">
                      <div
                        className="d-flex justify-content-between outerWrapperSearchInHome"
                        ref={dropdownRef}
                      >
                        <input
                          type="text"
                          className="SearchInHome"
                          placeholder="Search your service"
                          value={filter}
                          onFocus={() => setIsOpen(true)}
                          onChange={handleSearchInputChange}
                        />
                        <img
                          src="/assets/icons/Search.svg"
                          className="SearchIcons"
                          alt="Search"
                        />
                      </div>
                      <div>
                        <Link
                          className="text-decoration-none"
                          to={`/book-professional?${ServiceId}`}
                        >
                          <Button className="button">Book Now</Button>
                        </Link>
                      </div>
                      {isOpen && (
                        <ul className={`dropdown-options`}>
                          {filteredServices.map((option, index) => (
                            <li
                              className={` ${
                                SelectedInnerIndex === index
                                  ? "selectedOptions"
                                  : ""
                              }`}
                              key={option.value}
                              onClick={() => {
                                setSelectedInnerIndex(index);
                                setServiceId(option.id);
                                setFilter(option?.title);
                              }}
                            >
                              {option.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="d-flex  mb-4">
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
              </LeftRightSideAnimation>

              <img
                src="/assets/images/EllipseImage.png"
                alt="EllipseImage"
                className="EllipseImage"
              />
            </div>
            <div className="EllipseImageRightSide">
              <div className="d-flex h-100">
                <div className="d-flex flex-column outerWrapperImagesInHome justify-content-between h-100">
                  <Link to={"/service-details?1"}>
                    <div className="position-relative outerWrapperCurveImage">
                      <div className="estrellas inverso">
                        <span>R</span>
                        <span>E</span>
                        <span>T</span>
                        <span>N</span>
                        <span>E</span>
                        <span>P</span>
                        <span>R</span>
                        <span>A</span>
                        <span>C</span>
                      </div>
                      <p>
                        <img
                          src="/assets/images/carpenters.jpg"
                          alt="carpenters"
                          className="HomeImages"
                        />
                      </p>
                    </div>
                  </Link>
                  <div className="position-relative">
                    <Link to={"/service-details?2"}>
                      <div className="estrellas estrellasSecondWord inverso">
                        <span>N</span>
                        <span>A</span>
                        <span>I</span>
                        <span>C</span>
                        <span>I</span>
                        <span>R</span>
                        <span>T</span>
                        <span>C</span>
                        <span>E</span>
                        <span>L</span>
                        <span>E</span>
                      </div>
                      <p>
                        <img
                          src="/assets/images/Electrician.jpg"
                          alt="Electrician"
                          className="HomeImages"
                        />
                      </p>
                    </Link>
                  </div>
                  <div className="position-relative outerWrapperThirdCurveImage">
                    <Link to={"/service-details?3"}>
                      <div className="estrellas estrellasThird inverso">
                        {/* <span>I</span> */}
                        <span>N</span>
                        <span>A</span>
                        <span>M</span>
                        <span>Y</span>
                        <span>D</span>
                        <span>N</span>
                        <span>A</span>
                        <span>H</span>
                      </div>
                      <p>
                        <img
                          src="/assets/images/handyman.jpg"
                          alt="handyman"
                          className="HomeImages"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="outerWrapperLeftImageInHome">
                  <LeftRightSideAnimation x={"100%"}>
                    <img
                      src="/assets/images/handyManHomePic.png"
                      alt="handyManHomePic"
                      className="handyManHomePic"
                    />
                  </LeftRightSideAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <video
          ref={videoRef}
          width="100%"
          autoPlay
          loop
          onClick={handleVideoClick}
          controls
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="mt-5">
              <OurServices />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="d-flex mt-5">
          <div className="col-md-6 pe-0 ps-0">
            <div className="outerWrapperInterPriseSection py-4 px-3">
              <p className="text-white textHolderEnterPrise">
                Enterprise Suite
              </p>
              <p className="text-white textHolderThis my-3">This is how </p>
              <p className="textHolderGoodCompany">
                Good Companies Services You!
              </p>
              <p className="text-white descriptionInEnterPriseSuit my-3">
                Access the top 1% of talent on UPwork, and a full suite of
                hybrid workforce managment tools. This is how innovation works
                now.
              </p>
              <div className="d-flex gap-2 align-items-center mt-2">
                <img
                  src="/assets/icons/Pencil.svg"
                  alt="Pencil"
                  className="PencilIcon"
                />
                <p className="text-white descriptionInEnterPriseSuit">
                  Access expert talent to fill your skill gaps.
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mt-2">
                <img
                  src="/assets/icons/bag.svg"
                  alt="bag"
                  className="PencilIcon"
                />
                <p className="text-white descriptionInEnterPriseSuit">
                  Control your workflow: hire, classify and pay your talent
                </p>
              </div>
              <div className="d-flex gap-2 align-items-center mt-2">
                <img
                  src="/assets/icons/headPhone.svg"
                  alt="headPhone"
                  className="PencilIcon"
                />
                <p className="text-white descriptionInEnterPriseSuit">
                  Partner with upwork for end-to-end support
                </p>
              </div>
              <div className="mt-3">
                <Button className="ButtonLearnMore">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="col-md-6 ps-0 pe-0">
            <div className="outerWrapperEnterpriseSuiteRightSection"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="mt-5">
              <WhyChooseUs />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <CustomCarousel />
      </div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="d-flex gap-1 justify-content-center flex-wrap mb-3">
            <h3 className="HeadingPickService">Pick from </h3>
            <h3 className="HeadingPickService headingColor">
              over 5000 services{" "}
            </h3>
            <h3 className="HeadingPickService">list for your home</h3>
          </div>
          <div className="col-md-3">
            <p className="ServiceListHeading">Moving & Storage</p>
            <p className="ServiceListSubHeading mt-2">Local moving in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              International moving from Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Villa moving in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Furniture moving in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Office moving in Dubai</p>
            <p className="ServiceListSubHeading mt-2">Storage in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Furniture Storage in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Car Shipping in Dubai</p>
          </div>

          <div className="col-md-3">
            <p className="ServiceListHeading">AC Services</p>
            <p className="ServiceListSubHeading mt-2">AC Cleaning in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              AC Duct Cleaning in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">
              AC Installation in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">
              AC Maintenance in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">AC Repair in Dubai</p>
          </div>
          <div className="col-md-3">
            <p className="ServiceListHeading">Cleaning Services</p>
            <p className="ServiceListSubHeading mt-2">Home Cleaning Services</p>
            <p className="ServiceListSubHeading mt-2">Carpet Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Deep Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Laundry Services</p>
            <p className="ServiceListSubHeading mt-2">Mattress Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Office Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Sofa Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Water Tank Cleaning</p>
            <p className="ServiceListSubHeading mt-2">Window Cleaning</p>
          </div>
          <div className="col-md-3">
            <p className="ServiceListHeading">Maintenance & Handyman</p>
            <p className="ServiceListSubHeading mt-2">Handyman in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Home Maintenance in Dibai
            </p>
            <p className="ServiceListSubHeading mt-2">
              Annual Maintenance in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">
              Building & Flooring in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Carpentry in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Curtains & blinds in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Electrician in Dubai</p>
            <p className="ServiceListSubHeading mt-2">
              Furniture Assembly in Dubai
            </p>
            <p className="ServiceListSubHeading mt-2">Plumber in Dubai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
