import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../customer/Navbar";
import Footer from "../customer/Footer"; 
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  Fade,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import QuizIcon from "@mui/icons-material/Quiz";
import SchoolIcon from "@mui/icons-material/School";

const CareerAssessment = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true); // State for Fade Animation

  return (
    <>
    <Fade in={show} timeout={1000}>
      <Box sx={{ backgroundColor: "#c3e4fa", minHeight: "100vh", py: 5 }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#26247b",
              mb: 4,
            }}
          >
            Procedure to Career Assessment
          </Typography>

          {/* Top Section: Career Quiz & Assessment Results */}
        <Grid container spacing={4} justifyContent="center">
        {/* Career Assessment Quiz */}
        <Grid item xs={12} sm={6}>
            <Card
            sx={{
                backgroundColor: "#3b79b8",
                color: "white",
                borderRadius: 3,
                boxShadow: 3,
                height: "100%", // Ensures both cards are equal height
                display: "flex",
                flexDirection: "column",
            }}
            >
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                <QuizIcon sx={{ mr: 1 }} />
                Career Assessment Quiz
                </Typography>

                {/* Left-Aligned List of Skills */}
                <Box>
                {[
                    "Quantitative Aptitude (2 questions)",
                    "Logical Reasoning (2 questions)",
                    "General Awareness (2 questions)",
                    "Verbal Ability (2 questions)",
                    "Entrepreneurship (2 questions)",
                ].map((item, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 18, mr: 1 }} />
                    <Typography variant="body2">{item}</Typography>
                    </Box>
                ))}
                </Box>

                <Typography variant="body2" sx={{ mt: 2, opacity: 0.9 }}>
                The quiz takes approximately 20 minutes to complete.
                Your results will help us to recommend suitable career paths.
                </Typography>
            </CardContent>

            <Box sx={{ p: 2 }}>
                <Button
                fullWidth
                variant="contained"
                sx={{
                    backgroundColor: "white",
                    color: "#3b79b8",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#e3f2fd" },
                }}
                onClick={() => navigate("/Quiz")}
                >
                Start Attempting Quiz
                </Button>
            </Box>
            </Card>
        </Grid>

        {/* Assessment Results */}
        <Grid item xs={12} sm={6}>
            <Card
            sx={{
                backgroundColor: "#3b79b8",
                color: "white",
                borderRadius: 3,
                boxShadow: 3,
                height: "100%", // Ensures both cards are equal height
                display: "flex",
                flexDirection: "column",
            }}
            >
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                <BarChartIcon sx={{ mr: 1 }} />
                Your Assessment Result
                </Typography>
                <Box
                sx={{
                    backgroundColor: "white",
                    color: "#3b79b8",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                }}
                >
                Take the assessment to see your personalized results here
                </Box>
                <Typography variant="body2" sx={{ mt: 2, opacity: 0.9 }}>
                These are the results of your assessment. Based on your results, we’ll
                recommend career paths that match your strengths and provide resources
                to help you succeed.
                </Typography>
            </CardContent>

            <Box sx={{ p: 2 }}>
                <Button
                fullWidth
                variant="contained"
                sx={{
                    backgroundColor: "white",
                    color: "#3b79b8",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#e3f2fd" },
                }}
                onClick={() => navigate("/Scorecard")}
                >
                View Detailed Results
                </Button>
            </Box>
            </Card>
        </Grid>
        </Grid>


          {/* How Our Assessment Works Section */}
          <Box
            sx={{
              backgroundColor: "#1a4d80",
              color: "white",
              borderRadius: 3,
              mt: 5,
              p: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              How Our Assessment Works
            </Typography>

            <Grid container spacing={3}>
              {/* Take the Quiz */}
              <Grid item xs={12} sm={4}>
                <Box>
                  <QuizIcon sx={{ fontSize: 50, mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Take the Quiz
                  </Typography>
                  <Typography variant="body2">
                    Complete our 10-question assessment covering 5 key skill
                    areas to identify your strengths and interests.
                  </Typography>
                </Box>
              </Grid>

              {/* Get Your Results */}
              <Grid item xs={12} sm={4}>
                <Box>
                  <BarChartIcon sx={{ fontSize: 50, mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Get Your Results
                  </Typography>
                  <Typography variant="body2">
                    Receive detailed scores and insights about your aptitudes and
                    which career paths might suit you best.
                  </Typography>
                </Box>
              </Grid>

              {/* Explore Resources */}
              <Grid item xs={12} sm={4}>
                <Box>
                  <SchoolIcon sx={{ fontSize: 50, mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Explore Resources
                  </Typography>
                  <Typography variant="body2">
                    Browse our personalized recommendations for schools, colleges,
                    and courses that match your profile.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* Start Your Assessment Button */}
            <Button
              variant="contained"
              sx={{
                mt: 4,
                backgroundColor: "white",
                color: "#1a4d80",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: 5,
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={() => navigate("/quiz")}
            >
              Start Your Assessment Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Fade>
    </>
  );
};

export default CareerAssessment;
