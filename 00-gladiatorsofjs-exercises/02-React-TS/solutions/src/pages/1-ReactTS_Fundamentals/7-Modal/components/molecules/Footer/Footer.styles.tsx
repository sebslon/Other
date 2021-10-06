import styled from "styled-components";

import { CloseButton } from "../../atoms/CloseButton";

export const FooterContainer = styled.div`
  display: flex;
  margin-top: 3em;
  justify-content: flex-end;
`;

export const CTAButton = styled(CloseButton)`
  margin-left: 1em;

  &:hover {
    background-color: #007000;
  }
`;
