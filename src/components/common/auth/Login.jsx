import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container, Box, Checkbox, FormControlLabel } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import backgroundImage from "../../../assets/auth/RegisterImage.jpeg"; // Adjust path accordingly
import logo from "../../../assets/auth/navbarlogo.png"; // Adjust path accordingly

const Login = () => {
  return (
    <Container maxWidth={false} sx={{ display:"flex", height: "1000", width: "1000" }}>
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
        <img src={backgroundImage} alt="Login Illustration" width={500} height={500} />
      </Box>

      {/* Right Side - Login Form */}
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
          Login to your account..
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Button variant="contained" startIcon={<GoogleIcon />} sx={{ backgroundColor: "#DB4437", color: "white" }}>
            Google
          </Button>
          <Button variant="contained" startIcon={<FacebookIcon />} sx={{ backgroundColor: "#1877F2", color: "white" }}>
            Facebook
          </Button>
        </Box>

        <Typography variant="body2" sx={{ my: 2 }}>
          ———————— or continue with email ————————
        </Typography>

        <form style={{ width: "100%" }}>
          <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" required />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" required />
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <Typography variant="body2" component={Link} to="/Forget"  sx={{ textDecoration: "none" }}>
              Forgot Password?
            </Typography>
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            LOGIN
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don’t have an account? <a href="/Register">Create an account</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
