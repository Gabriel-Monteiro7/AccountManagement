import React from "react";

// import { Container } from './styles';
import StyleFooter from "./styles";
import { FaGithubAlt, FaFacebookF, FaLinkedin } from "react-icons/fa";
// import Logo from "../Logo";
import { Container } from "react-bootstrap";
export default function Footer() {
  const year = new Date();

  return (
    <StyleFooter>
      <Container>
        <div className="row">
          <div className="col-3">{/* <Logo /> */}</div>
          <div className="text-center py-3 col-12 py-3 ">
            <span className="">follow us:</span>

            <div className="text-muted py-2 d-flex justify-content-center align-items-center icones">
              <a
                href="https://www.linkedin.com/in/gabriel-monteiro-978aa8189/"
                title="Ir para pagina no Linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/"
                title="Ir para pagina no facebook"
              >
                <FaFacebookF />
              </a>

              <a href="https://github.com/Gabriel-Monteiro7" title="Ir para pagina no GitHub">
                <FaGithubAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright text-muted row text-lg-left text-center">
          <div className="col-12 col-lg-4">
            © {year.getFullYear()} Todos os direitos reservados.
          </div>
        </div>
      </Container>
    </StyleFooter>
  );
}
