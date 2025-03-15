import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SubmitQuizDialog = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/Quiz"); // Redirect to Quiz Page
  };

  const handleSubmit = () => {
    navigate("/Scorecard"); // Redirect to Scorecard Page
  };

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogContent sx={{ textAlign: "center", backgroundColor: "#D5EFFF", py: 3 }}>
        <Typography variant="h5" fontWeight="bold" color="#0057B3">
          Congrats! You’ve attempted your assessment
        </Typography>
        <Typography variant="h6" color="#0057B3" mt={2}>
          Are you sure you want to submit?
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
          No, I am Not
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
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
          Yes, I am
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubmitQuizDialog;
