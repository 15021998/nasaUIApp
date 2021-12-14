import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";
import { COLORS, WEIGHTS } from "../../constants";

const Sidebar = () => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <img
          alt={"vendor meta logo"}
          src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
          width="100"
          height="87"
        />
        <Title>NeoWs</Title>
      </ProfileWrapper>
      <NavLink to={`/nasaUIApp/neo-browse-api`}>Neo Browse API</NavLink>
      <NavLink to={`/nasaUIApp/neo-lookup-api`}>Neo Lookup API</NavLink>
      <NavLink to={`/nasaUIApp/neo-feed-api`}>Neo Feed API</NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  background-color: ${COLORS.gray[100]};
  height: 100vh;
`;

const NavLink = styled(RouterLink)`
display: block;
text-decoration: none;
font-weight: ${WEIGHTS.medium};
color: ${COLORS.black};
line-height: 2;
font-size: 1rem;
padding: 20px 10px;
border-left-width: 10px;
border-style: solid;
border-color: ${COLORS.gray[100]};
&.active {
  background-color: ${COLORS.white};
  border-color: ${COLORS.secondary};
}
  @media (max-width: 925px) {
    text-align: center;
    border-width: 10px;
    color: ${COLORS.white};
    background-color: ${COLORS.secondary};
    border-radius: 20px;
    // border-color: ${COLORS.secondary};
  }
`;

const ProfileWrapper = styled.header`
  text-align: center;
  padding: 33px 0px;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: ${WEIGHTS.bold};
  line-height: 2;
`;

export default Sidebar;
