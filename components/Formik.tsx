import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Box } from "@chakra-ui/react";

import styled, { CreateGlobalStyle, ThemeProvider } from "styled-components";
import { theme, Styles } from "../utils/styles";

// build the interface
interface Values {
  firstName: string;
  lastName: string;
  email: string;
}


// styled-component start point
const ToDo = styled.label`
background: grey;
`;

const SignupForm = function signup(){
  return (
    <ThemeProvider theme={theme}>
      <Styles />
      <Box w="200px" m="25px" borderWidth="5px" borderRadius="lg" p="5px">
        <h1>Formik!</h1>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder="Add" />
            <ErrorMessage name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" placeholder="Add" />
            <ErrorMessage name="firstName" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" placeholder="Add" />
            <ErrorMessage name="email" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Box>
    </ThemeProvider>
  );
};
export default SignupForm;
