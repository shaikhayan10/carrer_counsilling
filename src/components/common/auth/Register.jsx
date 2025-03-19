import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { TextField, Button, Typography, Container, Box, Link } from "@mui/material";
import backgroundImage from "../../../assets/auth/RegisterImage.jpeg"; // Adjust path
import logo from "../../../assets/auth/navbarlogo.png"; // Adjust path
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate(); // Initialize navigation
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignUp = async (data) => {
    try {
      const response = await axios.post("user/createUser", data);

      if (response.status === 200) {
        toast.success("Signup Successful", {
          className: "toast-success",
          autoClose: 2000,
          hideProgressBar: false,
        });

        setTimeout(() => {
          navigate('/Login'); // Redirect to login after 2.5 seconds
        }, 2500);
      } else {
        toast.error("Signup Unsuccessful", {
          className: "toast-error",
          autoClose: 2000,
          hideProgressBar: false,
        });
      }
    } catch (err) {
      console.error("Sign-Up failed:", err);
      toast.error("Sign-Up failed, please try again.", {
        className: "toast-error",
        autoClose: 2000,
      });
    }
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Left Side - Image */}
      <Box
        sx={{
          flex: "1 1 50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f4ff",
          height: "100vh",
        }}
      >
        <img 
          src={backgroundImage} 
          alt="Signup Illustration" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />
      </Box>

      {/* Right Side - Signup Form */}
      <Box
        sx={{
          flex: "1 1 50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#b3e5fc",
          padding: 4,
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <img src={logo} alt="Company Logo" width={250} height={125} style={{ marginTop: "-10px", marginBottom: "8px" }} />

        <Typography variant="h4" sx={{ mb: 0, color: "#005a9c" }}>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit(handleSignUp)} style={{ width: "80%" }}>
          <TextField 
            label="First Name" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            {...register("Fname", { required: "First name is required." })}
            error={!!errors.Fname}
            helperText={errors.Fname?.message} 
          />

          <TextField 
            label="Last Name" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            {...register("Lname", { required: "Last name is required." })}
            error={!!errors.Lname}
            helperText={errors.Lname?.message} 
          />

          <TextField 
            label="Email Address" 
            type="email" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            {...register("Email", { required: "Email is required" })}
            error={!!errors.Email}
            helperText={errors.Email?.message} 
          />

          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            {...register("Password", { required: "Password is required" })}
            error={!!errors.Password}
            helperText={errors.Password?.message} 
          />

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>

        <Typography variant="body2" sx={{ color: "#005a9c", mt: 2, textAlign: "center" }}>
          Already have an account?{" "}
          <Link href="/Login" sx={{ color: "blue", fontWeight: "bold", textDecoration: "none" }}>
            Login Now
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
