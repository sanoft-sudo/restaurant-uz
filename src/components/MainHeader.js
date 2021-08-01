import React from "react";
import styled from "styled-components";
import HeadCarousel from "./top/HeadCarousel";
import TopNavbar from "./top/TopNavbar";
import TopNavMenu from "./top/TopNavMenu";

const StyledMainHeader = styled.div`
  position: relative;

  .image-overlay:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 1;
  }
  .above-head {
    display: block;
    width: 100%;
  }

  .menu-row {
    width: 100%;
    display: block;
  }
`;

const MainHeader = () => {
  return (
    <StyledMainHeader>
      <div className="image-overlay">
        <div className="above-head">
          <TopNavbar />
        </div>
        <div className="menu-row">
          <TopNavMenu />
        </div>
        <HeadCarousel />
      </div>
    </StyledMainHeader>
  );
};

export default MainHeader;
