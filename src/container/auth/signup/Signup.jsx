import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Container,
  Paper,
  Typography,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Checkbox,
  Divider,
  InputLabel,
  ButtonGroup,
} from "@mui/material";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  terms: yup.boolean().oneOf([true], "You must accept the terms"),
});

const SignupPage = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
    // Perform signup logic here
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
      {/* <Paper elevation={3} sx={{ padding: 4, marginBlock: "156px" }}> */}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
          marginBlock: "80px",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ marginBottom: 2,fontFamily:"'Kaushan Script', cursive"  }}
          gutterBottom
        >
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", marginBottom: 18 }}>
            <FormControl fullWidth sx={{ marginRight: 1 }}>
              <InputLabel htmlFor="outlined-adornment-email-login">
                First Name
              </InputLabel>
              <OutlinedInput
                placeholder="First Name"
                inputProps={{ "aria-label": "First Name" }}
                {...register("firstName")}
                autoFocus
                label="First Name"
              />

              <FormHelperText error>{errors.firstName?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-email-login">
                Last Name
              </InputLabel>
              <OutlinedInput
                placeholder="Last Name"
                inputProps={{ "aria-label": "Last Name" }}
                {...register("lastName")}
                label="Last Name"
              />
              <FormHelperText error>{errors.lastName?.message}</FormHelperText>
            </FormControl>
          </div>
          <FormControl fullWidth sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor="outlined-adornment-email-login">
              Email Address
            </InputLabel>
            <OutlinedInput
              placeholder="Email Address"
              inputProps={{ "aria-label": "Email Address" }}
              {...register("email")}
              label="Email Address"
            />
            <FormHelperText error>{errors.email?.message}</FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor="outlined-adornment-email-login">
              Password
            </InputLabel>
            <OutlinedInput
              placeholder="Password"
              type="password"
              inputProps={{ "aria-label": "Password" }}
              {...register("password")}
              label="Password"
            />
            <FormHelperText error>{errors.password?.message}</FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor="outlined-adornment-email-login">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              placeholder="Confirm Password"
              type="password"
              inputProps={{ "aria-label": "Confirm Password" }}
              {...register("confirmPassword")}
              label="Confirm Password"
            />
            <FormHelperText error>
              {errors.confirmPassword?.message}
            </FormHelperText>
          </FormControl>

          <FormControl
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "initial",
            }}
          >
            <Checkbox {...register("terms")} color="primary" />
            <Typography variant="body2">
              I agree to the <a href="#">Terms and Conditions</a>
            </Typography>
            <FormHelperText error>{errors.terms?.message}</FormHelperText>
          </FormControl>

          <Divider sx={{ marginY: 2 }} />
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "gray", textDecoration: "none" }}
          >
            Already have an account? <NavLink to="/">Sign In</NavLink>
          </Typography>
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
              sx={{ margin: "12px" }}
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

export default SignupPage;
