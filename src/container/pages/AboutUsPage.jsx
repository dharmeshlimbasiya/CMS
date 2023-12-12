import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
  CssBaseline,
  Grid,
  IconButton,
} from "@mui/material";
import Layout from "../layout/Layout";

const AboutUsPage = () => {
  return (
    <Layout>
      <Container
        maxWidth="md"
        style={{
          paddingTop: "20px",
          position: "absolute",
          // width: "120%",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: "'Raleway', sans-serif " }}
        >
          About Us
        </Typography>
        {/* About Section */}
        <Card variant="outlined" style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: "'Michroma', sans-serif" }}
            >
              About
            </Typography>
            <Typography paragraph>
              The customer is very important, the customer will be followed by
              the customer. No one in the bed of Ultricius It's basketball and
              free to worry about. But Euismod venetas unless, or vestibulum
              than shot or No easy No need to put an urn or housework on the
              porch.
            </Typography>
          </CardContent>
        </Card>
        {/* Info Section */}
        <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "'Michroma', sans-serif" }}
          >
            Info
          </Typography>
          <Typography paragraph>
            Every business has a story to tell. Even if you’re running a startup
            with a brief history, you’ll want to share your company’s progress.
            Talk about how you got to where you are today on your about page.
          </Typography>
        </Paper>
        {/* Contact Details Section */}
        <Card variant="outlined">
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: "'Michroma', sans-serif" }}
            >
              Contact Details
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Email: dharmesh.limbasiya@beelinesoftwares.com" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone: (+91) 9898301379" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address: amin marg, Rajkot, Gujrat" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default AboutUsPage;
