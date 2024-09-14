import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe8e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    background: ${(props) => (props.theme === "primary" ? "" : "#fafafa")};
    color: ${(props) => (props.theme === "primary" ? "" : "#181F36")};
    opacity: 0.8;
    transition: 200ms linear;
  }

  &:active {
    opacity: 0.5;
  }
`;
