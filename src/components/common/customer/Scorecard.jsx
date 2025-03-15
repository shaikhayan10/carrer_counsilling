import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Scorecard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      {/* Scorecard Header */}
      <Box sx={{ backgroundColor: "#0057B3", py: 2, borderRadius: "10px 10px 0 0", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" color="white">
          Scorecard
        </Typography>
      </Box>

      {/* Score Section */}
      <Box sx={{ backgroundColor: "#D5EFFF", p: 4, textAlign: "center", borderRadius: "0 0 10px 10px" }}>
        {/* Score Text with 10/10 */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
          <Typography variant="h6" color="#003366">
            Excellent! You've scored
          </Typography>
          <Box sx={{ backgroundColor: "#0057B3", color: "white", px: 2, py: 0.5, borderRadius: 2 }}>
            <Typography variant="h6">10/10</Typography>
          </Box>
        </Box>

        <Box sx={{ borderBottom: "2px solid #003366", my: 2, width: "80%", mx: "auto" }} />

        {/* Score Details */}
        <Grid container spacing={2} justifyContent="center">
          {[
            { label: "Total Questions", value: "10" },
            { label: "Correct Answers", value: "10" },
            { label: "Questions Attempted", value: "10" },
            { label: "Incorrect Answers", value: "0" },
          ].map((item, index) => (
            <Grid item xs={6} key={index}>
              <Box sx={{ backgroundColor: "#0057B3", color: "white", p: 1.5, borderRadius: 2, textAlign: "center" }}>
                <Typography variant="body1" fontWeight="bold">
                  {item.label}: {item.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Message */}
        <Typography variant="body1" color="#003366" mt={3}>
          Now, you can explore more Colleges, Courses, and Schools on our Website.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/Procedure")}
            sx={{ backgroundColor: "#0057B3", borderRadius: 2, px: 3 }}
          >
            Later
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/Resources")}
            sx={{ backgroundColor: "#0057B3", borderRadius: 2, px: 3 }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Scorecard;
