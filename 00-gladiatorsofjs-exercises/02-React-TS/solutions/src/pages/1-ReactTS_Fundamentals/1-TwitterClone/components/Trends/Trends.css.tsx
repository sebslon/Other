import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const TrendsSection = styled.section`
  display: none;
  margin-top: 1.5rem;
  background-color: var(--twitter_darkGray);
  border-radius: 25px;

  @media ${breakpoints.bigTablet} {
    display: block;
  }

  button {
    border: none;
    background: none;
    margin: 1em;
    color: var(--twitter_blue);
    cursor: pointer;
  }
`;

export const TrendsTitle = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  padding: 1rem;
  margin: 0;
  border-bottom: var(--section_border);
`;

export const Trend = styled.div`
  position: relative;
  padding: 0.6em 1em;
  color: var(--twitter_lightGray);
  border-bottom: var(--section_border);

  p {
    margin: 0.2em 0;
    color: var(--text_white);
    font-weight: 600;
  }

  img {
    filter: invert(100%);
    position: absolute;
    cursor: pointer;
    top: 5px;
    right: 5px;
  }
`;
