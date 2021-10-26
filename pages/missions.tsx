import React, { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import Layout from "../components/Layout";
import { Flex, Box } from "@chakra-ui/react";
import Post, { PostProps } from "../components/Post";

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.post.findMany({
    include: { lead: true },
  });
  console.log(feed);
  // returning an object that has props to be used in the frontend code
  return { props: { feed } };
};

type Props = {
  feed: PostProps[];
};

const Missions: FunctionComponent<Props> = function missions(props) {
  return (
    <Layout>
      <h1>Current Missions </h1>
      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        maxW="800px"
      >
        {props.feed.map((post) => (
          <Box
            key={post.id}
            p="6"
            m="4"
            backgroundColor="aliceblue"
            borderWidth="5px"
            flexBasis="45%"
          >
            <Post post={post} />
          </Box>
        ))}
      </Flex>
    </Layout>
  );
};

export default Missions;
