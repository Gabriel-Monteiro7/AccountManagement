import React from "react";
import {
  ContainerNavBar,
  NewContainer,
  Brand,
  Icon,
  NewNav,
  NewNavItem,
  NewNavLink,
  ButtonLogon,
  IconLogon,
} from "./styles";
import history from "service/history";
import { singOut } from "store/modules/auth/actions";
import { useDispatch } from "react-redux";
export default function NavBar() {
  const dispatch = useDispatch();
  const routes = [
    { label: "Home", path: "/home" },
    { label: "Despesas", path: "/despesas" },
    { label: "Receitas", path: "/receitas" },
  ];
  return (
    <>
      <ContainerNavBar expand="lg" variant="dark">
        <NewContainer>
          <Brand>
            <Icon />
          </Brand>
          <ContainerNavBar.Toggle aria-controls="basic-navbar-nav" />
          <ContainerNavBar.Collapse id="basic-navbar-nav">
            <NewNav>
              {routes.map((route, index) => {
                return (
                  <NewNavItem
                    title={route.label}
                    selected={history.location.pathname === route.path}
                    key={route.path}
                  >
                    <NewNavLink to={route.path}>{route.label}</NewNavLink>
                  </NewNavItem>
                );
              })}
              <ButtonLogon
              title={"Sair"}
                onClick={() => {
                  dispatch(singOut());
                }}
              >
                <IconLogon />
              </ButtonLogon>
            </NewNav>
            {/* <ButtonToggle onClick={() => SetOpen(!open)}>
            {open ? <IconClose /> : <IconBars />}
          </ButtonToggle> */}
          </ContainerNavBar.Collapse>
        </NewContainer>
      </ContainerNavBar>
    </>
  );
}
