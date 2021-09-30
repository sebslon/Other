import styled from "styled-components";

import { table_primary } from "../../styles/constants";

interface PageButtonProps {
  isActive: boolean;
}

export const PageSwitcherContainer = styled.div``;

export const PageButton = styled.button<PageButtonProps>`
  background: none;
  border: ${(props) =>
    props.isActive ? `solid 1px ${table_primary}` : "none"};
  border-radius: 5px;
  padding: 0.2em 0.4em;
  cursor: pointer;
  margin: 0 0.1em;

  @media(min-width: 500px) {
    padding: 0.2em 0.6em;
  }
`;
