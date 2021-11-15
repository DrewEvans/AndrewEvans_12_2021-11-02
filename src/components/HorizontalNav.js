import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const NavWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NavList = styled.ul`
  color: White;
  font-size: 1.5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  list-style-type: none;
`;

const NavLinks = styled.li`
  margin: 0 0.25em;
`;

const AppLogo = styled.img`
  margin: 0 1.5em;
  height: 61px;
  width: 178px;
`;

const HorizontalNav = () => {
  return (
    <>
      <NavWrapper>
        <NavLink to={"/"}>
          <AppLogo src={Logo}></AppLogo>
        </NavLink>
        <NavList className='nav-list'>
          <Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
            <NavLinks className='nav-links'>Accueil</NavLinks>
          </Link>
          <Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
            <NavLinks className='nav-links'>Profil</NavLinks>
          </Link>
          <Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
            <NavLinks className='nav-links'>Réglage</NavLinks>
          </Link>
          <Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
            <NavLinks className='nav-links'>Communaté</NavLinks>
          </Link>
        </NavList>
      </NavWrapper>
    </>
  );
};

export default HorizontalNav;
