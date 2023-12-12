import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Layout from "../layout/Layout";

const MyAccount = () => {
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
          My Account
        </Typography>

        {/* Account Information */}
        <Card
          style={{ marginBottom: "20px", backgroundColor: "whitesmoke" }}
          elevation={3}
        >
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: " 'Michroma', sans-serif" }}
            >
              Account Information
            </Typography>
            <TextField fullWidth label="Full Name" margin="normal" />
            <TextField fullWidth label="Email Address" margin="normal" />
            <TextField fullWidth label="Username" margin="normal" />
            <TextField fullWidth label="Phone Number" margin="normal" />
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Divider style={{ marginBottom: "20px" }} />

        {/* Change Password */}
        <Card
          style={{ marginBottom: "20px", backgroundColor: "whitesmoke" }}
          elevation={3}
        >
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: " 'Michroma', sans-serif" }}
            >
              Change Password
            </Typography>
            <TextField
              fullWidth
              label="Current Password"
              margin="normal"
              type="password"
            />
            <TextField
              fullWidth
              label="New Password"
              margin="normal"
              type="password"
            />
            <TextField
              fullWidth
              label="Confirm New Password"
              margin="normal"
              type="password"
            />
            <Button variant="contained" color="primary">
              Change Password
            </Button>
          </CardContent>
        </Card>

        <Divider style={{ marginBottom: "20px" }} />

        {/* Blocklist */}
        <Card
          style={{ marginBottom: "20px", backgroundColor: "whitesmoke" }}
          elevation={3}
        >
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontFamily: " 'Michroma', sans-serif" }}
            >
              Blocklist
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="User A"
                  secondary="Blocked on Aug 18, 2023"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="User B"
                  secondary="Blocked on Aug 16, 2023"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Contacts */}
        <Card sx={{ backgroundColor: "whitesmoke" }} elevation={3}>
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontFamily: " 'Michroma', sans-serif" }}
              gutterBottom
            >
              Contacts
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="User X"
                  secondary="Added on Aug 15, 2023"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="User Y"
                  secondary="Added on Aug 10, 2023"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Add more sections as needed */}
      </Container>
    </Layout>
  );
};

export default MyAccount;
