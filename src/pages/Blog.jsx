import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {};
  }, [location.pathname]);
  return (
    <div className="mb-5">
      <div className="container-fluid ">
        <div className="row">
          <p className="text-start my-3 headingInBookProfessional">Blog</p>
          <p className="TextHolderLatestStory">Latest Stories</p>
          <hr className="LineInBlog mb-3" />
          <div className="col-md-6 ">
            <div>
              <Link to={"/blog-details"}>
                <img
                  src="/assets/images/BlogImage1.jpg"
                  className="w-100 rounded h-100"
                  alt="BlogImage1"
                />
              </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">Carpenter</p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>

            <p className="SubHeadingInBlog mb-2">
              A carpenter is a skilled craftsman who specializes in working with
              wood to create, construct, and repair various structures and
              objects. The role of a carpenter extends beyond simply cutting and
              shaping wood; it encompasses a range of tasks related to building
              and finishing. Carpenters play a crucial role in the construction
              industry and are essential for both residential and commercial
              projects.
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/PeterHese.jpg" alt="PeterHese" className="UserImageInBlog" />
              <div>
                <p className="userHeadingInBlog">Peter Hese</p>
                <p className="mt-2 userSubHeadingInBlog">
                  Jun 14 . 16 min read
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div>
              <Link to={"/blog-details"}>
                <img
                  src="/assets/images/BlogImage5.svg"
                  className="w-100 rounded h-100"
                  alt="BlogImage1"
                />
              </Link>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">Electrician</p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>
            <p className="SubHeadingInBlog mb-2">
              An electrician is a skilled tradesperson who specializes in the
              installation, maintenance, and repair of electrical systems and
              components. The role of an electrician is crucial in ensuring that
              electrical systems function safely and efficiently in various
              settings, including residential, commercial, and industrial
              environments. Here are key aspects of an electrician's work:
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/johnDeo.jpg" alt="johnDeo" className="UserImageInBlog" />
              <div>
                <p className="userHeadingInBlog">John Deo</p>
                <p className="mt-2 userSubHeadingInBlog">
                  Des 12 . 10 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 ">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/BlogImage3.svg"
                className="w-100 rounded"
                alt="BlogImage1"
              />
            </Link>

            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">Handyman</p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>
            <p className="SubHeadingInBlog mb-2">
              A handyman is a skilled and versatile tradesperson who is
              proficient in a wide range of home maintenance and repair tasks.
              Handymen are often hired to handle various odd jobs and minor
              repairs around homes, offices, or commercial spaces. Here are key
              aspects of a handyman's work:
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/charlie.webp" alt="charlie" className="UserImageInBlog" />
              <div>
                <p className="userHeadingInBlog">Charlie</p>
                <p className="mt-2 userSubHeadingInBlog">
                  Des 11 . 6 min read
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/BlogImage4.svg"
                className="w-100 rounded"
                alt="BlogImage1"
              />
            </Link>
            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">Plumbing</p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>
            <p className="SubHeadingInBlog mb-2">
              Plumbing is a critical aspect of construction and home maintenance
              that involves the installation, repair, and maintenance of systems
              that convey fluids, usually water and sewage. Plumbers are skilled
              tradespeople who specialize in working with pipes, fixtures, and
              other components to ensure the proper functioning of plumbing
              systems. Here are key aspects of plumbing:
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/timkozak.jpg" alt="timkozak" className="UserImageInBlog" />
              <div>
                <p className="userHeadingInBlog">Timko Zak</p>
                <p className="mt-2 userSubHeadingInBlog">
                  APR 23 . 20 min read
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/BlogImage2.svg"
                className="w-100 rounded"
                alt="BlogImage1"
              />
            </Link>
            <div className="d-flex justify-content-between align-items-center mt-1">
              <p className="my-2 HeadingInBlog">Electrician</p>
              <Link to={"/blog-details"}>
                <Button className="button">Learn More</Button>
              </Link>
            </div>
            <p className="SubHeadingInBlog mb-2">
              An electrician is a skilled tradesperson who specializes in the
              installation, maintenance, and repair of electrical systems and
              components. The role of an electrician is crucial in ensuring that
              electrical systems function safely and efficiently in various
              settings, including residential, commercial, and industrial
              environments. Here are key aspects of an electrician's work:
            </p>
            <div className="outerWrapperUserInBlog d-flex gap-2">
              <img src="/assets/images/Will.jpg" alt="William" className="UserImageInBlog" />
              <div>
                <p className="userHeadingInBlog">William E. Carter</p>
                <p className="mt-2 userSubHeadingInBlog">
                  JAN 29 . 2 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 mt-3">
          <p className="TextHolderLatestStory">Latest Stories</p>
          <hr className="LineInBlog mb-3" />
          <div className="col-md-7">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/blogDetails1.jpg"
                className="w-100 h-100 rounded"
                alt="blogDetails1"
              />
            </Link>
          </div>
          <div className="col-md-5">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/blogDetails2.jpg"
                className="w-100 h-100 rounded"
                alt="blogDetails1"
              />
            </Link>
          </div>
          <div className="col-md-5">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/blogDetails3.jpg"
                className="w-100 h-100 rounded"
                alt="blogDetails3"
              />
            </Link>
          </div>
          <div className="col-md-7">
            <Link to={"/blog-details"}>
              <img
                src="/assets/images/blogDetails4.jpg"
                className="w-100 h-100 rounded"
                alt="blogDetails4"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
