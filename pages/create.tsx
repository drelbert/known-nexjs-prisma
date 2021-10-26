import React, { FunctionComponent, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { GetStaticProps } from "next";
import Lead, { LeadProps } from "../components/MissionLead";
import prisma from "../lib/prisma";

// function component
const MissionCreate: FunctionComponent<Props> = function create(props) {
  // creating the variables to manage state
  // useState reutrns current state: person, title, etc...
  // and function to update each as setPerson, setTitle, etc...
  const [person, setPerson] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [leadId, setLeadId] = useState(0);

  // the function to handle the data submission
  // passing the data from the react component to an API route
  // that handles the data persistence to the db
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const body = { title, content, leadId };
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

          <select onChange={() => setLeadId(0)}>
            <option>Choose Lead</option>
            {props.leads.map((lead) => (
              <option key={lead.id}>
                <Lead lead={lead} {...lead} />
              </option>
            ))}
          </select>

          <input disabled={!content || !title} type="submit" value="Create " />
          <a className="back" href="#" onClick={() => Router.reload()}>
            or Cancel
          </a>
        </form>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function getLeads() {
  const leads = await prisma.person.findMany({
    include: { missions: true },
  });

  console.log(leads);

  return { props: { leads } };
};

type Props = {
  leads: LeadProps[];
};

export default MissionCreate;
