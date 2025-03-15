import React, { useState } from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem, IconButton, Box, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/auth/navbarlogo.png"; // Adjust path accordingly

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose(); // Close menu after navigation
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#3b79b8", padding: "10px 0" }}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img src={logo} alt="CareerQuest Logo" style={{ height: 60, marginRight: 50 }} />
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" onClick={() => handleNavigation("/Home")}>Home</Button>
            <Button color="inherit" onClick={() => handleNavigation("/Procedure")}>Procedure</Button>
            <Button color="inherit" onClick={() => handleNavigation("/Resources")}>Resources</Button>
            <Button color="inherit" onClick={() => handleNavigation("/Services")}>Services</Button>
            <Button color="inherit" onClick={() => handleNavigation("/About_us")}>About Us</Button>
          </Box>

          {/* Profile Icon */}
          <IconButton color="inherit" onClick={handleMenuOpen} sx={{ marginLeft: 5 }}>
            <AccountCircleIcon fontSize="large" />
          </IconButton>

          {/* Dropdown Menu */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={() => handleNavigation("/profile")}>Profile</MenuItem>
            <MenuItem onClick={() => handleNavigation("/Logout")} sx={{ color: "red" }}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
