import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Avatar,
  CardContent,
  IconButton,
  Tooltip,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import Layout from "../layout/Layout";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const AdminPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, title: "Joy", address: "This is card 1 address." },
    { id: 2, title: "Alex", address: "This is card 2 address." },
    { id: 3, title: "Tailer", address: "This is card 3 address." },
    // Add more cards here
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [newCardData, setNewCardData] = useState({ title: "", address: "" });

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setNewCardData({ title: "", address: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCardData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddCard = () => {
    if (newCardData.title && newCardData.address) {
      const newCard = { ...newCardData, id: Date.now() };
      setCards((prevCards) => [...prevCards, newCard]);
      handleCloseModal();
    }
  };

  return (
    <Layout>
      <Container
        style={{
          marginLeft: drawerOpen ? "240px" : "0",
          paddingTop: "20px",
          position: "absolute",
        }}
      >
        <Container sx={{ display: "flex" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Welcome to the Superadmin Dashboard
          </Typography>
          <Tooltip title="Add New Admin" arrow>
            <IconButton
              style={{
                marginLeft: "auto",
              }}
              onClick={handleOpenModal}
            >
              <PersonAddAlt1Icon />
            </IconButton>
          </Tooltip>
        </Container>
        <Card style={{ marginBottom: "20px" }}>
          <CardContent style={{ display: "flex", alignItems: "center" }}>
            <Avatar style={{ marginRight: "20px" }} />
            <div>
              <Typography
                variant="h6"
                sx={{ fontFamily: " 'Michroma', sans-serif" }}
              >
                Dharmesh Limbasiya
              </Typography>
              <Typography color="textSecondary">Administrator</Typography>
            </div>
          </CardContent>
        </Card>

        {cards.map((card) => (
          <Card key={card.id} style={{ marginBottom: "20px" }}>
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <Avatar style={{ marginRight: "20px" }} />
              <div>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: " 'Michroma', sans-serif" }}
                >
                  {card.title}
                </Typography>
                <Typography color="textSecondary">Admin</Typography>
              </div>
              <Tooltip title="Delete admin data" arrow>
                <IconButton
                  color="primary"
                  onClick={() => handleDeleteCard(card.id)}
                  style={{ marginLeft: "auto" }}
                >
                  <PersonRemoveIcon />
                </IconButton>
              </Tooltip>
            </CardContent>
          </Card>
        ))}

        <div>
          <Typography
            variant="h6"
            sx={{ fontFamily: "'Raleway', sans-serif" }}
            gutterBottom
          >
            About
          </Typography>
          <Typography paragraph>
            This is the admin dashboard where you can manage various aspects of
            your application.
          </Typography>
        </div>
      </Container>

      {/* Add New Card Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6">Add New Admin</Typography>
          <TextField
            name="title"
            label="Compny name / username"
            value={newCardData.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="address"
            label="Address"
            value={newCardData.address}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <Button variant="contained" color="primary" onClick={handleAddCard}>
            Add Admin
          </Button>
        </div>
      </Modal>
    </Layout>
  );
};

export default AdminPage;
