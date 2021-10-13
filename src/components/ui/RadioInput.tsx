import styled from "styled-components";
import { FieldProps } from "formik";

interface RadioInputProps {
  name: string;
  checked: boolean;
  value: string;
}

const RadioInput = ({
  field,
  form: { touched, errors },
  ...props
}: RadioInputProps & FieldProps) => {
  return <StyledRadioInput {...props} {...field} />;
};

const StyledRadioInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export { RadioInput };
