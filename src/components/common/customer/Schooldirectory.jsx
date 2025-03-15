import React from "react";
import { Card, CardContent, Typography, Box, Container, Paper, AppBar, Toolbar } from "@mui/material";
import SchoolImage from "../../../assets/auth/schoollogo.png"; // Update with the correct image path

const schools = [
  {
    name: "Ankur High School",
    location: "Paldi, Ahmedabad",
    courses: "Commerce, Science, Arts",
    education: "PlayGroup, Primary, Secondary, Higher Secondary",
    boards: "GSEB, CBSE, NIOS",
    admission10: "70%",
    admission12: "65%",
    rating: "6.5/10",
  },
  {
    name: "St. Xavier’s High School",
    location: "Mirzapur, Ahmedabad",
    courses: "Commerce, Science, Arts",
    education: "PlayGroup, Primary, Secondary, Higher Secondary",
    boards: "GSEB, CBSE, NIOS",
    admission10: "75%",
    admission12: "70%",
    rating: "7/10",
  },
  {
    name: "Divan Ballubhai High School",
    location: "Paldi, Ahmedabad",
    courses: "Commerce, Science",
    education: "PlayGroup, Primary, Secondary, Higher Secondary",
    boards: "GSEB, CBSE",
    admission10: "55%",
    admission12: "50%",
    rating: "5.5/10",
  },
];

const SchoolDirectory = () => {
  return (
    <Box sx={{ backgroundColor: "#b3e5fc", borderRadius: "10px" }}>
      <AppBar position="static" sx={{ backgroundColor: "#005A9C", borderRadius: "0px" }}>
        <Toolbar sx={{ minHeight: "80px" }}>
          <Typography variant="h3" align="center" sx={{ flexGrow: 1, fontWeight: "bold", color: "#FFFFFF" }}>
            School Directory
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ padding: "20px" }}>
        <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px", backgroundColor: "#005A9C" }}>
          {schools.map((school, index) => (
            <Card key={index} sx={{ backgroundColor: "#b3e5fc", margin: "20px 0", padding: "10px", borderRadius: "10px" }}>
              <CardContent>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1A237E" }}>
                    {school.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {school.location}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "10px" }}>
                  <img src={SchoolImage} alt="School" style={{ width: "100px", height: "100px", borderRadius: "5px", backgroundColor: "#FFFFF0", padding: "5px" }} />
                  <Box sx={{ textAlign: "left" }}>
                    <Typography variant="body2"><strong>Course:</strong> {school.courses}</Typography>
                    <Typography variant="body2"><strong>Education:</strong> {school.education}</Typography>
                    <Typography variant="body2"><strong>Education Boards:</strong> {school.boards}</Typography>
                    <Typography variant="body2"><strong>Required Percentage of 9th to acquire admission in 10th:</strong> {school.admission10}</Typography>
                    <Typography variant="body2"><strong>Required Percentage of 11th to acquire admission in 12th:</strong> {school.admission12}</Typography>
                    <Typography variant="body2"><strong>Ratings:</strong> {school.rating}</Typography>
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

export default SchoolDirectory;