import React from "react";
import { GetStaticProps } from "next";
import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Search from "../components/Search";
import TypingChildren from "../components/typescript/TypingChildren";
import SignupForm from "../components/Formik";
import Reducer from "../components/typescript/reducers/Reducer";
import CourseControl from "../components/CourseControl";

// two posible syntax
// const Starships: FunctionComponent<Props> = (props) => {
const TestPage = function test() {
  return (
    <Layout>
      <h1>Component Test Page</h1>
      <Reducer />
      <SignupForm />
      <TypingChildren />
    </Layout>
  );
};

export default TestPage;
