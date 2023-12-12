import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Container,
  Box,
} from "@mui/material";
import Layout from "../../layout/Layout";

const AttendanceTable = () => {
  const [userData, setUserData] = useState([
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" },
  ]);

  const [newUser, setNewUser] = useState({ id: null, name: "", email: "" });

  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddButtonClick = () => {
    setIsAdding(true);
    setNewUser({ id: null, name: "", email: "" });
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) return;

    // Generate a unique ID for the new user
    const maxId = Math.max(...userData.map((user) => user.id));
    const newUserWithId = { ...newUser, id: maxId + 1 };

    setUserData([...userData, newUserWithId]);
    setIsAdding(false);
    setNewUser({ id: null, name: "", email: "" });
  };

  const handleEditUser = (id) => {
    setEditingId(id);
    const userToEdit = userData.find((user) => user.id === id);
    if (userToEdit) {
      setNewUser(userToEdit);
    }
  };

  const handleSaveUser = () => {
    if (!newUser.name || !newUser.email) return;

    const updatedData = userData.map((user) =>
      user.id === editingId ? { ...user, ...newUser } : user
    );

    setUserData(updatedData);
    setEditingId(null);
    setNewUser({ id: null, name: "", email: "" });
  };

  const handleCancelEdit = () => {
    setIsAdding(false);
    setEditingId(null);
    setNewUser({ id: null, name: "", email: "" });
  };

  const handleDeleteUser = (id) => {
    const updatedData = userData.filter((user) => user.id !== id);
    setUserData(updatedData);
  };

  return (
    <Layout>
      <Container maxWidth="md" sx={{ position: "absolute" }}>
        <Box mt={3}>
          <h1>User Management</h1>
          {isAdding && (
            <TableRow>
              <TableCell>{newUser.id}</TableCell>
              <TableCell>
                <TextField
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddUser}>Add</Button>
                <Button onClick={handleCancelEdit}>Cancel</Button>
              </TableCell>
            </TableRow>
          )}
          <Button onClick={handleAddButtonClick}>Add User</Button>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>
                      {editingId === user.id ? (
                        <TextField
                          name="name"
                          value={newUser.name}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.name
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === user.id ? (
                        <TextField
                          name="email"
                          value={newUser.email}
                          onChange={handleInputChange}
                        />
                      ) : (
                        user.email
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === user.id ? (
                        <>
                          <Button onClick={handleSaveUser}>Save</Button>
                          <Button onClick={handleCancelEdit}>Cancel</Button>
                        </>
                      ) : (
                        <>
                          <Button onClick={() => handleEditUser(user.id)}>
                            Edit
                          </Button>
                          <Button onClick={() => handleDeleteUser(user.id)}>
                            Delete
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Layout>
  );
};

export default AttendanceTable; 