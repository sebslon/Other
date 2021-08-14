import styled from "styled-components";

export const PostContainer = styled.article`
  display: flex;
  border-bottom: var(--section_border);
  padding: 0.7em;
`;

export const UserAvatarContainer = styled.div`
`;

export const UserPost = styled.div`
  padding: 0.2em 0.5em;
`;

export const UserAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 0.5;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #999;
    margin: 0 3px;
    font-size: 0.9em;
  }
  img {
    filter: invert(100%);
    margin-left: auto;
  }
`;

export const PostSummary = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostStat = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.8em;
    opacity: 0.5;
    margin-left: 5px;
  }
`;