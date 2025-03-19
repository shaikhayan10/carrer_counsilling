import React, { useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Grid, Card } from "@mui/material";
import logo from "../../../assets/auth/navbarlogo.png"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputFieldStyle = {
  backgroundColor: "#b3e5fc", 
  borderRadius: "5px",
  input: { color: "#121147" }, 
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "white" },
    "&:hover fieldset": { borderColor: "#64b5f6" },
    "&.Mui-focused fieldset": { borderColor: "white" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "white" },
};

const StudentProfile = () => {
  const {register, handleSubmit,formState : { errors }, reset} = useForm();
  const navigate = useNavigate(); 
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("profile/createProfile", data);

      if (response.status === 200) {
        toast.success("Profile created Successful", {
          className: "toast-success",
          autoClose: 2000,
          hideProgressBar: false
        });

        setTimeout(() => {
          navigate('/Home');
        }, 2500);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          toast.error("User not found. Please Create Profile first", {
            className: "toast-error",
            autoClose: 3000,
            hideProgressBar: false
          });
        } else if (err.response.status === 401) {
          toast.error("Incorrect password. Please try again.", {
            className: "toast-error",
            autoClose: 3000,
            hideProgressBar: false
          });
        } else {
          toast.error("Profile created Unsuccessful. Please try again later.", {
            className: "toast-error",
            autoClose: 3000,
            hideProgressBar: false
          });
        }
      } else {
        toast.error("Network error. Please check your connection.", {
          className: "toast-error",
          autoClose: 3000,
          hideProgressBar: false
        });
      }
      console.log("Profile Created Unsuccessful", err);
    }
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

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            
            {/* Personal Details */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#105c99" }}>Personal Details</Typography>
            </Grid>
            <Grid item xs={12}><TextField fullWidth label="First Name" name="name" sx={inputFieldStyle} {...register("Name", { required: "Name is required" })}
              error={!!errors.Name}
              helperText={errors.Name?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Middle Name" name="middleName" sx={inputFieldStyle} {...register("Middlename", { required: "Middlename is required" })}
              error={!!errors.Middlename}
              helperText={errors.Middlename?.message} /></Grid>
            <Grid item xs={12}><TextField fullWidth label="Last Name" name="lastName" sx={inputFieldStyle} {...register("Lastname", { required: "Lastname is required" })}
              error={!!errors.Lastname}
              helperText={errors.Lastname?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Email" name="email" sx={inputFieldStyle} {...register("Email", { required: "Email is required" })}
              error={!!errors.Email}
              helperText={errors.Email?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Mobile" name="mobile" sx={inputFieldStyle} {...register("Mobile", { required: "Mobile is required" })}
              error={!!errors.Mobile}
              helperText={errors.Mobile?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Address" name="address"  sx={inputFieldStyle} {...register("Address", { required: "Address is required" })}
              error={!!errors.Address}
              helperText={errors.Address?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Birthdate" name="birthdate" sx={inputFieldStyle} {...register("Birthdate", { required: "Birthdate is required" })}
              error={!!errors.Birthdate}
              helperText={errors.Birthdate?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Age" name="age" sx={inputFieldStyle} {...register("Age", { required: "Age is required" })}
              error={!!errors.Age}
              helperText={errors.Age?.message}/></Grid>

            {/* Parent Details */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#105c99" }}>Parent Details</Typography>
            </Grid>
            <Grid item xs={12}><TextField fullWidth label="Father's Name" name="fatherName" sx={inputFieldStyle} {...register("Faname", { required: "Father's Name is required" })}
              error={!!errors.Faname}
              helperText={errors.Faname?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Father's Occupation" name="fatherOccupation" sx={inputFieldStyle} {...register("Faoccupation", { required: "Father's Occupation is required" })}
              error={!!errors.Faoccupation}
              helperText={errors.Faoccupation?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Father's Qualification" name="fatherQualification" sx={inputFieldStyle} {...register("Faqualification", { required: "Father's Qualification is required" })}
              error={!!errors.Faqualification}
              helperText={errors.Faqualification?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Mother's Name" name="motherName" sx={inputFieldStyle} {...register("Moname", { required: "Mother Name is required" })}
              error={!!errors.Moname}
              helperText={errors.Moname?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Mother's Occupation" name="motherOccupation" sx={inputFieldStyle} {...register("Mooccupation", { required: "Mother's Occupation is required" })}
              error={!!errors.Mooccupation}
              helperText={errors.Mooccupation?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Mother's Qualification" name="motherQualification"  sx={inputFieldStyle} {...register("Moqualification", { required: "Mother's Qualification is required" })}
              error={!!errors.Moqualification}
              helperText={errors.Moqualification?.message}/></Grid>

            {/* Academic Details */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#105c99" }}>Academic Details</Typography>
            </Grid>
            <Grid item xs={12}><TextField fullWidth label="10th Marks" name="marks10th" sx={inputFieldStyle} {...register("Marksx", { required: "Marks of 10 is required" })}
              error={!!errors.Marksx}
              helperText={errors.Marksx?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="10th Percentage" name="percentage10th"  sx={inputFieldStyle} {...register("Marksperx", { required: "Percecentage of 10 is required" })}
              error={!!errors.Marksperx}
              helperText={errors.Marksperx?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="12th Marks" name="marks12th"  sx={inputFieldStyle} {...register("Marksxii", { required: "Marks of 12 is required" })}
              error={!!errors.Marksxii}
              helperText={errors.Marksxii?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="12th Percentage" name="percentage12th"  sx={inputFieldStyle} {...register("Marksperxii", { required: "Percecentage of 12 is required" })}
              error={!!errors.Marksperxii}
              helperText={errors.Marksperxii?.message}/></Grid>

            {/* Location Details */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#105c99" }}>Location Details</Typography>
            </Grid>
            <Grid item xs={12}><TextField fullWidth label="City" name="city" sx={inputFieldStyle}  {...register("city", { required: "City is required" })}
              error={!!errors.city}
              helperText={errors.city?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="State" name="state"  sx={inputFieldStyle} {...register("state", { required: "State is required" })}
              error={!!errors.state}
              helperText={errors.state?.message}/></Grid>
            <Grid item xs={12}><TextField fullWidth label="Country" name="country"  sx={inputFieldStyle} {...register("country", { required: "Country is required" })}
              error={!!errors.country}
              helperText={errors.country?.message}/></Grid>

            {/* Buttons */}
            <Grid item xs={6}><Button fullWidth variant="contained" onClick={() => reset()}>Clear All</Button></Grid>
            <Grid item xs={6}><Button fullWidth variant="contained" type="submit">Save Profile</Button></Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default StudentProfile;
