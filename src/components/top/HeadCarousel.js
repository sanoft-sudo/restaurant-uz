import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledCarousel = styled.div`
  position: relative;
  .slider-image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  /* .image-overlay:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 1;
  } */
`;

const HeadCarousel = () => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const sliderImg = [
    { id: "000012", src: "/assets/images/wallpaper.jpg", alt: "Lagman" },
    { id: "000013", src: "/assets/images/wallpaper2.jpg", alt: "Lagman" },
    { id: "000013", src: "/assets/images/wallpaper3.jpg", alt: "Lagman" },
    { id: "000013", src: "/assets/images/wallpaper4.jpg", alt: "Lagman" },
    { id: "000013", src: "/assets/images/walpaper6.jpg", alt: "Lagman" }
  ];

  return (
    <StyledCarousel>
      <Slider {...settings}>
        {sliderImg.map((slide, index) => (
          <div className="image-overlay">
            <img className="slider-image" src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </StyledCarousel>
  );
};
export default HeadCarousel;
