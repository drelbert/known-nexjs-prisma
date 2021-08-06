import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { name, email, status, connections, onMission } = req.body;

  const result = await prisma.person.create({
    data: {
      name: name,
      email: email,
      status: status,
      connections: connections,
      onMission: onMission,
    },
  });
  res.json(result);
}
