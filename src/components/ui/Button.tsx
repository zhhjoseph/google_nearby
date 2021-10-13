import styled from "styled-components";
import { mainColors } from "../../variables/variables";

interface ButtonProps {
  onSubmit: () => void;
  text: string;
}
const Button = (props: ButtonProps) => {
  return <StyledButton onSubmit={props.onSubmit}>{props.text}</StyledButton>;
};

const StyledButton = styled.button`
  height: 40px;
  margin: 20px auto;
  padding: 18px 25px;
  background-color: ${mainColors.white};
  color: #0c4261;
  background-color: 400ms ease, opacity 400ms ease, color 400ms ease;
  :hover {
    background-color: ${mainColors.green};
  }
`;

export { Button };
