import React, { useState } from "react";
import { Box, Button, Typography, Grid, Card, CardMedia, CardContent, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Description } from "@mui/icons-material";
import Navbar from "../customer/Navbar";
import Footer from "../customer/Footer"; // Import the Footer component

// Import images
import article1 from "../../../assets/auth/article1.png";
import article2 from "../../../assets/auth/article2.png";
import article3 from "../../../assets/auth/article3.png";
import image1 from "../../../assets/auth/image1.jpeg";
import image2 from "../../../assets/auth/image2.png";
import image3 from "../../../assets/auth/image3.jpg";

// Articles Data
const articles = [
  {
    title: "FutureProof Your Career: Skills for 2025 and Beyond",
    description: "Discover the most in-demand skills that employers will be looking for in the next decade...",
    image: article1,
    link: "/article1",
  },
  {
    title: "Emerging Tech Fields: That Offer Promising Career Paths",
    description: "Explore cutting-edge technology sectors with high growth potential...",
    image: article2,
    link: "/article2",
  },
  {
    title: "How to Choose the Right Academic Path for Your Career Goals",
    description: "Tips for aligning your academic choices with your long-term aspirations...",
    image: article3,
    link: "/article3",
  },
];

// Images for Slider
const images = [image1, image2, image3];

const MergedSection = () => {
  const navigate = useNavigate(); // Initialize navigation function

  // State for Read More functionality
  const [expanded, setExpanded] = useState(Array(articles.length).fill(false));

  const toggleReadMore = (index) => {
    setExpanded((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <Box sx={{ top: 0, width: "100%", zIndex: 1100 }}>
        <Navbar />
      </Box>

      <Box sx={{ backgroundColor: "#a2d9f7", minHeight: "100vh", py: 5 }}>
        <Container sx={{ textAlign: "center" }}>
          
          {/* Profile Section with Image Slider */}
          <Box sx={{ width: "100%", maxWidth: 800, mx: "auto", mb: 5 }}>
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <Box key={index} component="img" src={src} alt={`slide-${index}`} sx={{ width: "100%", borderRadius: 2 }} />
              ))}
            </Slider>
          </Box>

          <Typography variant="h4" sx={{ mt: 3, fontWeight: "bold", cursor: "pointer", color: "#003366" }}>
            Fill details to complete your profile
          </Typography>

          <Button
            variant="contained"
            color="primary"
            startIcon={<Description />}
            sx={{ mt: 2, fontSize: 16, borderRadius: 5, padding: "20px 40px" }}
            onClick={() => navigate("/form")}
          >
            Create Profile
          </Button>

          {/* Articles Grid */}
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}>
            {articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                  <CardMedia component="img" height="180" image={article.image} alt={article.title} />
                  <CardContent sx={{ backgroundColor: "#1565c0", color: "white" }}>
                    <Typography variant="h6">{article.title}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {expanded[index] ? article.description : `${article.description.substring(0, 100)}...`}
                    </Typography>
                    <Button
                      sx={{ mt: 1, color: "white", textDecoration: "underline" }}
                      onClick={() => toggleReadMore(index)}
                    >
                      {expanded[index] ? "Show Less" : "Read More"}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* What We Provide Section */}
          <Box sx={{ mt: 5, textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{
                backgroundColor: "#1565c0",
                color: "white",
                display: "inline-block",
                padding: "8px 16px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              What we provide:
            </Typography>

            <Typography variant="body1" sx={{ mt: 2, color: "#121147" }}>
              CareerQuest is your comprehensive Career Guidance platform designed to help students make informed decisions about their future. Our step-by-step approach includes:
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "left", mt: 2, maxWidth: 800, mx: "auto", color: "#121147" }}>
              <b>1. Profile Creation:</b> Let us know more about yourself by creating your profile. <br />
              <b>2. Skills Assessment:</b> Take our specialized quiz to identify your strengths. <br />
              <b>3. Personalized Recommendations:</b> Receive tailored career and education suggestions. <br />
              <b>4. Resource Access:</b> Explore detailed information about educational institutions. <br />
              <b>5. Articles:</b> Get more and detailed information about everything by exploring articles.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default MergedSection;
