import { Field, FieldProps } from "formik";
import { RadioInput } from "../ui";

const RadioInputField = ({ ...props }: FieldProps) => {
  return <Field {...props} component={RadioInput} />;
};

export { RadioInputField };
