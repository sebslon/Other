import styled from "styled-components";

interface PageButtonProps {
  isActive: boolean;
}
export const PageButton = styled.button<PageButtonProps>`
  background: ${(props) => (props.isActive ? "red" : "#fff")};
`;
