import styled from "styled-components";
import { md } from "styles/global";
import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaCanadianMapleLeaf,
  FaBars,
  FaTimes,
  BiPowerOff,
} from "react-icons/all";

export const ContainerNavBar = styled(Navbar)`
  min-height:85px;
  position:fixed;
  width:100%;
  top:0px;
  z-index: 1032;
  transition: 0.3s ease-in-out;
  background: var(--color-primary-dark) !important;
  a {
    padding: 0px;
    color: white !important;
    &:hover {
      text-decoration: none;
    }

  }
  .collapse{
    align-items: center;
    @media (max-width: ${md}px) {
      width: 100%;
    }
  }
  /* @media (max-width: ${md}px) {
    position: fixed !important;
    width: 100%;
  } */
`;
export const Icon = styled(FaCanadianMapleLeaf)`
  font-size: 40px;
  margin-right: 20px;
`;

export const NewContainer = styled.div.attrs({})`
  width: 100%;
  margin: auto;
  height: 100%;
  padding: 0px 25px;
  max-width: 1220px;
  padding-right: 40px !important;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${md}px) {
    padding: 10px 0px !important;
  }
`;
export const NewNav = styled(Nav)`
  margin-right: 35px;
  width: 100%;
  @media (max-width: ${md}px) {
    align-items: center;
  }
`;
export const NewNavLink = styled(Link)``;
export const NavLink = styled.button``;

export const NewNavItem = styled(NavItem)`
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  padding: 0px !important;
  a {
    transition: 0.3s ease-in-out;

    color: ${(props) =>
      props.selected ? "var(--color-secundary)" : "#ffffff"} !important;
    padding: 15px 10px;
    border-bottom: 2px solid
      ${(props) =>
        props.selected ? "var(--color-secundary)" : "transparent"}!important;
    &:hover {
      border-color: var(--color-secundary) !important;
      color: var(--color-secundary) !important;
    }

  }

  line-height: 1.9;
  margin: 0px 10px;
  @media (max-width: ${md}px) {
    margin: 8px 0px;
  }
`;
export const Brand = styled(NavbarBrand)`
  color: white !important;
  align-items: baseline;
  display: flex;
  font-size: 30px;
  a {
    padding: 0px;
    color: white !important;
  }
`;
export const Hr = styled.hr`
  @media (max-width: ${md}px) {
    hr {
      margin-top: 10px;
      border-left: 0px solid white !important;
      border-top: 2px solid white !important;
      width: 100%;
    }
  }
`;
export const ButtonLogon = styled(NewNavItem)`
  background: transparent;
  display: flex;
  justify-content: center;
  border: 1px solid #18c78a7a;
  align-items: center;
  border-radius: 6px;
  height: 40px;
  width: 40px;
  opacity: 0.7;
  transition: ease-in-out 0.5s;
  margin: 0px 0px 0px auto;
  @media (max-width: ${md}px) {
    margin: 15px auto;
  }
  &:hover {
    opacity: 1;
  }
`;
export const IconLogon = styled(BiPowerOff)`
  font-size: 20px;
  color: var(--color-secundary);
`;
export const ButtonToggle = styled.button`
  display: none;
  color: white;
  @media (max-width: ${md}px) {
    display: block;
  }
`;
export const IconClose = styled(FaTimes)`
  font-size: 22px;
`;
export const IconBars = styled(FaBars)`
  font-size: 22px;
`;
