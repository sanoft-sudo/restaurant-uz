import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuCard from "../MenuCard";
import MenuCardReverse from "../MenuCardReverse";

const StyledDrinksDiv = styled.div`
  .card-container {
    padding: 5px;
  }
`;

const data = [
  {
    id: "breakfast01",
    image: "/assets/images/boiled-eggs.jpg",
    title: "Boiled Eggs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta placerat pretium.",
    avialable: "7:00 - 24:00"
  },
  {
    id: "breakfast01",
    image: "/assets/images/fried-eggs.jpg",
    title: "Fried Eggs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta placerat pretium.",
    avialable: "7:00 - 24:00"
  },
  {
    id: "breakfast01",
    image: "/assets/images/mastava-breakfast.jpg",
    title: "Mastava",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta placerat pretium.",
    avialable: "7:00 - 24:00"
  },
  {
    id: "breakfast01",
    image: "/assets/images/somsa-breakfast.jpg",
    title: "Somsa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta placerat pretium.",
    avialable: "7:00 - 24:00"
  }
];

const Drinks = () => {
  const [even, setEven] = useState([]);
  const [odd, setOdd] = useState([]);

  useEffect(() => {
    data.map((item, index) =>
      index % 2 === 0
        ? setEven((prevItems) => [...prevItems, item])
        : setOdd((prevItems) => [...prevItems, item])
    );
  }, []);

  return (
    <StyledDrinksDiv>
      <div className="row">
        {/* {
        odd.map((item, index) => (
            <div
            className="col-md-6 col-sm-12 card-container"
            data-aos="fade-right"
          >
            <MenuCard data={item} key={index} />
          </div>
        ))
      }
         {
        even.map((item, index) => (
            <div
            className="col-md-6 col-sm-12 card-container"
            data-aos="fade-left"
          >
            <MenuCard data={item} key={index} />
          </div>
        ))
      } */}
        <div
          className="col-md-6 col-sm-12 card-container"
          data-aos="fade-right"
          data-aos-once
        >
          <MenuCard data={data[0]} key="fr-egg" />
        </div>
        <div
          className="col-md-6 col-sm-12 card-container"
          data-aos="fade-left"
          data-aos-once
        >
          <MenuCardReverse data={data[1]} key="bl-egg" />
        </div>
        <div className="row">
          <div
            className="col-md-6 col-sm-12 card-container"
            data-aos="fade-right"
            data-aos-once
          >
            <MenuCard data={data[2]} key="mas" />
          </div>
          <div
            className="col-md-6 col-sm-12 card-container"
            data-aos="fade-left"
            data-aos-once
          >
            <MenuCardReverse data={data[3]} key="som" />
          </div>
        </div>
      </div>
    </StyledDrinksDiv>
  );
};
export default Drinks;
