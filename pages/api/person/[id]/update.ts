import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

async function patchPerson(personId, editedName, res: NextApiResponse<any>) {
  const person = await prisma.person.update({
    where: { id: Number(personId) },
    data: { name: String(editedName) },
  });

  res.json({ person: person.name });
}

export default async function handleUpdate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const personId = req.query.id;
  const { name } = req.body as { name: string };

  if (req.method === "PATCH") {
    await patchPerson(personId, name, res);
  } else {
    throw new Error(
      `Sorry, the HTTP ${req.method} is not allowed on this route.`
    );
  }

  console.log(req.body);
}
