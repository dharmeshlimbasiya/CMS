import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginSuccess } from "../../../store/authActions";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Button,
  ButtonGroup,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { ToastContainer, toast } from "react-toastify"; // Import toast function and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import styles for toasts

let schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(6),
});

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "abc@gmail.com",
      password: "abc123",
    },
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //perfect without api
  const submitHandler = (data, e) => {
    e.preventDefault;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
      });
      localStorage.setItem("data", JSON.stringify(data));
      console.log(data);
      reset;
    }, 2000);

    reset;
  };

  //formpage toast
  // const submitHandler = (e) => {
  //   e.preventDefault;
  //   setIsLoading(true);
  //   toast.success("Login successful!", {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //   });
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     navigate("/dashboard");
  //     reset;
  //   }, 2000);
  //   reset;
  // };

  // auth
  // const submitHandler = async (data) => {
  //   try {
  //     const response = await axios.post("/api/login", data);
  //     const token = response.data.token;
  //     dispatch(loginSuccess(token));
  //     navigate("/dashboard");
  //     reset(); // Reset form after successful submission
  //     toast.success("Login successful");
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     if (axios.isAxiosError(error)) {
  //       if (error.response?.status === 404) {
  //         toast.error(error.message);
  //       } else {
  //         toast.error("An error occurred");
  //       }
  //     } else {
  //       toast.error("An error occurred");
  //     }
  //   }
  // };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ToastContainer />

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
          sx={{ marginBottom: 2, fontFamily: "'Kaushan Script', cursive" }}
          gutterBottom
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit(submitHandler)}>
          <FormControl fullWidth sx={{ marginBottom: 1 }}>
            <InputLabel htmlFor="outlined-adornment-email-login">
              Email Address / Username
            </InputLabel>
            <OutlinedInput
              {...register("email", {
                required: "Please enter your first name.",
              })}
              autoFocus
              label="Email Address / Username"
              defaultValue="abc@gmail.com"
            />
            <FormHelperText error>{errors.email?.message}</FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              {...register("password", {
                required: "Please enter your last name.",
              })}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText error>{errors.password?.message}</FormHelperText>
          </FormControl>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Typography
              variant="subtitle1"
              color="secondary"
              sx={{ textDecoration: "none", cursor: "pointer" }}
            >
              <Link
                to={"/forgot-password"}
                style={{ color: "gray", textDecoration: "none" }}
              >
                Forgot Password?
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
              sx={{ margin: "12px" }}
            >
              {isLoading ? (
                // <Button variant="contained">
                //   <CircularProgress sx={{ color: "white" }} />
                // </Button>
                <LoadingButton loading variant="contained" color="primary">
                  Submit
                </LoadingButton>
              ) : (
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              )}
            </ButtonGroup>
          </FormControl>
        </form>
        <Divider sx={{ marginY: 2 }} />
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "gray", textDecoration: "none" }}
        >
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
