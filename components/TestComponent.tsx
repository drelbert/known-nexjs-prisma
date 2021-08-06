import { Box } from "@chakra-ui/react";
import React from "react";

// example functional component that takes props argument
// returns a JSX element

type Props = {
  messageData: string;
};

const Test = ({ messageData }: Props) => {
  return <Box> {messageData}</Box>;
};

export default Test;
