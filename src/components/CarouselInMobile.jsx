import { Carousel } from "react-bootstrap";
import Slider from "react-slick";

function CarouselInMobile({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="">
          <div className="d-flex justify-content-center MarginTop">
            <div className="outerWrapperCarouselBox position-relative activeSlide p-4 text-white w-75">
              <img
                src={data[0].image}
                className="outerWrapperCarouselImageInMobileSize"
                alt=""
              />
              <p className={`CarouselHeading mt-2 text-white`}>
                {data[0].title}
              </p>
              <div className="d-flex justify-content-center my-2">
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
              </div>
              <p className="CarouselDescription text-white">{data[0].des}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center MarginTop">
            <div className="outerWrapperCarouselBox position-relative activeSlide p-4 text-white w-75">
              <img
                src={data[1].image}
                className="outerWrapperCarouselImageInMobileSize"
                alt=""
              />
              <p className={`CarouselHeading mt-2 text-white`}>
                {data[1].title}
              </p>
              <div className="d-flex justify-content-center my-2">
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
              </div>
              <p className="CarouselDescription text-white">{data[1].des}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center MarginTop">
            <div className="outerWrapperCarouselBox position-relative activeSlide p-4 text-white w-75">
              <img
                src={data[2].image}
                className="outerWrapperCarouselImageInMobileSize"
                alt=""
              />
              <p className={`CarouselHeading mt-2 text-white`}>
                {data[1].title}
              </p>
              <div className="d-flex justify-content-center my-2">
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
                <img
                  src="/assets/icons/star.png"
                  alt="star"
                  className="Stars"
                />
              </div>
              <p className="CarouselDescription text-white">{data[2].des}</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselInMobile;
