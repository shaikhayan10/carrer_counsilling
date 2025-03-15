import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar, Container } from "@mui/material";
import { Star, Security, Lightbulb, Groups, Accessibility, Person } from "@mui/icons-material";
import Navbar from "../customer/Navbar";
import Footer from "../customer/Footer";
import aboutImage from "../../../assets/auth/about.png"; // Ensure correct path to image

const statsData = [
  { value: "1M+", label: "Daily Users" },
  { value: "150+", label: "Countries" },
  { value: "10K+", label: "Schools & Colleges" },
];

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Student, Delhi",
    review: "CareerQuest helped me discover my passion for data science. The assessment identified my strengths, and the resources they provided guided me to the perfect college program.",
    initials: "RK",
  },
  {
    name: "Meera Sharma",
    role: "Parent, Mumbai",
    review: "As a parent,I was struggling to guide my daughter on her career path.CareerQuest provided objective insights and excellent resources that helped us make an informed decision about her future.",
    initials: "MS",
  },
  {
    name: "Ananya Patel",
    role: "Student, Bangalore",
    review: "The career assessment quiz was eye-opening. It helped me understand my strengths and interests in a way I never had before. Now I'm pursuing a field I'm truly passionate about.",
    initials: "AP",
  },
];

const leadershipTeam = [
  {
    name: "Ayan Shaikh",
    role: "Backend Developer",
    description:
      "Focus on building robust, scalable, and efficient systems that power applications. Wrestle with data, APIs, and server logic, ensuring seamless functionality and a smooth user experience.",
  },
  {
    name: "Abrar Kachhawala",
    role: "Frontend Developer",
    description:
      "Craft the user's first impression. Translate designs into interactive, engaging web experiences, focusing on clean code and seamless functionality.",
  },
  {
    name: "Ayaz Sorathiya",
    role: "Database Manager",
    description:
      "Design, implement, and maintain robust database systems, ensuring data integrity, security, and availability. Optimize queries, and troubleshoot performance issues.",
  },
];

const coreValues = [
  {
    title: "Integrity",
    description: "We provide honest guidance based on data and research, not on current trends or commissions.",
    icon: <Security fontSize="large" />,
  },
  {
    title: "Personalization",
    description: "We recognize that each student is unique, with individual strengths, interests, and aspirations.",
    icon: <Groups fontSize="large" />,
  },
  {
    title: "Innovation",
    description: "We continuously improve our assessment tools and resources to reflect the evolving career landscape.",
    icon: <Lightbulb fontSize="large" />,
  },
  {
    title: "Accessibility",
    description: "We make quality career guidance available to all students regardless of their background or location.",
    icon: <Accessibility fontSize="large" />,
  },
];

const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      {/* About Us Section */}
      <Box sx={{ backgroundColor: "#cfe8fc", py: 5 }}>
        <Container>
          <Typography variant="h3" textAlign="center" fontWeight="bold" sx={{ color: "#003366", mb: 2 }}>
            About CareerQuest
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ color: "#121147", mb: 3 }}>
            Your trusted partner in career guidance and educational planning.
          </Typography>

          {/* Mission Section */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#003366" }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ color: "#121147", mt: 2 }}>
                At CareerQuest, we believe every student deserves access to personalized, high-quality career guidance.
                Our mission is to empower young minds to make informed decisions about their academic and professional futures.
              </Typography>
              <Typography variant="body1" sx={{ color: "#121147", mt: 2 }}>
                Through our comprehensive assessment tools, extensive resource database, and expert guidance,
                we help students discover paths that align with their unique abilities, interests, and aspirations.
              </Typography>
              <Box sx={{ backgroundColor: "#0057B3", color: "white", p: 2, borderRadius: 2, textAlign: "center", mt: 3 }}>
                <Typography variant="body1" fontWeight="bold">
                    Trusted by Students and Parents Worldwide  
                </Typography>
                <Typography variant="body1">
                    for Expert guidance and Resources
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="img" src={aboutImage} alt="About Us" sx={{ width: "100%", borderRadius: 2 }} />
            </Grid>
          </Grid>

          {/* Statistics Section */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 13 }}>
            <Grid container spacing={2} justifyContent="right">
              {statsData.map((stat, index) => (
                <Grid item xs={12} sm={1.98} key={index}>
                  <Box sx={{ backgroundColor: "#1565c0", color: "white", p: 2, borderRadius: 2, textAlign: "center" }}>
                    <Typography variant="h5" fontWeight="bold">{stat.value}</Typography>
                    <Typography variant="body2">{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Testimonials Section */}
          <Typography variant="h5" textAlign="center" fontWeight="bold" sx={{ color: "#003366", mt: 5, mb: 3 }}>
            What Our Users Say
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {testimonials.map((user, index) => (
              <Grid item xs={12} sm={4} key={index} sx={{mb:13}}>
                <Card sx={{ backgroundColor: "#1565c0", color: "white", p: 2, borderRadius: 2 }}>
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "left", mb: 1 }}>
                      {[...Array(5)].map((_, i) => <Star key={i} sx={{ color: "gold" }} />)}
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2 }}>{user.review}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar sx={{ bgcolor: "#003366" }}>{user.initials}</Avatar>
                      <Box>
                        <Typography variant="body2" fontWeight="bold">{user.name}</Typography>
                        <Typography variant="caption">{user.role}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Leadership Team Section */}
          <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ color: "#003366", mt: 5, mb: 3 }}>
            Our Leadership Team
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {leadershipTeam.map((leader, index) => (
              <Grid item xs={12} sm={4} key={index} sx={{mb:13}}>
                <Card sx={{ backgroundColor: "#1565c0", color: "white", p: 2, borderRadius: 2, textAlign: "center" }}>
                  <CardContent>
                    <Avatar sx={{ bgcolor: "white", color: "#1565c0", mx: "auto", mb: 2 }}>
                      <Person fontSize="large" />
                    </Avatar>
                    <Typography variant="h6" fontWeight="bold">{leader.name}</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic", mb: 1 }}>{leader.role}</Typography>
                    <Typography variant="body2">{leader.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Core Values Section - After Leadership Team */}
          <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ color: "#003366", mt: 5, mb: 3 }}>
            Our Core Values
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={3} key={index} sx={{mb:13}}>
                <Card sx={{ backgroundColor: "#1565c0", color: "white", p: 2, borderRadius: 2, textAlign: "center" }}>
                  <CardContent>{value.icon}
                    <Typography variant="h6" fontWeight="bold">{value.title}</Typography>
                    <Typography variant="body2">{value.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default AboutUsPage;
