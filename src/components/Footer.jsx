import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="outerWrapperFooter text-white pt-5 pb-3 px-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img
              src="/assets/icons/logo.png"
              className="logoInFooter"
              alt="logo"
            />
            <p className="descriptionInFooter mt-3">
              "Syed Construction and Maintenance " suggests a company dedicated to providing
              solutions for home-related issues and repairs. The name conveys a
              sense of reliability, expertise, and a focus on fixing and
              maintaining residential properties. Here's a brief description
              based on the name:
              <b>Syed Construction and Maintenance : Your Trusted Partner in Home Solutions </b>
              Welcome to Syed Construction and Maintenance , where we transform houses into homes by
              offering comprehensive repair and maintenance services. With a
              commitment to excellence, we take pride in being your go-to
              partner for addressing a wide range of home-related issues.
            </p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <p className="headingInFooter contactInFooter">Contact</p>
                <Link
                  to={"/contact-us"}
                  className="text-decoration-none border-animation"
                >
                  <p className="mt-3 SubHeadingInFooter">Contact Us</p>
                </Link>
                <div>
                  <Link
                    className="text-decoration-none border-animation"
                    to={"/term-condition"}
                  >
                    <p className="mt-2 SubHeadingInFooter">
                      Term and Condition
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <p className="headingInFooter">Popular Services</p>
                <div>
                  <Link
                    to={"/service-details?1"}
                    className="text-decoration-none border-animation border-animation"
                  >
                    <p className="mt-3 SubHeadingInFooter">Carpenter</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/service-details?2"}
                    className="text-decoration-none border-animation"
                  >
                    <p className="mt-2 SubHeadingInFooter">Electrician</p>
                  </Link>
                </div>

                <div>
                  <Link
                    to={"/service-details?3"}
                    className="text-decoration-none border-animation"
                  >
                    <p className="mt-2 SubHeadingInFooter">Handyman</p>
                  </Link>
                </div>

                <div>
                  <Link
                    to={"/service-details?4"}
                    className="text-decoration-none border-animation"
                  >
                    <p className="mt-2 SubHeadingInFooter">Plumbing</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/service-details?5"}
                    className="text-decoration-none border-animation"
                  >
                    <p className="mt-2 SubHeadingInFooter">
                      Electrical Maintenance
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <p className="headingInFooter">Contact Information</p>
                <p className="mt-3 SubHeadingInFooter">0516129852</p>
                <p className="mt-2 SubHeadingInFooter">
                  tanveershaaah1990@gmil.com
                </p>
                <div className="mt-3">
                  <p className="textHolderFollowUp">Follow Us</p>
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <a href="https://www.instagram.com/">
                      <img src="/assets/icons/insta.svg" alt="insta" className="FooterIcons" />
                    </a>
                    <a href="https://mail.google.com/">
                      <img src="/assets/icons/apple.svg" alt="apple" className="FooterIcons" />
                    </a>
                    <a href="https://www.facebook.com/">
                      <img src="/assets/icons/facebook.svg" alt="facebook" className="FooterIcons" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="FooterLine" />
      </div>
    </div>
  );
};

export default Footer;
