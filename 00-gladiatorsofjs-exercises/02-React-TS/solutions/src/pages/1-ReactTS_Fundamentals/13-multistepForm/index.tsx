import styled from "styled-components";
import { Link } from "react-router-dom";

export const MultistepForms = () => {
  return (
    <MultistepFormsContainer>
      <h1>Multistep Forms</h1>
      <StyledLink to="/MultistepForm/form-without-library">
        Without Library
      </StyledLink>
      <StyledLink to="/MultistepForm/form-formik-yup">
        With Formik & Yup
      </StyledLink>
      <StyledLink to="/MultistepForm/form-without-library">
        With react-hook-form Library
      </StyledLink>
    </MultistepFormsContainer>
  );
};

/*

  STYLED COMPONENTS BELOW 

*/

const MultistepFormsContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 1px;
  margin: 1em auto;
  padding: 13px 50px 13px;
  color: black;
  width: 300px;
  border: 1px solid black;
  position: relative;
  user-select: none;
  touch-action: manipulation;

  &::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }
`;
