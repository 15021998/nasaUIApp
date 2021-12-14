import { Outlet as RouteComponent } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import GlobalStyles from "../../components/GlobalStyles";
import MaxWidthWrapper from "../../components/MaxWidthWrapper/MaxWidthWrapper";
import Sidebar from "../../components/Sidebar/Sidebar";

function App() {
  const location = useLocation();
  const atChild = location.pathname !== "/nasaUIApp" ? true : false;
  return (
    <Wrapper>
      <LeftColumn atChild={atChild}>
        <Sidebar />
      </LeftColumn>
      <MainColumn>
        <MaxWidthWrapper>
          <RouteComponent />
        </MaxWidthWrapper>
      </MainColumn>
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftColumn = styled.div`
  // flex-basis: 355px;
  width: 355px;
  position: fixed;
  overflow-x: hidden;
  @media (max-width: 925px) {
    ${({ atChild }) =>
      atChild &&
      `
    display: none;
  `}
    width: 100%;
  }
`;

const MainColumn = styled.div`
  overflow-x: hidden;
  padding-top: 55px;
  margin-left: 355px;
  flex: 1;
  @media (max-width: 925px) {
    padding-top: 55px;
    flex: 1;
    margin-left: 0px;
  }
`;
