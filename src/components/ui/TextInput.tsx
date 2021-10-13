import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { FieldProps } from "formik";

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement & FieldProps> {}

const TextInput = ({
  field,
  form: { touched, errors },
  ...props
}: TextInputProps & FieldProps) => {
  return <StyledTextInput {...props} {...field} type={"text"} />;
};

const StyledTextInput = styled.input`
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border-radius: 4px;
  outline-color: #0c4261;
`;

export { TextInput };
