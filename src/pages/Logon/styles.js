import styled from "styled-components";
import { FlexBox } from "styles/global";
import { md, sm } from "styles/global";

export const Container = styled(FlexBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  min-height: 100vh;
`;
export const ContainerInside = styled(FlexBox)`
  width: 478px;
  height: 440px;
  margin: auto;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  @media (max-width: ${sm}px) {
    width: 90%;
    padding: 20px 10px;
  }
`;
// export const ContainerButton = styled.div`

// `;
export const ButtonOption = styled.button`
  transition: 0.15s linear;
  background: transparent;
  width: 140px;
  border: 0;
  font-weight: bold;
  color: ${(props) => (props.selected ? "#18c78a" : "#1d0e60")};
  border-bottom: 2px solid
    ${(props) => (props.selected ? "#18c78a" : "transparent")} !important;
  padding-bottom: 10px;
  font-size: 18px;
  @media (max-width: ${md}px) {
    font-size: 16px;
    width: 120px;
  }
`;
export const ContainerItems = styled.div.attrs({ className: "items" })`
  scroll-behavior: smooth;
  display: flex;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`;
export const ContainerItem = styled.div`
  flex: none;
  scroll-snap-align: start;
  width: 100%;
  form {
    margin: auto;
  }
`;
export const NewUser = styled.label`
  margin: 10px auto 20px;
  color: #1d0e60;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
