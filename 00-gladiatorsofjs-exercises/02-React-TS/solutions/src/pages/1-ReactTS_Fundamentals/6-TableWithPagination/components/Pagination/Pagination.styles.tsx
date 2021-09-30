import styled from "styled-components";

import { table_primary } from "../../styles/constants";

interface SwitchPageButtonProps {
  isDisabled?: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 60%;
  align-items: center;
  padding: 1em;
`;

export const SwitchPageButton = styled.button<SwitchPageButtonProps>`
  border: none;
  background: none;
  padding: 0.5em 0.8em;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0" : "1")};
`;

export const NextPageButton = styled(SwitchPageButton)`
  background: ${(props) => (props.disabled ? "none" : table_primary)};
  color: #fff;
  border-radius: 10px;
`;
