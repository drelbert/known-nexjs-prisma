import React, { FunctionComponent } from "react";
import Router from "next/router";

export type PostProps = {
  id: number;
  title: string;
  lead: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: FunctionComponent<{ post: PostProps }> = ({ post }) => {
  const leadName = post.lead ? post.lead.name : "Unknown lead";

  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>Lead- {leadName}</small>

      <p>Objective- {post.content}</p>
    </div>
  );
};

export default Post;
