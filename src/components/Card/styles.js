import styled from "styled-components";
import { lg } from "styles/global";
import { FaPen, CgClose } from "react-icons/all";
export const Container = styled.div`
  width: 80%;
  margin: 15px;
  position: relative;
  border-radius: 2px;
  background: #ffffff;
  border: 0;
  box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.24);

  width: 230px;
  @media (max-width: ${lg}px) {
    margin: 20px;
  }
`;
export const Image = styled.div`
  background-color: #565656;
  height: 160px;
  border-radius: 2px 2px 0px 0px;
`;
export const SpanCard = styled.div`
  min-width: 60px;
  text-align: center;
  padding: 2px 10px;
  color: #ffffff;
  top: 20px;
  height: 18px;
  border-radius: 1.5px;
  position: absolute;
  background-color: #18c78a;
  font-weight: bold;
  left: -20px;
  box-shadow: 0px 2px 6px 0 rgba(0, 0, 0, 0.24);
  font-size: 10px;
`;
export const Description = styled.h3`
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0px 5px;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  text-overflow: ellipsis;
  font-family: "Nunito";
  color: var(--color-primary);
  @media (max-width: ${lg}px) {
    font-size: 15px;
    padding: 5px 0px 8px;
  }
`;
export const Value = styled.label`
  font-weight: bold;
  font-size: 12px;
  color: #565656;
  display: block;
  margin: 2px 0px;
`;
export const Paid = styled.span`
  color: ${(props) => (props.paid ? "#58fa58" : "#fa5858")};
  font-size: 12px;
  font-weight: bold;
`;

export const ButtonEdit = styled.button`
  width: 36px;
  padding: 0px;
  height: 36px;
  font-size: 10px;
  border-radius: 100%;
  background: #ffffff;
  box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  font-size: 14px;
  &:hover {
    opacity: 1;
  }
  &.expired {
    opacity: 0.8;
  }
  i {
    color: #565656;
    font-size: 12px;
  }
`;
export const ButtonDelete = styled.button`
  transition: 0.5s ease-in-out;
  position: absolute;
  background: #ffffff29;
  height: 35px;
  top: 0;
  width: 35px;
  right: 0;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  border-radius: 0;
  i {
    right: 5px;
    position: absolute;
    top: 5px;
    color: white;
    font-size: 10px;
  }
  &:hover {
    background: #fa5858;
  }
`;
export const Footer = styled.footer`
  text-align: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px 8px;
  flex-direction: column;
  align-items: flex-start;
  height: 140px;
`;
export const IconPen = styled(FaPen)``;
export const IconClosed = styled(CgClose)`
      color: white;
    top: 4px;
    right: 4px;
    font-size: 14px;
    position: absolute;

`;
