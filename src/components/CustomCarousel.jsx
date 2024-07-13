import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import CarouselBox from "./CarouselBox";
import CarouselInMobile from "./CarouselInMobile";
const getTouches = (evt) => {
  return evt.touches || evt.originalEvent.touches; // browser API
};

const CustomCarousel = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(true);
  const [enableSwipe] = useState(true);
  const [xDown, setXDown] = useState(null);
  const [yDown, setYDown] = useState(null);
  let CarouselData = [
    {
      title: "Greg Archbld, Founder & CE",
      image: "/assets/images/carousel1.svg",
      des: "If Syed Construction and Maintenance  is a real company, you may want to check online reviews, testimonials, and other sources to gather information about their reputation and services. You could also visit their official website, social media profiles, or contact them directly for the most accurate and up-to-date information.",
    },
    {
      title: "Timkozak",
      image: "/assets/images/carousel2.svg",
      des: "Syed Construction and Maintenance  did a solid job addressing my plumbing concerns. The positives outweigh the minor inconveniences, and I would consider using their services again. Recommended for their professionalism and quality work.",
    },
    {
      title: "Charlie",
      image: "/assets/images/carousel3.svg",
      des: "Syed Construction and Maintenance  exceeded my expectations in every aspect. I highly recommend them for their professionalism, skilled workforce, and commitment to customer satisfaction. If you're looking for a reliable home improvement partner, Syed Construction and Maintenance  is the way to go.",
    },
  ];
  const slides = [
    {
      key: uuidv4(),
      content: (
        <CarouselBox
          title={CarouselData[0].title}
          imag={CarouselData[0].image}
          description={CarouselData[0].des}
          activeSlide={goToSlide == 0}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <CarouselBox
          title={CarouselData[1].title}
          imag={CarouselData[1].image}
          description={CarouselData[1].des}
          activeSlide={goToSlide == 1}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <CarouselBox
          title={CarouselData[2].title}
          imag={CarouselData[2].image}
          description={CarouselData[2].des}
          activeSlide={goToSlide == 2}
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  const handleTouchStart = (evt) => {
    if (!enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  };

  const handleTouchMove = (evt) => {
    if (!enableSwipe || (!xDown && !yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setGoToSlide(goToSlide + 1);
      } else {
        /* right swipe */
        setGoToSlide(goToSlide - 1);
      }
      setXDown(null);
      setYDown(null);
    }
  };
  const [autoScroll, setAutoScroll] = useState(true);


  useEffect(() => {
    // Define a function to handle automatic scrolling
    const handleAutoScroll = () => {
      if (autoScroll) {
        // Increment the slide index to move to the next slide
        setGoToSlide((prevGoToSlide) => (prevGoToSlide + 1) % slides.length);
      }
    };

    // Set up an interval for automatic scrolling
    const intervalId = setInterval(handleAutoScroll, 4000); // Adjust the interval as needed (e.g., 5000ms for 5 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [autoScroll]);

  return (
    <div className="position-relative">
      <img
        src="/assets/images/CarouselBackImage.jpg"
        className="BackImagesInCarousel"
        alt=""
      />
      <div className="outerContainerCarousel">
        <div className="outerWrapperHeaderClients">
          <h3 className="headingOurClients">Our Clients Reviews</h3>
        </div>
        <div className="carouselInFullSize">
          <CarouselInMobile data={CarouselData} />
        </div>
        <div className="d-flex justify-content-center">
          <div className="CarouselInMobile CarouselSize">
            <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
              <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showNavigation}
                animationConfig={config.slow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomCarousel;
