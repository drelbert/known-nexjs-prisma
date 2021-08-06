import { id } from "date-fns/locale";
import prisma from "../../../lib/prisma";

// handle POST incoming on the  /api/post
export default async function handle(req, res) {
  // object destructuring title and content
  const { title, lead, content } = req.body;
  // using the prisma client to create a new post in the db
  const result = await prisma.post.create({
    data: {
      title: title,
      // lead: {
      //   connect: { id: 4 },
      // },
      content: content,
    },
  });
  res.json(result);
}
