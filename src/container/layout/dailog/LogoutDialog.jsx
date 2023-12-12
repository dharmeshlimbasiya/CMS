import React from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function LogoutDialog({ dailogOpen, onClose }) {
  const navigate = useNavigate();

  return (
    <Dialog open={dailogOpen} onClose={onClose}>
      <DialogTitle>{"Log out?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to log out?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>Cancel</Button>
        <Button onClick={() => navigate("/")}>Log out</Button>
      </DialogActions>
    </Dialog>
  );
}
