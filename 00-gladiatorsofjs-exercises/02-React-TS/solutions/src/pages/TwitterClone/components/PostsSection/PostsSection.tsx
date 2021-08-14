import { posts } from "../../data/data.json";
import { Post } from "../Post/Post";


export const PostsSection = () => {
  return (
    <>
      {posts.map((post) => (
        <Post data={post} />
      ))}
    </>
  );
};
