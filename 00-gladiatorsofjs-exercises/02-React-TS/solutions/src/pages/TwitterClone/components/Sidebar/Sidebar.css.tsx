import styled from "styled-components";

import { breakpoints } from "pages/TwitterClone/styles/breakpoints";

export const SidebarContainer = styled.div`
  padding: 1rem 3rem 0 2rem;

  @media ${breakpoints.tablet} {
    flex: 1;
  }

  @media ${breakpoints.bigTablet} {
    flex: 2;
  }
`;