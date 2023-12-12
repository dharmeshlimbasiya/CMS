import React from "react";
import { Box, Typography, Button, Container, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <img
          src="https://image.freepik.com/free-vector/404-error-concept-illustration_114360-1811.jpg"
          alt="404 Error"
          width="300"
          height="300"
          sx={{ mt: 4 }}
        />

        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Page Not Found
        </Typography>
        <Box
          sx={{
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Oops! The page you are looking for does not exist.
        </Box>

        <Button
          variant="contained"
          //   color="primary"
          component={Link}
          to="/"
          sx={{ mt: 2 }}
        >
          Go Back to Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
