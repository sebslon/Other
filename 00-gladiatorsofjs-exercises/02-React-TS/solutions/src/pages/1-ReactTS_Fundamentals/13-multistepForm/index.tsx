import { MultistepFormsContainer, StyledLink } from "./styled";

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
