import React from "react";
import { TextField, Button, Typography, Box, Paper, Grid, Input } from "@mui/material";

const RegisterForm = () => {
  return (
    <Box
      sx={{
       backgroundImage: `url(https://source.unsplash.com/1600x900/?graduation)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: 500,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", mb: 3, color: "#d81b60" }}>
          Register Now
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Your Name" required variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Your Email" required variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Your Password" required type="password" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Confirm Password" required type="password" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Input type="file" fullWidth required />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="body2">
              Already have an account? <span style={{ color: "#d81b60", cursor: "pointer" }}>Login Now</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="secondary">
              Register Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default RegisterForm;
