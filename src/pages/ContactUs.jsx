import React, { useState, useMemo, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import ReactLoading from "react-loading";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { services } from "../Data";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ContactUs = () => {
  const location = useLocation();
  const [Phone, setPhone] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [Loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    instruction: "",
  });
  const navigate = useNavigate();
  const [validate, setValidate] = useState({
    first_name: false,
    last_name: false,
    phone: false,
    email: false,
    address: false,
    service: false,
    numberOfHour: false,
  });
  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Event handler for form submission
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    // Perform form validation
    const newValidate = {
      first_name: formData.first_name === "",
      last_name: formData.last_name === "",
      phone: Phone === "",
      email: formData.email === "",
      address: formData.address === "",
      numberOfHour: formData.numberOfHour === "",
      service: selectedOption === null,
    };
    setValidate(newValidate);
    // Check if there are any validation errors
    if (Object.values(newValidate).some((error) => error)) {
      // Handle validation errors, e.g., show an alert
      return;
    }
    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // If validation passes, proceed with form submission
    event.preventDefault();
    emailjs
      .sendForm(
        "service_9ecy55l",
        "template_8wr7t4p",
        event.target,
        "ng0MaJFLD-mYiEWhw"
      )
      .then(
        (result) => {
          setLoading(false);
          Swal.fire({
            title: "Thank You !",
            text: "Our team will review your details and get back to you as soon as possible.",
            icon: "success",
          }).then(() => {
            console.log("helo this is called");
            navigate("/");
          });
        },
        (error) => {}
      );
    // navigate("/thank-you-message");
  };
  const colourStylesForService = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles) => {
      return {
        ...styles,
        borderColor: validate.service ? "BorderRed" : "",
      };
    },
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {};
  }, [location.pathname]);

  return (
    <div className="outerContainerBookProfessional position-relative pb-5">
      <div className="">
        {Loading && (
          <div className="BackHover d-flex justify-content-center pt-5">
            <ReactLoading
              type={"spinningBubbles"}
              color={"Black"}
              height={"10%"}
              width={"10%"}
            />
          </div>
        )}
      </div>
      <div className="container-fluid">
        <div className="row mt-5 mb-2">
          {/* <p className="text-center mt-5 mb-2 headingInBookProfessional">
            Contact Us
          </p> */}
          <div className="col-md-8">
            <h3 className="headingInContactUs">Feel Free To Contact Us</h3>
            <p className="SubheadingInContactUs">
              Let us help you become even greater at what you do. Fill out the
              following form and we will get back to you in the next 24 hours.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="row g-3 mt-3">
                <div className="col-md-12">
                  <div>
                    <label htmlFor="first_name" className="FormLabel mb-3">
                      What's your First Name?
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      className="form-control-contact-us"
                      placeholder="Type Your First Name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                    {validate.first_name && (
                      <Alert variant="danger">First Name is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div>
                    <label htmlFor="last_name" className="FormLabel mb-3">
                      What's your Last Name?
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      className="form-control-contact-us"
                      placeholder="Type Your Last  Name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                    {validate.last_name && (
                      <Alert variant="danger">Last Name is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div>
                    <label htmlFor="email" className="FormLabel mb-3">
                      What's your email address?
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control-contact-us"
                      name="email"
                      placeholder="Type Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {validate.email && (
                      <Alert variant="danger">Email Address is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div>
                    <label htmlFor="address" className="FormLabel mb-3">
                      What's your address?
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="form-control-contact-us"
                      name="address"
                      placeholder="Type Your address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    {validate.address && (
                      <Alert variant="danger">Address is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div>
                    <label htmlFor="phone" className="FormLabel mb-3">
                      What's your phone number?
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      className="form-control-contact-us"
                      name="phone"
                      placeholder="Type Your Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {validate.phone && (
                      <Alert variant="danger">Phone number is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="outerWrapperSelectInContactUs">
                    <label htmlFor="service" className="FormLabel mb-3">
                      What's services are you looking for?
                    </label>
                    <Select
                      styles={colourStylesForService}
                      value={selectedOption}
                      onChange={(options) => {
                        setSelectedOption(options);
                        formData.service = options.label;
                        setFormData({ ...formData });
                      }}
                      options={services?.map((item) => ({
                        label: item.title,
                        value: item.id,
                      }))}
                    />
                    {validate.service && (
                      <Alert variant="danger">Service is required.</Alert>
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  <div>
                    <label htmlFor="instruction" className="FormLabel mb-3">
                      What's your Instructions?
                    </label>
                    <textarea
                      type="instruction"
                      id="instruction"
                      className="form-control-contact-us"
                      name="instruction"
                      placeholder="Type Instructions"
                      value={formData.instruction}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-none">
                <textarea
                  name="message"
                  value={`
                      First Name:        ${formData.first_name} 
                      Last Name:         ${formData.last_name} 
								      Email:             ${formData.email} 
											Phone:             ${formData.phone}  
                      Address:           ${formData.address}  
                      Service:           ${formData.service} 
                      Message:           ${formData.instruction}
											SubmittedFrom:     ${"Contact Us Form"}
														`}
                  onChange={() => {
                    console.log("Onchange");
                  }}
                />
              </div>
              <div className="d-flex gap-2 mt-4">
                <div>
                  <Link to="/">
                    <Button className="CancelButton" type="submit">
                      Cancel
                    </Button>
                  </Link>
                </div>
                <Button className="SubmitButton" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div>
              <p className="labelContactUs mb-2 CallUsInMobileSize">CALL US</p>
              <div className="d-flex gap-1">
                <img
                  src="/assets/icons/whatsapp.png"
                  alt="whatsapp"
                  className="MediaIconsInContact"
                />
                <p className="subLabel">03074545836</p>
              </div>
              <div className="d-flex gap-1 ">
                <img
                  src="/assets/icons/whatsapp.png"
                  alt="whatsapp"
                  className="MediaIconsInContact"
                />
                <p className="subLabel">0516129852</p>
              </div>
            </div>
            <div>
              <p className="labelContactUs mb-2 mt-2">Email</p>
              <div className="d-flex gap-1 ">
                <img
                  src="/assets/icons/gmail.png"
                  alt="gmail"
                  className="MediaIconsInContact"
                />
                <p className="subLabel">tanveershaaah1990@gmil.com</p>
              </div>
            </div>
            <div>
              <p className="labelContactUs mb-2 mt-2">ADDRESS</p>
              <div className="d-flex gap-1 ">
                <img
                  src="/assets/icons/location.png"
                  alt="location"
                  className="MediaIconsInContact"
                />
                <p className="subLabel">
                  Shop 3, Raimal Chamber Plaza 43 West , Blue Area ,Islamabad
                </p>
              </div>
            </div>
            <img src="/assets/icons/map.svg" className="mt-3 w-100" alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
