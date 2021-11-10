import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { faBiking } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const swimmerIcon = <FontAwesomeIcon icon={faSwimmer} />;
const bikingIcon = <FontAwesomeIcon icon={faBiking} />;
const strecthingIcon = <FontAwesomeIcon icon={faChild} />;
const dumbellIcon = <FontAwesomeIcon icon={faDumbbell} />;

const NavWrapper = styled.div`
  background-color: black;
  width: 60%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  justify-self: center;
`;

const NavIcon = styled.div`
  color: red;
  background-color: #fff;
  font-size: 1.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5em 0;
  height: 64px;
  width: 64px;
  border-radius: 6px;
`;

const Copyright = styled.p`
  color: #fff;
  font-size: 1em;
  width: 180px;
  transform: rotate(-90deg);
`;

const VerticalNav = () => {
  return (
    <>
      <NavWrapper>
        <IconWrapper>
          <NavIcon>{strecthingIcon}</NavIcon>
          <NavIcon>{swimmerIcon}</NavIcon>
          <NavIcon>{bikingIcon}</NavIcon>
          <NavIcon>{dumbellIcon}</NavIcon>
        </IconWrapper>
        <Copyright>Copiryght, SportSee 2020</Copyright>
      </NavWrapper>
    </>
  );
};
export default VerticalNav;
