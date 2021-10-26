import prisma from "../../lib/prisma";

export default async function testHandle(req, res) {
  const { leadId } = req.body;

  const personAndMissions = await prisma.post.create({
    data: {
      title: "String Value",
      content: "Catchy Title",
      lead: {
        connect: { id: 2 },
      },
    },
    include: {
      lead: true,
    },
  });
  res.json(personAndMissions);
}
