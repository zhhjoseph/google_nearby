import { Field, Form, Formik, FormikProps, FieldProps } from "formik";
import { TextInput } from "../ui";

const TextInputField = ({ ...props }: FieldProps) => {
  return <Field {...props} component={TextInput} />;
};

export { TextInputField };
