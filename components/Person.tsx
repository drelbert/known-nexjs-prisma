import React, { FunctionComponent } from "react";
import Router from "next/router";
import { Box } from "@chakra-ui/react";

export type PersonProps = {
  id: number;
  name: string;
  email: string;
  connections: string;
  status: string;
  missions: any;
  onMission: boolean;
};

const Person: FunctionComponent<{ person: PersonProps }> = ({ person }) => {
  return (
    <Box
      cursor="pointer"
      w="50%"
      borderWidth="5px"
      borderRadius="lg"
      p="5px"
      m="10px"
      onClick={() => Router.push("/person/[id]", `/person/${person.id}`)}
    >
      <h2>{person.name}</h2>
      <h3>Email: {person.email}</h3>
    </Box>
  );
};

export default Person;
