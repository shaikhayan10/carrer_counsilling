import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { TextField, Button, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import logo from "../../../assets/auth/navbarlogo.png"; // Import the logo

const inputFieldStyle = {
  backgroundColor: "#b3e5fc", // Light blue background
  borderRadius: "5px",
  input: { color: "#121147" }, // Dark blue text color
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "white" }, // White border
    "&:hover fieldset": { borderColor: "#64b5f6" }, // Light hover effect
    "&.Mui-focused fieldset": { borderColor: "white" }, // White border when focused
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // White label when focused
};

const StudentProfile = () => {
  const navigate = useNavigate(); // Initialize navigation

  // State to manage input values
  const [formData, setFormData] = useState({
    name: "", middleName: "", lastName: "", email: "", mobile: "", address: "",
    birthdate: "", age: "", fatherName: "", fatherOccupation: "", fatherQualification: "",
    motherName: "", motherOccupation: "", motherQualification: "", marks10th: "",
    percentage10th: "", marks12th: "", percentage12th: "", city: "", state: "", country: "",
  });

  // Function to handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to clear all input fields
  const handleClearAll = () => {
    setFormData({
      name: "", middleName: "", lastName: "", email: "", mobile: "", address: "",
      birthdate: "", age: "", fatherName: "", fatherOccupation: "", fatherQualification: "",
      motherName: "", motherOccupation: "", motherQualification: "", marks10th: "",
      percentage10th: "", marks12th: "", percentage12th: "", city: "", state: "", country: "",
    });
  };

  // Function to handle form submission and navigate to home
  const handleSubmit = () => {
    // You can add validation or API call logic here before navigating
    navigate("/Home"); // Redirect to home page
  };

  return (
    <Box sx={{ backgroundColor: "#105c99", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: 3 }}>
      {/* Logo & Title */}
      <Box sx={{ display: "flex", alignItems: "center", width: "100%", maxWidth: 600, mb: 2 }}>
        <img src={logo} alt="CareerQuest Logo" style={{ height: 100, marginRight: 10 }} />
      </Box>

      {/* Form Container */}
      <Card sx={{ backgroundColor: "#cfe8fc", padding: 3, borderRadius: 3, width: "90%", maxWidth: 600 }}>
        <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", color: "#105c99" }}>Student Profile</Typography>
        <Typography variant="body2" sx={{ textAlign: "center", color: "red", mb: 2 }}>(Please fill out every field*)</Typography>

        {/* Personal Details */}
        <CardContent sx={{ backgroundColor: "#105c99", borderRadius: 2, padding: 2, mb: 2 }}>
          {["name", "middleName", "lastName", "email", "mobile", "address", "birthdate", "age"].map((field) => (
            <TextField key={field} fullWidth label={`Enter your ${field}`} name={field} value={formData[field]} onChange={handleChange} margin="dense" sx={inputFieldStyle} />
          ))}
        </CardContent>

        {/* Parent Details */}
        <CardContent sx={{ backgroundColor: "#105c99", borderRadius: 2, padding: 2, mb: 2 }}>
          {["fatherName", "fatherOccupation", "fatherQualification", "motherName", "motherOccupation", "motherQualification"].map((field) => (
            <TextField key={field} fullWidth label={`Enter your ${field.replace(/([A-Z])/g, " $1")}`} name={field} value={formData[field]} onChange={handleChange} margin="dense" sx={inputFieldStyle} />
          ))}
        </CardContent>

        {/* Academic Details */}
        <CardContent sx={{ backgroundColor: "#105c99", borderRadius: 2, padding: 2, mb: 2 }}>
          {["marks10th", "percentage10th", "marks12th", "percentage12th"].map((field) => (
            <TextField key={field} fullWidth label={`Enter your ${field.replace(/([A-Z])/g, " $1")}`} name={field} value={formData[field]} onChange={handleChange} margin="dense" sx={inputFieldStyle} />
          ))}
        </CardContent>

        {/* Location Details */}
        <CardContent sx={{ backgroundColor: "#105c99", borderRadius: 2, padding: 2, mb: 2 }}>
          {["city", "state", "country"].map((field) => (
            <TextField key={field} fullWidth label={`Enter your ${field}`} name={field} value={formData[field]} onChange={handleChange} margin="dense" sx={inputFieldStyle} />
          ))}
        </CardContent>

        {/* Buttons */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <Button fullWidth variant="contained" sx={{ backgroundColor: "#105c99", color: "white" }} onClick={handleClearAll}>
              Clear All
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" sx={{ backgroundColor: "#105c99", color: "white" }} onClick={handleSubmit}>
              Save Profile
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default StudentProfile;
