import { posts } from "../../data/data.json";

import { Posts } from "./PostsSection.css";

import { Post } from "../Post/Post";

export const PostsSection = () => {
  return (
    <Posts>
      {posts.map((post) => (
        <Post data={post} key={post.postId} />
      ))}
    </Posts>
  );
};
