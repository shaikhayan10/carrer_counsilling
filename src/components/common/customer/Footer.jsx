import React from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest, Phone, Email, LocationOn } from "@mui/icons-material";
import logo from "../../../assets/auth/navbarlogo.png"; // Import your logo

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#4a85c4", color: "white", py: 3, px: 4 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        
        {/* Left: Logo & Social Media Icons */}
        <Grid item xs={12} sm={4} sx={{ textAlign: "left", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Box component="img" src={logo} alt="CareerQuest Logo" sx={{ width: 200, height: "auto", mb: 1 }} />
          <Box>
            <IconButton href="#" sx={{ color: "pink", mx: 0.5 }}><Instagram fontSize="large" /></IconButton>
            <IconButton href="#" sx={{ color: "darkblue", mx: 0.5 }}><Facebook fontSize="large" /></IconButton>
            <IconButton href="#" sx={{ color: "red", mx: 0.5 }}><Pinterest fontSize="large" /></IconButton>
            <IconButton href="#" sx={{ color: "bluewhite", mx: 0.5 }}><Twitter fontSize="large" /></IconButton>
          </Box>
        </Grid>

        {/* Center: Copyright & Links */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="body2">© 2025 CareerQuest, All Rights Reserved</Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="#" color="inherit" underline="hover" display="block" sx={{ my: 0.5 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block" sx={{ my: 0.5 }}>
              Terms of Service
            </Link>
            <Link href="#" color="inherit" underline="hover" display="block" sx={{ my: 0.5 }}>
              Cookie Settings
            </Link>
          </Box>
        </Grid>

        {/* Right: Contact Information */}
        <Grid item xs={12} sm={4} textAlign="right">
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1, mb: 1 }}>
            <Phone />
            <Typography variant="body2">+91 95 76 12 98 04</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1, mb: 1 }}>
            <Email />
            <Link href="mailto:careerquest@co.in" color="inherit" underline="hover">
              careerquest@co.in
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
            <LocationOn />
            <Typography variant="body2">Ahmedabad, Gujarat</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
