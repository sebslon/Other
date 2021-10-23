import { posts } from "../../data/data.json";

import { Posts } from "./PostsSection.css";

import { Post } from "../../components";

export const PostsSection = () => {
  return (
    <Posts>
      {posts.map((post) => (
        <Post data={post} key={post.postId} />
      ))}
    </Posts>
  );
};
