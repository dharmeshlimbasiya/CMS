import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Avatar,
  IconButton,
  Collapse,
  Select,
  MenuItem,
  Button,
  TextField,
  Input,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Layout from "../layout/Layout";
import user from "../../assets/user.jpg";

const Profile = () => {
  const [expanded, setExpanded] = useState(false);
  const [editedName, setEditedName] = useState("Dharmesh Limbasiya");
  const [selectedRole, setSelectedRole] = useState("superadmin");

  const [editedAvatar, setEditedAvatar] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  const handleEditClick = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setNewAvatar("");
    }
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleNewAvatarChange = (event) => {
    setNewAvatar(event.target.value);
    // const file = event.target.files[0]; // Get the selected file
    // if (file) {
    //   const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
    //   setNewAvatar(imageUrl); // Set the selected image URL
    // }
  };

  const handleSaveAvatar = () => {
    if (newAvatar) {
      setEditedAvatar(newAvatar);
      setNewAvatar("");
    }
    setExpanded(false);
    // if (newAvatar) {
    //   setEditedAvatar(newAvatar);
    //   setNewAvatar("");
    // }
    // setExpanded(false);
  };

  return (
    <Layout>
      <Container maxWidth="md" sx={{ position: "absolute" }}>
        <Paper elevation={3} style={{ padding: "20px", margin: "20px 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar src={editedAvatar || user} />
            {expanded ? (
              <TextField
                fullWidth
                value={editedName}
                onChange={handleNameChange}
              />
            ) : (
              <Typography
                variant="h5"
                style={{
                  marginLeft: "10px",
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                {editedName}
                <Typography variant="body1">{selectedRole}</Typography>
              </Typography>
            )}
            <IconButton
              color="primary"
              onClick={handleEditClick}
              style={{ marginLeft: "auto" }}
            >
              <EditIcon />
            </IconButton>
          </div>
          <Collapse in={expanded}>
            <div style={{ marginTop: "10px" }}>
              <Select
                value={selectedRole}
                onChange={handleRoleChange}
                fullWidth
                variant="standard"
                label="Select Role"
              >
                <MenuItem value="superadmin">Superadmin</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
              <TextField
                fullWidth
                label="New Avatar URL"
                value={newAvatar}
                onChange={handleNewAvatarChange}
                margin="normal"
              />
              {/* <Input
                fullWidth
                label="New Avatar URL"
                type="file"
                accept="image/*"
                // value={newAvatar}
                onChange={handleNewAvatarChange}
              /> */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveAvatar}
              >
                Save Avatar
              </Button>
            </div>
          </Collapse>
        </Paper>

        {/* Other Paper components */}
        <Paper elevation={3} style={{ padding: "20px", margin: "20px 0" }}>
          <Typography variant="h6" sx={{ fontFamily: "'Raleway', sans-serif" }}>
            About Me
          </Typography>
          <Typography>
            My name is Dharmesh Limbasiya. I graduated from AU a month ago.
            Now,I have been working as a freelance web developer for the last
            three years and cooperated with several startups. I cannot say with
            100% confidence where I see myself in five years or what my big
            career goal is. The world is changing rapidly, and I don’t have
            enough professional experience to be certain about such things.
            However, I know that I can provide a fresh take and an extraordinary
            approach to every project. I am always open to challenges and
            constructive feedback. I am open-minded and learn new things
            quickly. I want to become a team player and dedicate all my skills
            and talents to develop high-quality and unique products.
          </Typography>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Profile;
