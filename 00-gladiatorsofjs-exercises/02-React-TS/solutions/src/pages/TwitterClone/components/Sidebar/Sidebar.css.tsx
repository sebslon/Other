import styled from "styled-components";

import { breakpoints } from "pages/TwitterClone/styles/breakpoints";

export const SidebarContainer = styled.div`
  @media ${breakpoints.tablet} {
    flex: 1;
  }

  @media ${breakpoints.bigTablet} {
    flex: 2;
  }
`;