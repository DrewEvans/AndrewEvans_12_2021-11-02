import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import styled from "styled-components";

const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Links = styled.h2`
  color: #E6000;
  text-decoration-style: none;
`;

const AppLogo = styled.img`
  margin: 2em 0;
  height: 61px;
  width: 178px;
  justify-self: flext-start;
`;

function Login() {
  return (
    <UserWrapper>
      <AppLogo src={Logo}></AppLogo>
      <Links>
        <NavLink to={"/12"}>User 12</NavLink>
      </Links>
      <Links>
        <NavLink to={"/18"}>User 18</NavLink>
      </Links>
    </UserWrapper>
  );
}

export default Login;

//
// {userData.keyData.calorieCount}
// {userData.keyData.proteinCount}
// {userData.keyData.carbohydrateCount}
// {userData.keyData.lipidCount}
