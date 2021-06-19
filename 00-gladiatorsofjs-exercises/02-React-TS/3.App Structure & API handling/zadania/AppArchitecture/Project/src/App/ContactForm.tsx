import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const sendMessageValues = {
  name: "",
  email: "",
  message: "",
};

const sendMessageSchema = Yup.object().shape({
  name: Yup.string().required("This field is required!").min(4, "Minimum name length is 4!"),
  email: Yup.string().required("This field is required!").email("This field have to be valid email!"),
  message: Yup.string().required("This field is required!").min(10, "Your message should be at least 10 words long."),
});

export default function ContactForm() {
  return (
    <Formik initialValues={sendMessageValues} onSubmit={(formValues: any) => console.log(formValues)} validationSchema={sendMessageSchema}>
      {({ dirty, isValid }) => {
        return (
          <Form>
            <label htmlFor="name">Name: </label>
            <Field name="name" id="name" />
            <ErrorMessage name="name" />

            <label htmlFor="email">Email: </label>
            <Field name="email" id="email" />
            <ErrorMessage name="email" />

            <label htmlFor="message">Message: </label>
            <Field name="message" id="message" component="textarea" />
            <ErrorMessage name="message" />

            <button disabled={!dirty || !isValid} type="submit">
              Send
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
