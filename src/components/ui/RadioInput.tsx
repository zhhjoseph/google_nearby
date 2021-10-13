import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { FieldProps } from "formik";

interface RadioInputProps
  extends InputHTMLAttributes<HTMLInputElement & FieldProps> {
  name: string;
  label: string;
}

const RadioInput = (props: RadioInputProps & FieldProps) => {
  return <StyledRadioInput type={"radio"} {...props} {...props.field} />;
};

const StyledRadioInput = styled.input`
  width: 20px;
  height: 20px;
  width: 100%;
  min-height: 44px;
  border: 1px solid pink;
  border-radius: 50%;
  outline-color: pink;
  &:checked {
    background: yellow;
  }
`;

export { RadioInput };
