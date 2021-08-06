import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// let hasMission = true || false;

// function updateOnMission() {
//   // using boolean
//   return (hasMission = !hasMission);
// }

async function handleDELETE(personId, res) {
  const person = await prisma.person.delete({
    where: { id: Number(personId) },
  });
  res.json(person);
}

async function handleUPDATE(
  personId,
  editedOnMission,
  res: NextApiResponse<any>
) {
  const person = await prisma.person.update({
    where: { id: Number(personId) },
    data: { onMission: Boolean(editedOnMission) },
  });
  res.json({ person: person.onMission });
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const personId = req.query.id;
  const { onMission } = req.body as { onMission: boolean };

  if (req.method === "DELETE") {
    await handleDELETE(personId, res);
  } else if (req.method === "PATCH") {
    await handleUPDATE(personId, onMission, res);
  } else {
    throw new Error(
      `Sorry, the HTTP ${req.method} is not allowed on this route.`
    );
  }
  console.log(req.body);
}
