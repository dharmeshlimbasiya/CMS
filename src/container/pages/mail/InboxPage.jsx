import React from "react";
import {
  Container,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Layout from "../../layout/Layout";

const inboxItems = [
  { sender: "John Doe", subject: "Meeting Reminder", date: "Aug 18, 2023" },
  { sender: "Jane Smith", subject: "Vacation Plans", date: "Aug 17, 2023" },
  { sender: "Alice Johnson", subject: "Project Update", date: "Aug 16, 2023" },
];

const InboxPage = () => {
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
          Inbox
        </Typography>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <MailIcon color="primary" />
                  </TableCell>
                  <TableCell>Sender</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inboxItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <MailIcon color="primary" />
                    </TableCell>
                    <TableCell>{item.sender}</TableCell>
                    <TableCell>{item.subject}</TableCell>
                    <TableCell>{item.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Layout>
  );
};

export default InboxPage;
