import React, { useEffect, useState } from "react";

import ButtonTop from "components/ButtonTop";
import Footer from "components/Footer";
import NavBar from "components/Navbar";
import { Container} from "./styles";
export default function DefaultThemes({ children }) {
  const [positionTop, setPositionTop] = useState(0);

  useEffect(() => {
    window.onscroll = () => setPositionTop(window.pageYOffset);
  }, []);

  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      <ButtonTop positionTop={positionTop} />
      <Footer/>
    </>
  );
}
