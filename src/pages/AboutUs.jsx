import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import WhyChooseUs from "../components/WhyChooseUs";
import { useLocation } from "react-router-dom";
const AboutUs = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {};
  }, [location.pathname]);
  return (
    <div>
      <div className="mb-5">
        <div className="container-fluid">
          <div className="row">
            <p className="text-center mt-5 mb-2 headingInBookProfessional">
              About Us
            </p>
            <div className="col-md-12">
              <p className="SubHeadingInAboutUs">10+ YEARS EXPERIENCE:</p>
              <p className="DescriptionInAboutUs">
                We strive to simplify your life by offering cost-effective and
                expert services right at your doorstep. HomeFixRepair is one of
                the leading regional incorporated centers management answers
                company within the center East. Its service specialties are
                unfold across integrated facilities control, waste control, and
                lots of greater. HomeFixRepair released its domestic pro
                maintenance offerings in 2009 as an one-of-a-kind carrier
                department to hold and keep houses within the UAE.HomeFixRepair
                has accrued a group of reliable home preservation specialists to
                decorate the value, life, and beauty of your house. Our 24/7
                preservation carrier team takes care of your house so you can
                cognizance at the critical things in existence. Time is
                treasured and so is your private home. HomeFixRepair is here to
                serve you so you in no way ought to surrender on both of them.
              </p>
              <div className="my-4">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=Ghf6G8d1hfE"
                  width={"100%"}
                  height={"572px"}
                />
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <p className="SubHeadingInAboutUs mb-2">Our Challenges:</p>
              <p className="DescriptionInAboutUs">
                To emerge as a pacesetter in top rate home protection services
                and solutions for the duration of the UAE with an first rate
                crew of professionals.
              </p>
              <p className="SubHeadingInAboutUs mt-3 mb-3">
                HomeFixRepair offerings:
              </p>
              <p className="DescriptionInAboutUs">
                When it comes to remodeling, we do it all. We pride ourselves on
                our commitment to direct and honest service. Not to mention we
                never go over your budget unless you change the scope of work
                and our 5 year warranty ensures you have the best quality
                craftsmanship at home. No matter what home improvement project
                you dream of, the HOMEfix team can make it happen with ease.
              </p>
            </div>
            <div className="col-md-6 mt-4">
              <img
                src="/assets/images/AboutUsimage1.png"
                className="w-100"
                alt="AboutUsimage1"
              />
            </div>
            <div className="col-md-6 mt-5">
              <img
                src="/assets/images/AboutUsimage1.png"
                className="w-100"
                alt="AboutUsimage1"
              />
            </div>
            <div className="col-md-6 mt-5">
              <p className="SubHeadingInAboutUs">
                What are a number of the things to be careful about whilst
                hiring aHomeFixRepair:
              </p>
              <p className="DescriptionInAboutUs">
                while looking and hiring a HomeFixRepair in Dubai or UAE, it is
                essential to keep in mind the subsequent :1. The HomeFixRepair
                has the visa from a business enterprise with the perfect
                exchange license, with unique HomeFixRepair related classes,
                accepted via the financial development department.2. All
                essential insurances are in region – third birthday party
                liability, people' medical insurance, and employees’
                compensation in your peace of mind.3. because the high-quality
                of the carrier is dependent on the person’s qualification,
                experience, mind-set, and communique competencies, it is
                important to have the HomeFixRepair, and no longer the company,
                checked.four. The HomeFixRepair is prompt and responds to
                consumer queries, either directly or directing to the proper
                professional individual in case unsure approximately the
                provider.Failure to conform with neighborhood rules, as
                mentioned above, can result in hefty fines for customers
              </p>
            </div>

            <div className="col-md-6 mt-5">
              <p className="SubHeadingInAboutUs">Our records:</p>
              <p className="DescriptionInAboutUs">
                HomeFixRepair dedicates itself to guaranteeing expert domestic
                preservation offerings through a dating of accept as true with,
                revel in, and reliability that continues to exceed purchaser
                expectations.
              </p>
              <p className="SubHeadingInAboutUs mt-3">
                Why do HomeFixRepair charge by the hour?:
              </p>
              <p className="DescriptionInAboutUs">
                do now not typically require an inspection and may be done right
                away e.g. mounting a tv, curtain, or blind installation if the
                components are available. It, therefore, does now not make
                experience to do an inspection and charge a name-out.
                consequently it is more obvious and honest to each parties, to
                observe a in keeping with hour charging technique.
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <p className="SubHeadingInAboutUs">
                What are commonplace accidents that could occur because of
                low-satisfactory HomeFixRepair services?:
              </p>
              <p className="DescriptionInAboutUs">
                Even as hanging furniture, you may drill via a twine containment
                or a water pipe in the wall or drill the hollow too unfastened
                that the fixture isn’t firmly hung to the wall. also, the
                strength of the screw won't be appropriate to take the burden of
                the wall fixture making it liable to fall over time. also, the
                level of the wall fixture if no longer done well will cause a
                fall as weight of the fixture does not get balanced and remains
                hinged to one aspect. If proper cleanup isn't finished there
                could a nail that would hurt
              </p>
            </div>
            <div className="col-md-12 mt-4 mb-3">
              <WhyChooseUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
