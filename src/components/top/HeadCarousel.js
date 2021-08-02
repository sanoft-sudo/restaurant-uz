import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledCarousel = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;

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
  img.slider-image {
    width: 100%;
    height: 500px !important;
    object-fit: cover;
    object-position: center 80%;
  }
  .slick-prev {
    left: 28px;
  }
  .slick-next {
    right: 28px;
  }

  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    z-index: 2;
    top: 30%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -30%);
    -ms-transform: translate(0, -30%);
    transform: translate(0, -30%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:before {
    content: "\2039";
  }
  .slick-next:before {
    content: "\203A";
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function NextSlide(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fas fa-angle-right"></i>
    </div>
  );
}

function PrevSlide(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fas fa-angle-left"></i>
    </div>
  );
}

const HeadCarousel = () => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextSlide />,
    prevArrow: <PrevSlide />,
    adaptiveHeight: true
  };

  const sliderImg = [
    { id: "000012", src: "/assets/images/wallpaper.jpg", alt: "Lagman" },
    { id: "000013", src: "/assets/images/wallpaper2.jpg", alt: "Lagman" },
    { id: "000013", src: "/assets/images/wallpaper3.jpg", alt: "Lagman" },
    { id: "000013", src: "/assets/images/wallpaper4.jpg", alt: "Lagman" },
    { id: "000013", src: "/assets/images/walpaper6.jpg", alt: "Lagman" }
  ];

  return (
    <StyledCarousel id="section1">
      <Slider {...settings}>
        {sliderImg.map((slide, index) => (
          <div className="image-overlay">
            <img
              className="slider-image"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "center 80%"
              }}
              src={slide.src}
              alt={slide.alt}
            />
          </div>
        ))}
      </Slider>
    </StyledCarousel>
  );
};
export default HeadCarousel;
