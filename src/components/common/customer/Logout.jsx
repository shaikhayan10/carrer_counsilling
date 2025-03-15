import React, { useState } from "react";
import { Button, Typography, Dialog, DialogActions, DialogContent } from "@mui/material";

const LogoutDialog = () => {
  const [open, setOpen] = useState(true);

  const handleCancel = () => {
    window.location.href = "/Home"; // Redirect to Home Page
  };

  const handleLogout = () => {
    window.location.href = "/Login"; // Redirect to Login Page
  };

  return (
    <Dialog open={open}>
      <DialogContent sx={{ textAlign: "center", backgroundColor: "#D5EFFF" }}>
        <Typography variant="h5" fontWeight="bold" color="#0057B3">
          Are you sure you want to Logout?
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", backgroundColor: "#D5EFFF", pb: 2 }}>
        <Button
          variant="contained"
          onClick={handleCancel}
          sx={{
            backgroundColor: "#0057B3",
            color: "white",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            mx: 2,
            "&:hover": { backgroundColor: "#003366" },
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleLogout}
          sx={{
            backgroundColor: "#0057B3",
            color: "white",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            mx: 2,
            "&:hover": { backgroundColor: "#003366" },
          }}
        >
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
