import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container, Box, Checkbox, FormControlLabel } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import backgroundImage from "../../../assets/auth/RegisterImage.jpeg"; // Adjust path accordingly
import logo from "../../../assets/auth/navbarlogo.png"; // Adjust path accordingly
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("user/loginUser", data);

      if (response.status === 200) {
        toast.success("Login Successful", {
          className: "toast-success",
          autoClose: 2000,
          hideProgressBar: false,
        });

        setTimeout(() => {
          navigate("/Home"); // Redirect to home page after 2.5 seconds
        }, 2500);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          toast.error("User not found. Please register first", {
            className: "toast-error",
            autoClose: 3000,
            hideProgressBar: false,
          });
        } else if (err.response.status === 401) {
          toast.error("Incorrect password. Please try again.", {
            className: "toast-error",
            autoClose: 3000,
            hideProgressBar: false,
          });
        } else {
          toast.error("Login failed. Please try again later.", {
            className: "toast-error",
            autoClose: 3000,
            hideProgressBar: false,
          });
        }
      } else {
        toast.error("Network error. Please check your connection.", {
          className: "toast-error",
          autoClose: 3000,
          hideProgressBar: false,
        });
      }
      console.log("Login failed", err);
    }
  };

  return (
    <Container maxWidth={false} disableGutters sx={{ display: "flex", flexDirection: "row", position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", overflow: "hidden", boxSizing: "border-box" }}>
      <Box sx={{ flex: "1 1 50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f0f4ff", height: "100vh" }}>
        <img src={backgroundImage} alt="Login Illustration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>

      <Box sx={{ flex: "1 1 50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#b3e5fc", padding: 4, height: "100vh", boxSizing: "border-box" }}>
        <img src={logo} alt="Company Logo" width={250} height={125} style={{ marginBottom: 16 }} />
        <Typography variant="h4" gutterBottom sx={{ color: "#005a9c" }}>Login to your account</Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Button variant="contained" startIcon={<GoogleIcon />} sx={{ backgroundColor: "#DB4437", color: "white" }}>Google</Button>
          <Button variant="contained" startIcon={<FacebookIcon />} sx={{ backgroundColor: "#1877F2", color: "white" }}>Facebook</Button>
        </Box>

        <Typography variant="body2" sx={{ color: "#005a9c", my: 2 }}>————— or continue with email —————</Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "80%" }}>
          <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" {...register("Email", { required: "Email is required" })}
            error={!!errors.Email} helperText={errors.Email?.message} />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" {...register("Password", { required: "Password is required" })}
            error={!!errors.Password} helperText={errors.Password?.message} />
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <FormControlLabel control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />} label="Remember me" sx={{ color: "blue" }} />
            <Typography variant="body2" component={Link} to="/Forget" sx={{ color: "blue", textDecoration: "none" }}>Forgot Password?</Typography>
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>LOGIN</Button>
        </form>

        <Typography variant="body2" sx={{ mt: 2, color: "#005a9c" }}>
          Don’t have an account? <Link to="/Register" style={{ color: "blue", fontWeight: "bold", textDecoration: "none" }}>Create an account</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
