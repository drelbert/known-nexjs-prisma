import React from "react";
import { format, formatDistanceStrict, formatDistanceToNow } from "date-fns";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import Layout from "../components/Layout";
import { Flex, Box } from "@chakra-ui/react";
import Post, { PostProps } from "../components/Post";
import PostCreate from "./create";

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

const now = new Date();
const dueDate = new Date(now.getFullYear(), 3, 1, 0, 0, 0);
const reqDate = new Date(now.getFullYear(), 2, 1, 0, 0, 0);

const MissionLaunch: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div>
        <p>
          Due date is : {""}
          {formatDistanceStrict(dueDate, now, {
            unit: "day",
          })}
          {" from today"}
        </p>
        <p>
          Requested date was: {""}
          {formatDistanceStrict(reqDate, now, {
            unit: "day",
          })}
          {" ago"}
        </p>
      </div>
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
        <PostCreate />
      </Flex>
    </Layout>
  );
};

export default MissionLaunch;
