import React, { FunctionComponent, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { GetServerSideProps, GetStaticProps } from "next";
import Lead, { LeadProps } from "../components/MissionLead";
import prisma from "../lib/prisma";
import People from "./people";
import { number } from "yup/lib/locale";

// function component
const MissionCreate: FunctionComponent<Props> = function create(props) {
  // creating the variables to manage state
  // useState reutrns current state: ttile, content, etc...
  // and function to update each as setTitle, setLead, etc...

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setPersonId] = useState(props.data);

  // the function to handle the data submission
  // passing the data from the react component to an API route
  // that handles the data persistence to the db
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const body = { title, content, id };
      // calling the api route to create a mission
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/missions");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>Add Mission</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add Mission Title"
            type="text"
            value={title}
          />
          <input
            autoFocus
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add Objective"
            type="text"
            value={content}
          />

          <select onChange={() => setPersonId(props.data)}>
            <option>Data does not render on initial page load</option>

            {props.data.map((lead) => (
              <option key={lead.id}>
                <Lead lead={lead} />
              </option>
            ))}
          </select>

          <input disabled={!content || !title} type="submit" value="Create " />
          <a className="back" href="#" onClick={() => Router.reload()}>
            or Cancel
          </a>
        </form>

        <h3>Data rendering on page load</h3>
        {props.data.map((lead) => (
          <ul key={lead.id}>
            {" "}
            <Lead lead={lead} />{" "}
          </ul>
        ))}
      </div>
    </Layout>
  );
};

export default MissionCreate;

export const getStaticProps: GetStaticProps = async function getLeads({
  params,
}) {
  const data = await prisma.person.findMany({
    where: { id: Number(params.id) },
    include: {
      missions: {
        select: { title: true },
      },
    },
  });

  console.log(`array of people objects`);
  console.log(JSON.stringify(data));
  // returning props with the object
  return { props: { data } };
};

type Props = {
  data: LeadProps[];
};
