import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Conditional from "../components/Conditional";

type Props = {};

const Mission: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Conditional />
    </Layout>
  );
};

export default Mission;
