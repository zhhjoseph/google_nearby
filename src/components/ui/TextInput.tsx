import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { FieldProps, FormikProps } from "formik";

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement & FieldProps> {}

const TextInput = (props: TextInputProps & FieldProps) => {
  return <StyledTextInput type={"text"} {...props} {...props.field} />;
};

const StyledTextInput = styled.input`
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: pink;
`;

export { TextInput };
