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
  InputLabel,
  ButtonGroup,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const ResetPassword = () => {
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
    // Perform reset password logic here
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
          sx={{ marginBottom: 2 }}
          gutterBottom
        >
          Reset Password
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor="outlined-adornment-email-login">
              New Password
            </InputLabel>
            <OutlinedInput
              placeholder="New Password"
              type="password"
              inputProps={{ "aria-label": "New Password" }}
              {...register("password")}
              autoFocus
              label="New Password"
            />
            <FormHelperText error>{errors.password?.message}</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="outlined-adornment-email-login">
              Confirm New Password
            </InputLabel>
            <OutlinedInput
              placeholder="Confirm New Password"
              type="password"
              inputProps={{ "aria-label": "Confirm New Password" }}
              {...register("confirmPassword")}
              label="Confirm New Password"
            />
            <FormHelperText error>
              {errors.confirmPassword?.message}
            </FormHelperText>
          </FormControl>
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
                Reset Password
              </Button>
            </ButtonGroup>
          </FormControl>
        </form>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
