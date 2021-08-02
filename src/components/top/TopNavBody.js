import React from "react";
import styled from "styled-components";

const StyledNavBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    /* margin-top: 252px; */
    background: #fff;
    box-sizing: border-box;
    z-index: 0;
    position: relative;

    .col-body .col-bodyTitle,
    .col-body .col-bodyRecipe {
      color: black;
    }
  }

  @media (max-width: 630px) {
    position: relative;
    z-index: 0;
    .subHead-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      box-sizing: border-box;
      padding: 0;
    }
    .col-body .col-bodyTitle,
    .col-body .col-bodyRecipe {
      margin: 3px auto;
    }
    .col-body {
      margin-bottom: 10px;
    }
  }

  .meal-img {
    width: 80px;
    object-fit: contain;
    clip-path: circle(50% at 50% 50%);
  }
  .subHead-body {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .subbox-content {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: baseline; */
    text-align: center;
  }

  .col-body {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  .col-bodyTitle {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    min-width: 150px;
    max-width: 300px;
    margin-bottom: 8px;
    flex-wrap: wrap;
    display: inline-block;
  }

  .col-bodyRecipe {
    color: #fff;
    text-align: center;
    font-size: 13px;
    font-weight: 300;
    min-width: 150px;
    max-width: 300px;
    box-sizing: border-box;
    flex-wrap: wrap;
    display: inline-block;
  }
`;

const TopNavBody = () => {
  const data = [
    {
      id: "col-body1",
      src: "/assets/images/palov-sub.jpg",
      alt: "palov",
      title: "The best palov",
      recipe: "olive oil, rice, beef or lamb, onions, carrots..."
    },
    {
      id: "col-body2",
      src: "/assets/images/soup-sub.jpg",
      alt: "soup",
      title: "The best boild soup",
      recipe: "Spiced meat (lamb, beef, chicken)..."
    },
    {
      id: "col-body3",
      src: "/assets/images/shashlik-sub.jpg",
      alt: "shashlik",
      title: "The best Shashlik",
      recipe: "Spiced meat (lamb, beef, chicken)..."
    },
    {
      id: "col-body4",
      src: "/assets/images/manti-sub.jpg",
      alt: "manti",
      title: "The best Manti ",
      recipe: "Spiced meat (lamb or ground beef)..."
    }
  ];

  return (
    <StyledNavBody>
      <div className="row subHead-body " data-aos="fade-up" data-aos-once>
        {data.map((meal, index) => (
          <div className="col-md-3 subbox-content" key={index}>
            <div className="col-header">
              <img className="meal-img" src={meal.src} alt={meal.src} />
            </div>
            <div className="col-body">
              <span className="col-bodyTitle">{meal.title} </span>
              <span className="col-bodyRecipe">{meal.recipe} </span>
            </div>
          </div>
        ))}
      </div>
    </StyledNavBody>
  );
};
export default TopNavBody;
