import React from "react";
import styled from "styled-components";

const StyledAboutDiv = styled.div`
  padding: 25px;
  z-index: 0;

  h1 {
    color: #fff;
  }

  .section2-imageBox {
    display: flex;
    flex-direction: row;
    min-height: 100px;
    max-height: 300px;
    height: 250px;
    width: 100%;
    /* max-width: 450px; */
    min-width: 150px;
    /* max-width: 450px; */
  }
  .about-about {
    max-width: 100%;
    min-width: 75px;
  }
  .section2-imageBox img {
    height: 100%;
    width: 100%;
    padding: 2px;
    object-fit: cover;
    object-position: center;
  }
  .about-title h1 {
    margin-top: 10px;
    color: rgba(143, 135, 135, 1);
    letter-spacing: 2px;
    font-family: "Great Vibes", cursive;
  }
  .about-title {
    padding: 5px;
    display: inline-block;
  }
  .about-description {
    padding: 5px 15px;
    display: inline-block;
    font-family: "Open Sans", sans-serif;
  }
  .about-row {
    display: flex;
  }

  @media (max-width: 630px) {
    .section2-imageBox {
      flex-direction: row;
      min-height: 100px;
      width: 100%;
    }
    .about-about {
      width: 100%;
    }
    .section2-imageBox img {
      height: 100%;
      width: 100%;
      padding: 2px;
    }
    .about-row {
      display: flex;
      flex-direction: column;
    }
  }
`;

const About = () => {
  return (
    <StyledAboutDiv id="section2">
      <div className="row about-row">
        <div className="col-md-8 col-sm-12">
          <div className="section2-imageBox">
            <div data-aos="fade-right" data-aos-once>
              <img src="/assets/images/exterior-res.jpg" alt="" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-offset="0"
              data-aos-once
            >
              <img src="/assets/images/interior-res.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 ">
          <div className="about-about">
            <span className="about-title" data-aos="fade-left" data-aos-once>
              <h1> Your Restaurant</h1>
            </span>
            <span
              className="about-description"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-offset="0"
              data-aos-once
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </span>
          </div>
        </div>
      </div>
    </StyledAboutDiv>
  );
};
export default About;
