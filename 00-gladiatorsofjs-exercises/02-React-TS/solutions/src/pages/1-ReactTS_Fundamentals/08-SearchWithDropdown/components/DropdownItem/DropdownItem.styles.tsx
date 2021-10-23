import styled from "styled-components";

export const Item = styled.div`
  padding: 0.4em 0.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #8a8a8a;
`;

export const Prices = styled.div`
  display: flex;

  span {
    margin-left: 0.5em;
    font-size: 0.8em;
  }
`;

export const RegPrice = styled.span`
  text-decoration: line-through;
  color: #8a8a8a;
`;

export const SalePrice = styled.span`
  font-weight: bold;
`;
