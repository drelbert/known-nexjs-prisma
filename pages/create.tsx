import React, { FunctionComponent, useState } from "react";
import Router from "next/router";
import { Box } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";

type Props = {
  title: string;
  content: string;
  lead: string;
};

export const MissionCreate: FunctionComponent<Props> = () => {
  const [title, setTitle] = useState("");
  const [lead, setLead] = useState("");
  const [content, setContent] = useState("");

  // the function to handle the data submission
  // passing the data from the react component to an API route
  // that handles the data persistence to the db
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const body = { title, lead, content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = { title: "", content: "", lead: "" };
  return (
    <Box m="25px" borderWidth="5px" borderRadius="lg" p="5px">
      <Formik initialValues={initialValues} onSubmit={submitData}>
        <Form>
          <h1>New Mission</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <select onChange={(e) => setLead(e.target.value)} value={lead}>
            <option value="Luke">Luke</option>
            <option value="Han">Han</option>
          </select>
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={4}
            value={content}
          />
          <input disabled={!content || !title} type="submit" value="Create " />
          <a className="back" href="#" onClick={() => Router.reload()}>
            or Cancel
          </a>
        </Form>
      </Formik>
    </Box>
  );
};

export default MissionCreate;
