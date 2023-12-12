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
import SendIcon from "@mui/icons-material/Send";
import Layout from "../../layout/Layout";

const sentItems = [
  {
    recipient: "Alice Johnson",
    subject: "Report Submission",
    date: "Aug 18, 2023",
  },
  { recipient: "Bob Smith", subject: "Project Update", date: "Aug 17, 2023" },
  {
    recipient: "Charlie Brown",
    subject: "Meeting Notes",
    date: "Aug 16, 2023",
  },
];

const SentPage = () => {
  return (
    <Layout>
      <Container
        maxWidth="md"
        style={{
          paddingTop: "20px",
          position: "absolute",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Sent Items
        </Typography>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <SendIcon color="primary" />
                  </TableCell>
                  <TableCell>Recipient</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sentItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <SendIcon color="primary" />
                    </TableCell>
                    <TableCell>{item.recipient}</TableCell>
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

export default SentPage;
