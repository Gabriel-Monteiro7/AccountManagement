import styled, { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
// import { Container } from "react-bootstrap";

// Dispositivos small (telefones em modo paisagem, com 576px ou mais)
export const sm = 576;

// Dispositivos médios (tablets com 768px ou mais)
export const md = 768;

// Dispositivos large (desktops com 992px ou mais)
export const lg = 992;

// Dispositivos extra large (desktops grandes com 1200px ou mais)
export const xl = 1200;
export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const GlobalStyle = createGlobalStyle`

html,body,#root{
  background: #f2f2f2;
  box-sizing: border-box;

      font-family: 'Lato', sans-serif;
      margin: 0px auto;
      min-height: 100vh;
      scroll-behavior: smooth;
      .btn,button{
        border:0px;
        cursor: pointer;
        /* background:transparent; */
        
        a{
          text-decoration:none;
        &:hover{
          text-decoration:none;
        }
        }

    }
    button,input,select{
      outline: none;
      /* border-radius:4px; */
      box-sizing: border-box;
      
    }
    
    }
    body{
        -webkit-font-smoothing: antialiased !important;
    }
    :root{
      --color-primary: #1d0e60;
      --color-primary-dark: #1b0d5d;
      --color-secundary: #18c78a;
      --color-secundary-dark: #08b378;
      --color-title-in-primary: #FFFFFF;
    }
    ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;

}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #6E6E6E;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}
.swal2-show {
  min-height: 290px !important;
  // justify-content: flex-end !important;
}
.swal2-title {
  font-size: 1.4rem !important;
  @include media-breakpoint-down(md) {
    font-size: 1.1rem !important;
  }
}
.swal2-actions {
  button {
    box-shadow: none !important;
    min-width: 180px;
    @include media-breakpoint-down(md) {
      min-width: 100px;
      width: 100px !important;
      font-size: 12px !important;
    }
  }
}
`;
