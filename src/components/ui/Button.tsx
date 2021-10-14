import styled from "styled-components";
import { mainColors } from "../../variables/variables";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button = ({ children, type }: ButtonProps) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 20px auto;
  padding: 18px 25px;
  border-radius: 4px;
  background-color: ${mainColors.white};
  color: #0c4261;
  background-color: 400ms ease, opacity 400ms ease, color 400ms ease;
  :hover {
    background-color: ${mainColors.green};
    cursor: pointer;
  }
`;

export { Button };
