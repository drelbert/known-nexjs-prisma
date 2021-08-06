import React, { FunctionComponent, useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";

type Props = {};

// setting/initializing state with arguments of empty string or nothing
const CreatePerson: FunctionComponent<Props> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [missions, setMissions] = useState("");
  const [status, setStatus] = useState("");
  const [connections, setConnections] = useState("");
  // onMission is the variable, preserved due to useState
  // onMission is the stateful value
  // setOnMision is the function to update it
  const [onMission, setOnMission] = useState(false);
  // function to toggle between true and false
  const toggleOnMision = function toggleMission() {
    setOnMission((busy) => !busy);
  };

  // pass the data from the component to the API route
  const submitPersonData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      //  using the properties from state and submit to the api route
      const body = { name, email, missions, status, connections, onMission };
      await fetch("/api/person", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/people");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitPersonData}>
          <h1>Add Person</h1>
          <input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
            value={email}
          />
          <input
            onChange={(e) => setMissions(e.target.value)}
            placeholder="Missions"
            type="text"
            value={missions}
          />
          <input
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Status"
            type="text"
            value={status}
          />
          <input
            onChange={(e) => setConnections(e.target.value)}
            placeholder="Connections"
            type="text"
            value={connections}
          />

          <div>
            Busy On A Mission?{" "}
            <input
              type="checkbox"
              checked={onMission}
              onChange={toggleOnMision}
            />
            {String(onMission ? "On A Mission" : "Needs A Mission")}
          </div>

          <input
            disabled={!name || !email}
            type="submit"
            value="Create Person"
          />

          <a className="back" href="#" onClick={() => Router.push("/")}>
            Cancel
          </a>
        </form>
      </div>

      <style jsx>{`
        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        input[type="checkbox"] {
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default CreatePerson;
