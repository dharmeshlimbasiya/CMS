import React from "react";
import {
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Layout from "../layout/Layout";

const HelpPage = () => {
  const helpTopics = [
    {
      title: "Getting Started",
      description: "Learn how to get started with our app.",
    },
    {
      title: "Account Management",
      description: "Manage your account and settings.",
    },
    {
      title: "Troubleshooting",
      description: "Find solutions to common problems.",
    },
    {
      title: "Contact Support",
      description: "Get in touch with our support team.",
    },
  ];

  return (
    <Layout>
      <Container
        maxWidth="md"
        style={{ paddingTop: "20px", position: "absolute" }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Help Center
        </Typography>

        <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
          <Typography
            paragraph
            sx={{
              fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
            }}
          >
            Welcome to our Help Center. Here, you can find answers to frequently
            asked questions and learn how to make the most out of our
            application.
          </Typography>
        </Paper>

        {helpTopics.map((topic, index) => (
          <Card key={index} variant="outlined" style={{ marginBottom: "20px" }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: "'Michroma', sans-serif" }}
              >
                {topic.title}
              </Typography>
              <Typography paragraph>{topic.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Layout>
  );
};

export default HelpPage;
