import React from "react";
import { Card, CardContent, Typography, Box, Container, Paper, AppBar, Toolbar } from "@mui/material";
import CollegeImage from "../../../assets/auth/collegelogo.png"; // Update with the correct image path

const colleges = [
  {
    name: "GLS University",
    location: "Ellisbridge, Ahmedabad",
    courses: "B.Com, BBA, BCA, B. Sc., B. Tech., LLB",
    fees: "20,000 to 50,000 per Semester (depends on course)",
    admission10: "65%",
    admission12: "70%",
    rating: "8/10",
  },
  {
    name: "Som-Lalit College",
    location: "Navrangpura, Ahmedabad",
    courses: "B.Com, BBA, BCA, B. Sc., B. Tech., LLB",
    fees: "15,000 to 40,000 per Semester (depends on course)",
    admission10: "75%",
    admission12: "80%",
    rating: "7/10",
  },
  {
    name: "St. Xavier’s College",
    location: "Navrangpura, Ahmedabad",
    courses: "B.Com, BCA, B. Sc., B. Tech.",
    fees: "15,000 to 25,000 per Semester (depends on course)",
    admission10: "80%",
    admission12: "85%",
    rating: "8/10",
  },
];

const CollegeDirectory = () => {
  return (
    <Box sx={{ backgroundColor: "#b3e5fc", borderRadius: "10px" }}>
      <AppBar position="static" sx={{ backgroundColor: "#005A9C", borderRadius: "0px" }}>
        <Toolbar sx={{ minHeight: "80px" }}>
          <Typography variant="h3" align="center" sx={{ flexGrow: 1, fontWeight: "bold", color: "#FFFFFF" }}>
            College Directory
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ padding: "20px" }}>
        <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px", backgroundColor: "#005A9C" }}>
          {colleges.map((college, index) => (
            <Card key={index} sx={{ backgroundColor: "#b3e5fc", margin: "20px 0", padding: "10px", borderRadius: "10px" }}>
              <CardContent>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1A237E" }}>
                    {college.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {college.location}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "10px" }}>
                  <img src={CollegeImage} alt="College" style={{ width: "100px", height: "100px", borderRadius: "5px", backgroundColor: "#FFFFFF", padding: "5px" }} />
                  <Box sx={{ textAlign: "left" }}>
                    <Typography variant="body2"><strong>Courses:</strong> {college.courses}</Typography>
                    <Typography variant="body2"><strong>Fees Structure per Course:</strong> {college.fees}</Typography>
                    <Typography variant="body2"><strong>Required Percentage of 10th to acquire admission:</strong> {college.admission10}</Typography>
                    <Typography variant="body2"><strong>Required Percentage of 12th to acquire admission:</strong> {college.admission12}</Typography>
                    <Typography variant="body2"><strong>Ratings:</strong> {college.rating}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default CollegeDirectory;
