import React, { useState, useEffect, FunctionComponent } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import { formatDistanceStrict, addBusinessDays, setDate } from "date-fns";
import Starship, { StarshipProps } from "./StarshipDetails";

export const getStaticProps: GetStaticProps = async () => {
  const launchData = [
    {
      id: 2,
      name: "Millennium Falcon",
      model: "YT-1300 light freighter",
      pilots: ["Chewbacca", "Han Solo", "Lando Calrissian", "Nien Nunb"],
      launchDate: "March 26, 2021",
    },
  ];
  return { props: { launchData } };
};

type Props = {
  //name: string;
  // launchData: StarshipProps[];
  // launchDate: string;
};

// using a function component
const Conditional: FunctionComponent<Props> = (props) => {
  const today = new Date();

  const oneDayAway = addBusinessDays(new Date(today), 1);
  const twoDaysAway = addBusinessDays(new Date(today), 2);

  const launchDate = setDate(new Date(today), 28);

  function renderAlert(oneDayAway, launchDate, twoDaysAway) {
    let message;
    if (launchDate > twoDaysAway) {
      message = (
        <Alert status="success">Launch Date Is More Than 2 Days Away</Alert>
      );
    } else if (launchDate > oneDayAway) {
      message = <Alert status="warning">Launch Date Is 1 Day Away</Alert>;
    } else {
      message = <Alert status="error">Launch Date!</Alert>;
    }
    return message;
  }

  let launchAlert = renderAlert(oneDayAway, launchDate, twoDaysAway);

  return (
    <Box w="25%" borderWidth="5px" borderRadius="lg" p="5px" m="10px">
      <h1>Launch Box</h1>

      <Box borderWidth="5px" borderRadius="lg" p="5px" m="10px">
        Today is {today.toLocaleDateString()}
      </Box>
      <p>
        Launch date is {""}
        {formatDistanceStrict(launchDate, today, {
          unit: "day",
        })}{" "}
        away.
      </p>
      <Box borderWidth="5px" borderRadius="lg" p="5px" m="10px">
        {launchAlert}
      </Box>
    </Box>
  );
};

export default Conditional;
