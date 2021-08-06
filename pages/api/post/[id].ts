import prisma from "../../../lib/prisma";

// handle DELETE incoming on the  /api/post by id URL
export default async function handle(req, res) {
  const postId = req.query.id;
  if (req.method === "DELETE") {
    const post = await prisma.post.delete({
      where: { id: Number(postId) },
    });
    res.json(post);
  } else {
    throw new Error(`HTTP ${req.method} is not supported on this route.`);
  }
}
