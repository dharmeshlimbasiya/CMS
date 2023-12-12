import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          bgcolor: "#000000eb",
          color: "white",
          py: 4,
          position: "absolute",
          width: "100%",
          marginTop: "50%",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">About Us</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Useful Links</Typography>
              <Typography variant="body1">
                <Link sx={{ color: "white", textDecoration: "none" }} to="#">
                  Home
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link sx={{ color: "white", textDecoration: "none" }} to="#">
                  About
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link sx={{ color: "white", textDecoration: "none" }} to="#">
                  Services
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link sx={{ color: "white", textDecoration: "none" }} to="#">
                  Contact
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="body1">
                Email: example@example.com
              </Typography>
              <Typography variant="body1">Phone: +1 (123) 456-7890</Typography>
              <Typography variant="body1">
                Address: 123 Street Name, City
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6">Follow Us</Typography>
              <IconButton
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white" }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white" }}
              >
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Typography variant="body2" align="center">
              © {new Date().getFullYear()} Company Management System. All Rights
              Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
