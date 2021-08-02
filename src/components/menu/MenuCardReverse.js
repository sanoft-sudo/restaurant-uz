import React from "react";
import styled from "styled-components";

const StyledCardDiv = styled.div`
  .row {
    display: flex;
  }
  .img-container {
    background: rgba(0, 0, 0, 0.6);
  }
  .breakfast-image {
    width: 80px;
    object-fit: contain;
    clip-path: circle(50% at 50% 50%);
  }
  .card-content {
    padding: 5px;
    display: flex;
    flex-direction: column;
  }
  .breakfast-title {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.5px;
  }
  .breakfast-description {
    font-size: 15px;
    margin-bottom: 3px;
  }
  .breakfast-avialable {
    font-size: 13px;
    font-weight: 600;
  }
`;

const MenuCardReverse = ({ data }) => {
  return (
    <StyledCardDiv>
      <div className="row">
        <div className="col-md-8 col-sm-8 col-xs-12 card-content">
          <span className="breakfast-title">{data.title}</span>
          <span className="breakfast-description">{data.description}</span>
          <span className="breakfast-avialable">{data.avialable}</span>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12 img-container">
          <img
            src={data.image}
            className="breakfast-image"
            alt="breakfast-img"
          />
        </div>
      </div>
    </StyledCardDiv>
  );
};
export default MenuCardReverse;
