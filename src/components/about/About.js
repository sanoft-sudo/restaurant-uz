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
    flex-direction: column;
  }
  .section2-imageBox img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .about-title h1 {
    color: #000;
  }
  .about-description {
    padding: 5px 15px;
    display: inline-block;
  }

  @media (max-width: 630px) {
    .section2-imageBox {
      flex-direction: row;
      min-height: 100px;
      width: 100%;
    }
    .section2-imageBox img {
      height: 100%;
      width: 100%;
      padding: 2px;
    }
  }
`;

const About = () => {
  return (
    <StyledAboutDiv id="section2">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="section2-imageBox">
            <div>
              <img src="/assets/images/exterior-res.jpg" alt="" />
            </div>
            <div>
              <img src="/assets/images/interior-res.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <span className="about-title">
            <h1> Your Restaurant</h1>
          </span>
          <span className="about-description">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </span>
        </div>
      </div>
    </StyledAboutDiv>
  );
};
export default About;
