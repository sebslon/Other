import { Link } from "react-router-dom";

import styled from "styled-components";

export const SidebarLink = styled(Link)`
  color: var(--text_white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  height: 2.5em;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 5px solid #632ce4;
    cursor: pointer;
  }

  transition: border 0.1s ease;
`;

export const SidebarLabel = styled.span`
  margin-left: 1em;
`;

export const Arrow = styled.img`
  margin-right: 1em;
`;

export const DropdownLink = styled(Link)`
  background: #414757;
  height: 45px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }

  transition: all 1s ease;
`;

