import React, { useState } from "react";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import Layout from "../components/Layout";
import Person, { PersonProps } from "../components/Person";
import Button from "../components/Button";

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.person.findMany({
    include: { missions: true },
  });

  const filteredOnMission = await prisma.person.findMany({
    where: { onMission: true },
  });

  const filteredNotOnMission = await prisma.person.findMany({
    where: { onMission: false },
  });

  // console.log(feed);

  return { props: { feed, filteredOnMission, filteredNotOnMission } };
};

type Props = {
  feed: PersonProps[];
  filteredOnMission: PersonProps[];
  filteredNotOnMission: PersonProps[];
};

export default function People(props: Props) {
  const count = props.feed.length !== 1 ? "people" : "person";
  const renderCount = `${props.feed.length} ${count} in the system`;

  const renderOnMission = `${props.filteredOnMission.length} `;
  const renderNotOnMission = `${props.filteredNotOnMission.length}`;

  const all = (
    <main>
      {props.feed.map((person) => (
        <div key={person.id}>
          <Person person={person} />
        </div>
      ))}
    </main>
  );

  const onMission = (
    <main>
      {props.filteredOnMission.map((person) => (
        <div key={person.id}>
          <Person person={person} />
        </div>
      ))}
    </main>
  );

  const notOnMission = (
    <main>
      {props.filteredNotOnMission.map((person) => (
        <div key={person.id}>
          <Person person={person} />
        </div>
      ))}
    </main>
  );

  // TODO - does this need to be refactored to useReducer?
  const [filter, setFilter] = useState(all);

  function showAll() {
    setFilter(all);
  }

  function showOnMission() {
    setFilter(onMission);
  }

  function showNotOnMission() {
    setFilter(notOnMission);
  }

  return (
    <Layout>
      <div className="page">
        <h1>People</h1>
        <h2>Currently {renderCount}</h2>

        <Button onClick={() => showAll()}>View All</Button>

        <Button onClick={() => showOnMission()}>
          View the {renderOnMission} On A Mission
        </Button>

        <Button onClick={() => showNotOnMission()}>
          View the {renderNotOnMission} Not On A Mission
        </Button>

        {filter}
      </div>
    </Layout>
  );
}
