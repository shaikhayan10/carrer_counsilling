import React from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import backgroundImage from "../../../assets/auth/RegisterImage.jpeg"; // Adjust path accordingly
import logo from "../../../assets/auth/navbarlogo.png"; // Adjust path accordingly

const SignUp = () => {
  return (
    <Container maxWidth={false} sx={{ display: "flex", height: "600", width: "900" }}>
      {/* Left Side - Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f4ff",
        }}
      >
        <img src={backgroundImage} alt="Signup Illustration" width={500} height={500} />
      </Box>

      {/* Right Side - Signup Form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#b3e5fc",
          padding: 4,
        }}
      >
        <img src={logo} alt="Company Logo" width={250} height={125} style={{ marginBottom: 16 }} />
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <form style={{ width: "100%" }}>
          <TextField label="First Name" variant="outlined" fullWidth margin="normal" required />
          <TextField label="Last Name" variant="outlined" fullWidth margin="normal" required />
          <TextField label="Email Address" type="email" variant="outlined" fullWidth margin="normal" required />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" required />
          {/* <TextField label="Confirm Password" type="password" variant="outlined" fullWidth margin="normal" required /> */}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account? <a href="/Login">Login Now</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
