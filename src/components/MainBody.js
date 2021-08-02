import React from "react";
import styled from "styled-components";
import About from "./about/About";
import MenuMeal from "./menu/MenuMeal";

const StyledMainBodyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const MainBody = () => {
  return (
    <StyledMainBodyDiv>
      <About />
      <MenuMeal />
    </StyledMainBodyDiv>
  );
};
export default MainBody;
