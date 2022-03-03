import { FullVWContainer } from "../../styled";
import {
  ButtonNavigation,
  Form,
  FormTitle,
  NextButton,
  PrevButton,
} from "./styled";

import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";

export const MultistepFormWithoutLibrary = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <FullVWContainer>
      <Form>
        <FormTitle>Join us today!</FormTitle>
        <Typography mb={5}>
          We'll reach out to you with next steps within 48 hours.
        </Typography>
        <FormControl fullWidth>
          <InputLabel htmlFor="first-name" color="info">
            Email address
          </InputLabel>
          <Input
            id="first-name"
            name="firstName"
            aria-describedby="my-helper-text"
            color="primary"
            onChange={handleInputChange}
          />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <ButtonNavigation>
          {step > 0 && (
            <PrevButton onClick={() => setStep(step - 1)}>
              Previous Step
            </PrevButton>
          )}

          <NextButton variant="outlined" onClick={() => setStep(step + 1)}>
            Next Step {step}
          </NextButton>
        </ButtonNavigation>
      </Form>
    </FullVWContainer>
  );
};
