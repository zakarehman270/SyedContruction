import React,{useEffect} from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const TermAndCondition = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
    }
  }, [location.pathname])
  return (
    <div className="mb-5">
      <div className="container-fluid">
        <div className="row">
          <p className="text-center mt-5 mb-2 headingInBookProfessional">
            Term and Conditions
          </p>
          <div className="mt-3 outerWrapperTerm d-flex gap-2 p-3 align-items-center">
            <img src="/assets/icons/book.svg" alt="book" />
            <p>Terms of Services</p>
          </div>
          <div className="mt-5">
            <p className="headingInTerm mb-1">Terms and Conditions</p>
            <p className="SubHeadingInTerm">
              Dont mis use of our services. You may use our services only as
              permitted by law including applicable export and import control by
              law and regulation.We may suspend or stop providing our services
              to you, if you donot comply with our terms and policies or if we
              are investigation suspected misconduct
            </p>
            <p className="mt-4 headingInTerm mb-1">Privacy Policy</p>
            <p className="SubHeadingInTerm">
              Whenever you provide us information on our site you agree to
              Provide true, accurate current and complete information Maintain
              and promptly update such information to keepit true, accurate,
              current and complete, if you provide any information that is , or
              we reasonable grounds to suspect that information is untrue,
              inaccurate, not current. ARC may without notice suspend or
              terminate your access to our site and refuse any and current use
              of site. Creative layer may changes this policy from time to time
              by updating this page. You should check this page from time to
              time to ensure that you are happy with any changes. Your continued
              acess to and/0r use of our website or services ofter any such
              changes constitutes your acceptance of, and agreement to this
              Privacy Policy, as revised.
            </p>
          </div>
          <div className="mt-3 d-flex align-items-center flex-column">
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" value="" />I
                agree with the terms and conditions.
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" value="" />I
                agree with Privacy Policy
              </label>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center align-items-center gap-2">
            <Button className="CancelButton" type="submit">
              Cancel
            </Button>
            <Button className="SubmitButton" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
