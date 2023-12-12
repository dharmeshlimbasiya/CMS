import React, { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  const submitHandler = (e) => {
    e.preventDefault;
    navigate("/");
    reset;
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, marginBlock: "156px" }}>
        <Typography
          variant="h5"
          align="center"
          sx={{ marginBottom: 2,fontFamily:"'Kaushan Script', cursive"  }}
          gutterBottom
        >
          Forgot Password
        </Typography>

        <form onSubmit={handleSubmit(submitHandler)}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-email-login">
              Email Address / Username
            </InputLabel>
            <OutlinedInput
              {...register("email", {
                required: "Please enter your first name.",
              })}
              autoFocus
              label="Email Address / Username"
            />
            <FormHelperText error>{errors.email?.message}</FormHelperText>
          </FormControl>

          <Stack
            // direction="row"
            alignItems="flex-end"
            // justifyContent="space-between"
            // spacing={1}
          >
            <Typography
              variant="subtitle1"
              color="secondary"
              sx={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Link to={"/"} style={{ color: "gray", textDecoration: "none" }}>
                Back to Login!!
              </Link>
            </Typography>
          </Stack>

          <FormControl
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              fullWidth
              sx={{ margin: "12px", alignItems: "center" }}
            >
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </ButtonGroup>
          </FormControl>
        </form>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
