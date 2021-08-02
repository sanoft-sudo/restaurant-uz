import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Breakfast from "./breakfast/Breakfast";
import Lanch from "./lanch/Lanch";
import Dinner from "./dinner/Dinner";
import Drinks from "./drinks/Drinks";
import Desserts from "./desserts/Desserts";

const StyledMenuMealDiv = styled.div`
  padding: 10px 25px;
  .allmenu-title {
    font-weight: 800;
    color: #000;
    font-size: 30px;
  }
`;

const data = [
  { id: "menu001", title: "Breakfast", toLink: "/breakfast" },
  { id: "menu002", title: "Lanch", toLink: "/lanch" },
  { id: "menu003", title: "Dinner", toLink: "/dinner" },
  { id: "menu004", title: "Drinks", toLink: "/drinks" },
  { id: "menu005", title: "Desserts", toLink: "/desserts" },
  { id: "menu006", title: "All", toLink: "/allMenu" }
];

const MenuMeal = () => {
  return (
    <StyledMenuMealDiv id="section3">
      <Tabs>
        <TabList>
          {data.map((menuItem, index) => (
            <Tab key={index}>{menuItem.title}</Tab>
          ))}
        </TabList>

        <TabPanel>
          <Breakfast />
        </TabPanel>
        <TabPanel>
          <Lanch />
        </TabPanel>
        <TabPanel>
          <Dinner />
        </TabPanel>
        <TabPanel>
          <Drinks />
        </TabPanel>
        <TabPanel>
          <Desserts />
        </TabPanel>
        <TabPanel>
          <div data-aos="zoom-in" data-aos-once>
            <h1 className="allmenu-title">Breakfast</h1>
          </div>
          <Breakfast />
          <div data-aos="zoom-in" data-aos-once>
            <h1 className="allmenu-title">Lanch</h1>
          </div>
          <Lanch />
          <div data-aos="zoom-in" data-aos-once>
            <h1 className="allmenu-title">Dinner</h1>
          </div>
          <Dinner />
          <div data-aos="zoom-in" data-aos-once>
            <h1 className="allmenu-title">Drinks</h1>
          </div>
          <Drinks />
          <div data-aos="zoom-in" data-aos-once>
            <h1 className="allmenu-title">Desserts</h1>
          </div>
          <Desserts />
        </TabPanel>
      </Tabs>
    </StyledMenuMealDiv>
  );
};
export default MenuMeal;
