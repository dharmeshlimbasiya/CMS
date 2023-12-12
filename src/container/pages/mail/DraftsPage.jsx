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
import DraftsIcon from "@mui/icons-material/Drafts";
import Layout from "../../layout/Layout";

const draftItems = [
  { sender: "John Doe", subject: "Meeting Notes", date: "Aug 18, 2023" },
  { sender: "Jane Smith", subject: "Project Proposal", date: "Aug 17, 2023" },
  { sender: "Alice Johnson", subject: "Report Draft", date: "Aug 16, 2023" },
];

const DraftsPage = () => {
  return (
    <Layout>
      <Container maxWidth="md" style={{ paddingTop: "20px" ,position:"absolute"}}>
        <Typography variant="h4" gutterBottom sx={{fontFamily:"'Raleway', sans-serif"}}>
          Drafts
        </Typography>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <DraftsIcon color="secondary" />
                  </TableCell>
                  <TableCell>Sender</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {draftItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <DraftsIcon color="secondary" />
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

export default DraftsPage;
