import prisma from "../../../lib/prisma";

// handle POST incoming on the  /api/post
export default async function handle(req, res) {
  const id = req.query.id;
  // object destructuring
  const { title, content } = req.body;
  // using nested writes/adding new related record(post) to existing record(person)
  const result = await prisma.person.update({
    where: {
      id: Number(id),
      // alternatively id: id
    },
    data: {
      missions: {
        create: {
          title: title,
          content: content,
        },
      },
    },
  });

  res.json(result);
}
