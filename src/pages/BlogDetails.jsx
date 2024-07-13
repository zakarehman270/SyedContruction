import React,{useEffect} from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const BlogDetails = () => {
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
          <p className="text-start my-3 headingInBookProfessional">
            Blog Details
          </p>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex align-items-center gap-2 w-100">
              <img
                src="/assets/images/blogDetailsUser1.svg"
                alt="blogDetailUser"
                className="BlogDetailsUser"
              />
              <div className="w-100">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="BlogDetailsUserHeading"> John Peterson</p>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="/assets/icons/twitterBlog.svg"
                      alt="twitterBlog"
                    />
                    <img
                      src="/assets/icons/facebookBlog.svg"
                      alt="facebookBlog"
                    />
                    <img
                      src="/assets/icons/linkedinBlog.svg"
                      alt="linkedinBlog"
                    />
                    <img
                      src="/assets/icons/linkInBlog.svg"
                      alt="linkInBlog"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2">
                  <p className="BlogDetailsUserSubHeading">Sep 27,2020</p>
                  <p className="BlogDetailsUserSubHeading">11 min read</p>
                  <div className="d-flex">
                    <img
                      src="/assets/icons/starBlog.svg"
                      alt="starBlog"
                      className="starBlog"
                    />
                    <p className="BlogDetailsUserSubHeading">
                      Members-only
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="mainHeadingInBlogDetails mt-3">
              Publish the Mern stack on Ubuntu Server 18.04 or 20.04 with
              ‘certblo’SSL - Part 1
            </h1>
            <div className="mt-2">
              <img
                src="/assets/images/blogDetailImage.jpg"
                alt="blogDetailImage"
                className="blogDetailImage w-100"
              />
            </div>
            <div className="p-4">
              <p className="descriptionInBlogDetails">
                This is a two-part article;
              </p>
              <ol>
                <li className="descriptionInBlogDetails">
                  Publish the MERN stack on Ubuntu — this part.
                </li>
                <li className="descriptionInBlogDetails">
                  MERN Deployment script with Grunt
                </li>
              </ol>
            </div>
            <div className="mt-3">
              <h1 className="HeadingQuestions">
                What is the MERN stack?
              </h1>
              <p className="mt-2 descriptionInBlogDetails">
                MERN stack is a JavaScript stack that makes the
                development process easier as it all based on Javascript.
                MERN includes four open-source technologies: MongoDB,
                Express, React, and Node.js. These technologies provide us
                a complete end-to-end cycle from front-end to back-end
                frameworks.
              </p>
            </div>
            <div className="mt-3">
              <h1 className="HeadingQuestions">Why Ubuntu Server?</h1>
              <p className="mt-2 descriptionInBlogDetails">
                When it comes to publishing work there are many servers
                and approaches to take. You can set a virtual
                non-dedicated server, split the front-end from the
                back-end into two separate servers, Heroku, Windows
                Server, you can even use Serverless Framework, just to
                name a few, the options are limitless.
                <br />
                In this section we will be publishing on Ubuntu server but
                keep in mind that there are many solutions and you need to
                do your own research to find the best fit for what you
                doing.
                <br />
                Publishing the MERN on Ubuntu server holds many benefits
                as we can roll one server and have the server store our
                backend, frontend and database as well as having a
                resource at our disposal we can run other scripts such as
                scripts for automations as just one example.
              </p>
              <img
                src="/assets/images/blogDetailsImage2.jpg"
                alt="blogDetailsImage"
                className="my-2 blogDetailImage w-100"
              />
              <p className="mt-2 descriptionInBlogDetails">
                I like this setup because I have full control on one
                dedicated server in case I want to set a corn-jobs, modify
                headers. I used to split the back-end from the front-end,
                however, setting up both on the same server is more ideal
                for small to medium non-enterprise projects.
              </p>
            </div>
            <div className="mt-3">
              <h1 className="HeadingQuestions">
                Ubuntu 16.04, 18.04 or 20.04?
              </h1>
              <p className="mt-2 descriptionInBlogDetails">
                Ubuntu 20.04 LTS named “Focal Fossa” is the latest stable
                version of Ubuntu, however, it’s not always the best to
                use the latest version as not all servers providers will
                have that option and a server that has been out for two
                years may be more “stable”. Ubuntu version 20.04 gives
                some nice features its re-boot quicker and has new
                features that are worth exploring such as advanced GUI.
                <br />
                Ubuntu 18.04 is more stable than 16.04 and 16.04 is close
                to the end of its life soon so I would not install 16.04.
                <br />
                If you go with “Bionic Beaver” (Ubuntu 18.04), that
                version was released on April, 26th 2018 and it would give
                you security & updates until April 2023. That or 20.04 is
                my recommendation in regards to the Ubuntu server at the
                time of writing.
                <br />
                Ubuntu 19.04 is a short-term support release and it was
                supported till January 2020 so this release should be
                skipped altogether.
              </p>
            </div>
          </div>
          <div className="col-md-4 outerWrapperRightSideOfBlogDetails">
            <div>
              <img
                src="/assets/images/blogDetailsUser1.svg"
                alt="blogDetailUser"
                className="BlogDetailsUserRightSide"
              />
              <p className="HeadingUserInRightSideBlogDetails mt-2">
                {" "}
                John Peterson
              </p>
              <p className="SubHeadingRightSideBlogDetails mt-2">
                225 Followers
              </p>
              <p className="SubHeadingRightSideBlogDetails mt-2">
                Technologist, dive instructor, pilot —
                https://EliElrom.com
              </p>
              <div className="mt-2 d-flex flex-wrap gap-3 align-items-center">
                <Button className="FollowButton">Follow</Button>
                <div>
                  <img
                    src="/assets/icons/blogMessage.svg"
                    alt="blogMessage"
                    className="c_pointer"
                  />
                </div>
              </div>
              <h1 className="MainHeadingInRightBlogDetails my-3">
                More from Outsoursea
              </h1>
              <div className="d-flex gap-2">
                <div>
                  <div className="d-flex align-items-center gap-2 mt-3">
                    <img
                      src="/assets/images/blogDetailsUser3.svg"
                      alt="blogDetailsUser"
                      className="blogDetailsUser2"
                    />
                    <p className="DescriptionDetailsBogUserInRightSide">
                      Peterson distribute...
                    </p>
                  </div>
                  <p className="HeadingInRightSideBlogDetails mt-2">
                    Deploy React-Node.js Application in a Virtual Machine
                  </p>
                </div>
                <div>
                  <img src="/assets/images/LogoInBlogDetails.jpg" alt="" />
                </div>
              </div>
              <div className="d-flex gap-2 mt-2">
                <div>
                  <div className="d-flex align-items-center gap-2 mt-3">
                    <img
                      src="/assets/images/blogDetailsUser2.svg"
                      alt="blogDetailsUser"
                      className="blogDetailsUser2"
                    />
                    <p className="DescriptionDetailsBogUserInRightSide">
                      Peterson distribute...
                    </p>
                  </div>
                  <p className="HeadingInRightSideBlogDetails mt-2">
                    Deploy React-Node.js Application in a Virtual Machine
                  </p>
                </div>
                <div>
                  <img src="/assets/images/LogoInBlogDetails2.jpg" alt="" />
                </div>
              </div>
              <div className="d-flex gap-2 mt-2">
                <div>
                  <div className="d-flex align-items-center gap-2 mt-3">
                    <img
                      src="/assets/images/blogDetailsUser4.svg"
                      alt="blogDetailsUser"
                      className="blogDetailsUser2"
                    />
                    <p className="DescriptionDetailsBogUserInRightSide">
                      Peterson distribute...
                    </p>
                  </div>
                  <p className="HeadingInRightSideBlogDetails mt-2">
                    Deploy React-Node.js Application in a Virtual Machine
                  </p>
                </div>
                <div>
                  <img src="/assets/images/LogoInBlogDetails3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
