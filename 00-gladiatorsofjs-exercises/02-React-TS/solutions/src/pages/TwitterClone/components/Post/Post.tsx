import {
  PostContainer,
  UserAvatar,
  UserAvatarContainer,
  UserInfo,
  UserPost,
  PostSummary,
  PostStat,
} from "./Post.css";

import { IPost } from "../../types";
import { Comment, Download, Heart, Share, ThreeDots } from "pages/TwitterClone/images";

interface PostProps {
  data: IPost;
}

export const Post = ({ data }: PostProps) => {
  const {
    userImage,
    username,
    twitterName,
    date,
    content,
    comments,
    retweets,
    likes,
  } = data;

  return (
    <PostContainer>
      <UserAvatarContainer>
        <UserAvatar src={userImage} alt={`${username} avatar`} />
      </UserAvatarContainer>

      <UserPost>
        <UserInfo>
          <strong>{username}</strong>
          <span>{twitterName}</span> &#8231;
          <span>{new Date(date).toLocaleDateString()}</span>
          <img src={ThreeDots} alt="more info" />
        </UserInfo>

        <p>{content}</p>

        <PostSummary>
          <PostStat>
            <img src={Comment} alt="Comment" />
            <span>{comments}</span>
          </PostStat>
          <PostStat>
            <img src={Share} alt="Retweet" />
            <span>{retweets}</span>
          </PostStat>
          <PostStat>
            <img src={Heart} alt="Like" />
            <span>{likes}</span>
          </PostStat>
          <PostStat>
            <img src={Download} alt="Download" />
          </PostStat>
        </PostSummary>
      </UserPost>
    </PostContainer>
  );
};
