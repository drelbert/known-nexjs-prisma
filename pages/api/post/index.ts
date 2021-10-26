import prisma from "../../../lib/prisma";

// handle POST incoming on the  /api/post
export default async function handle(req, res) {
  const personId = req.query.id;
  // object destructuring
  const { title, content, id, email } = req.body;
  // using nested writes/adding new related record(post) to existing record(person)
  const result = await prisma.person.update({
    where: {
      id: Number(personId),
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
  //delete or use
  // data: {
  //   title: title,
  //   content: content,
  //   published: published,
  //   lead: {
  //   connect: {
  //   id: 3,
  //   email: email,
  //   },
  //   },
  //   },
  //   include: {
  //   lead: true,
  //   },

  res.json(result);
}
