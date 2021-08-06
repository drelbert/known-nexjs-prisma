import React, { FunctionComponent, useState } from "react";
import { GetServerSideProps } from "next";
import Router from "next/router";
import Layout from "../../components/Layout";
import { Box } from "@chakra-ui/react";
import { PersonProps } from "../../components/Person";
import prisma from "../../lib/prisma";

export type EditPersonType = {
  id: number;
  onMission: boolean;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const person = await prisma.person.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
  });
  return {
    props: person,
  };
};

const Person: FunctionComponent<PersonProps> = (props) => {
  let person = props.name;
  if (props) {
    person = `${person}`;
  }

  async function deletePerson(id: number): Promise<any> {
    await fetch(`http://localhost:3000/api/person/${id}`, {
      method: "DELETE",
    });
    Router.push("/people");
  }

  // the hook
  const [onMission, setOnMission] = useState(props.onMission);
  // the function to change mission state
  const toggleOnMision = function toggleMission() {
    setOnMission((busy) => !busy);
  };

  async function updateOnMission(id: number): Promise<boolean> {
    try {
      const body = { onMission };
      await fetch(`http://localhost:3000/api/person/${id}`, {
        method: "PATCH",
        // how to correctly pass the data attatched to the request?
        // has to be a JS object with data to put
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      await Router.push("/people");
    } catch (error) {
      console.log(error);
    }
    return Promise.resolve(onMission);
  }

  // the hook
  const [name, editName] = useState(props.name);
  // the function to change state of name, etc
  const handleChange = function handleChange(e: any) {
    editName(name);
  };

  async function submitEditedData(id: number): Promise<any> {
    handleChange((nameUpdated) => nameUpdated);

    try {
      const body = { name };
      await fetch(`http://localhost:3000/api/person/${id}/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      await Router.push("/people");
    } catch (error) {
      console.log(error);
    }
  }

  const [isEditing, setEditing] = useState(false);

  const editView = (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1>Editing - {name}</h1>
        <input
          autoFocus
          onChange={(event) => editName(event.target.value)}
          type="text"
          value={name}
          placeholder={props.name}
          // defaultValue={props.name}
        />
        <button type="submit" onClick={() => submitEditedData(props.id)}>
          Save
        </button>

        <button onClick={() => setEditing(false)}>Cancel</button>
      </form>
    </div>
  );

  const dataView = (
    <div>
      <h2>{props.name}</h2>
      <li>Email: {props.email}</li>
      <li>Status: {props.status}</li>
      <li>Connections: {props.connections}</li>
      <li>Missions: {props.missions} TODO...</li>
      <li>
        Busy On A Mission?
        <input
          type="checkbox"
          defaultChecked={props.onMission}
          onChange={toggleOnMision}
        />
        {String(onMission ? "On A Mission" : "Needs A Mission")}
        <button onClick={() => updateOnMission(props.id)}>Update</button>
      </li>

      <button onClick={() => deletePerson(props.id)}>Delete</button>

      <button onClick={() => setEditing(true)}>Edit Person</button>
    </div>
  );

  return (
    <Layout>
      <Box w="60%" borderWidth="5px" borderRadius="lg" p="5px" m="10px">
        {isEditing ? editView : dataView}
      </Box>
    </Layout>
  );
};

export default Person;
