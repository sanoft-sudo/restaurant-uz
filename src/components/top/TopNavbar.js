import React from "react";
import styled from "styled-components";

const StyledTopNav = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 10px;

    .top-navDivs {
      margin-bottom: 5px;
      text-align: center;
      justify-content: center;
      display: inline-block;
    }
  }

  @media (max-width: 515px) {
    .nested-span {
      display: flex;
      flex-direction: column;
    }
    .nested-span span {
      margin-bottom: 3px;
    }
  }

  .top-navDivs {
    display: flex;
    align-items: center;
    font-size: 13px;

    color: #d4d1cb;
  }
  a,
  span {
    text-decoration: none;
    color: #d4d1cb;
    font-size: 13px;
    margin-left: 5px;
    display: inline-block;
  }
`;

const TopNavbar = () => {
  return (
    <StyledTopNav>
      <div className="top-navDivs">
        <i className="fas fa-phone-alt"></i>
        <a className="topAClass" href="tel:+998977088389">
          +998977088389
        </a>
      </div>
      <div className="top-navDivs">
        <i className="fas fa-paper-plane"></i>
        <a className="mailto" href="mailto:sajar.juraev0409@gmail.com">
          your-restaurant@test.com
        </a>
      </div>
      <div className="top-navDivs">
        <i class="far fa-clock"></i>
        <span className="nested-span">
          <span>Open hours:</span> <span>Monday - Sunday 7:00 - 24:00</span>
        </span>
      </div>
    </StyledTopNav>
  );
};
export default TopNavbar;
