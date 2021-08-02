import MainHeader from "./components/MainHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import MainBody from "./components/MainBody";
import styled from "styled-components";

const StyledAppDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
AOS.init({ duration: 2000 });

export default function App() {
  return (
    <div className="container-fluid">
      <StyledAppDiv>
        <MainHeader />
        <MainBody />
      </StyledAppDiv>
    </div>
  );
}
