import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  @media ${breakpoints.tablet} {
    flex: 3;
    border-left: var(--section_border);
    border-right: var(--section_border);
  }
`;
