import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: var(--section_border);
  background-color: var(--twitter_primary);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const UserImg = styled.img`
  height: 2.5em;
  width: 2.5em;
  margin: 0 1em;
`;

export const Stars = styled.img`
  height: 2em;
  margin-left: auto;
  margin-right: 1em;
`;

export const PageTitle = styled.h2``;
