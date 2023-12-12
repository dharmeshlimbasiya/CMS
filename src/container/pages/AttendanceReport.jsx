import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Modal,
  Button,
  Box,
  Container,
  MenuItem,
  Divider,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import Layout from "../layout/Layout";

const AttendanceReport = () => {
  const initialAttendanceData = [
    { id: 1, name: "John Doe", attendance: "Present" },
    { id: 2, name: "Jane Smith", attendance: "Absent" },
    { id: 3, name: "Alext bond", attendance: "Present" },
    { id: 4, name: "Jem's bond", attendance: "Absent" },
    // Add more data as needed
  ];

  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);
  const [editedRowId, setEditedRowId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAttendance, setNewAttendance] = useState("");

  const handleEditClick = (id) => {
    setEditedRowId(id);
  };

  const handleSaveClick = () => {
    setEditedRowId(null);
  };

  const handleDeleteClick = (id) => {
    const updatedData = attendanceData.filter((item) => item.id !== id);
    setAttendanceData(updatedData);
  };

  const handleAddClick = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setNewName("");
    setNewAttendance("");
  };

  const handleAttendanceChange = (id, newValue) => {
    const updatedData = attendanceData.map((item) =>
      item.id === id ? { ...item, attendance: newValue } : item
    );
    setAttendanceData(updatedData);
  };

  const handleNameChange = (id, newValue) => {
    const updatedData = attendanceData.map((item) =>
      item.id === id ? { ...item, name: newValue } : item
    );
    setAttendanceData(updatedData);
  };

  const handleAddNewEntry = (e) => {
    e.preventDefault();
    const newEntry = {
      id: attendanceData.length + 1,
      name: newName,
      attendance: newAttendance,
    };
    setAttendanceData([...attendanceData, newEntry]);
    handleModalClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Layout>
      <Container
        sx={{
          position: "absolute",
          // display: "flex",
          // flexDirection: "column",
        }}
      >
        <IconButton
          onClick={handleAddClick}
          sx={{ fontFamily: "'Raleway', sans-serif" }}
        >
          <AddIcon /> Add New Entry
        </IconButton>

        <Divider style={{ marginBottom: "20px" }} />

        <TableContainer
          component={Paper}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "65%",
          }}
        >
          <Table>
            <TableHead
              sx={{
                backgroundColor: "gray",
              }}
            >
              <TableRow>
                <TableCell sx={{ fontFamily: "'Raleway', sans-serif" }}>
                  Name
                </TableCell>
                <TableCell sx={{ fontFamily: "'Raleway', sans-serif" }}>
                  Attendance
                </TableCell>
                <TableCell sx={{ fontFamily: "'Raleway', sans-serif" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {editedRowId === item.id ? (
                      <TextField
                        value={item.name}
                        onChange={(e) =>
                          handleNameChange(item.id, e.target.value)
                        }
                      />
                    ) : (
                      item.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editedRowId === item.id ? (
                      <TextField
                        select
                        value={item.attendance}
                        onChange={(e) =>
                          handleAttendanceChange(item.id, e.target.value)
                        }
                      >
                        <MenuItem value="Present">Present</MenuItem>
                        <MenuItem value="Absent">Absent</MenuItem>
                      </TextField>
                    ) : (
                      item.attendance
                    )}
                  </TableCell>
                  <TableCell>
                    {editedRowId === item.id ? (
                      <IconButton onClick={handleSaveClick}>
                        <SaveIcon />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => handleEditClick(item.id)}>
                        <EditIcon />
                      </IconButton>
                    )}
                    <IconButton onClick={() => handleDeleteClick(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal open={modalOpen} onClose={handleModalClose}>
          <Box sx={style}>
            <h2>Add New Attendance Entry</h2>
            <form onSubmit={handleAddNewEntry}>
              <TextField
                label="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                fullWidth
                margin="normal"
                required
              />

              <TextField
                select
                label="Attendance"
                value={newAttendance}
                onChange={(e) => setNewAttendance(e.target.value)}
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value="Present">Present</MenuItem>
                <MenuItem value="Absent">Absent</MenuItem>
              </TextField>
              <Button
                variant="contained"
                color="primary"
                // onClick={handleAddNewEntry}
                type="submit"
              >
                Add Entry
              </Button>
            </form>
          </Box>
        </Modal>
      </Container>
    </Layout>
  );
};

export default AttendanceReport;
