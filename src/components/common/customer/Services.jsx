import React, { useState } from "react";
import { Box, Typography, Grid, Button, Card, CardContent, CardMedia } from "@mui/material";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import Header from "../customer/Navbar";
import Footer from "../customer/Footer";
import article1 from "../../../assets/auth/article4.png";
import article2 from "../../../assets/auth/article5.png";
import article3 from "../../../assets/auth/article6.png";
import blog1 from "../../../assets/auth/blog1.png";
import blog2 from "../../../assets/auth/blog2.png";
import blog3 from "../../../assets/auth/blog3.png";

const articles = [
    { image: article1, title: "Why Career Counselling is important in one's life?", text: "Career counseling plays a pivotal role in helping individuals make informed career choices, set realistic goals, and navigate an ever-changing job market. Career counselling plays a pivotal role in helping adolescents understand their interests, goals, talents and qualifications, especially in the face of an ever-changing employment landscape (Albien, 2018)." },
    { image: article2, title: "Increasing career readiness through career guidance", text: "Career guidance enhances career readiness by equipping students with essential skills, knowledge, and resources to make effective career decisions. measuring the impact with a validated measure Young people in England are experiencing lengthening transitions to the workplace, more complex transition pathways (Mann & Huddleston, Citation2017) and depressed wages (Gardiner & Gregg, Citation2017) " },
    { image: article3, title: "Exploring the effectiveness of the Career Guidance", text: "Studies have shown that structured career guidance programs significantly improve students' career decision-making skills and confidence. The National Association of Colleges and Employers (NACE) identified eight fundamental competencies vital for thriving in the labor market: career development, effective communication, critical thinking, equity, leadership, professionalism, teamwork, and technological skills. However, studies have revealed a gap between these skills and those of college graduates" }
  ];
  
  const blogs = [
    { image: blog1, title: "Career Counselling in India as per momentum and profession ", text: "Career counselling in India is gaining momentum as more students and professionals seek expert guidance to navigate their career paths effectively. Let's take a walk down the memory lane. Remember the first time you learned to ride a bicycle? Or the first time you cooked something by yourself? Well, it obviously wasn't easy, especially when there was nobody to guide you." },
    { image: blog2, title: "How to Convert Your Passion Into Profession and self-awareness ", text: "Turning passion into a profession requires self-awareness, skill development, and strategic career planning to achieve long-term success. If you don't love what you do, you won't do it with much conviction or passion.- By Mia Hamm, American soccer player, Two-Times Olympic Gold Medalist If you love what you do, it's a blessing." },
    { image: blog3, title: "How To Enlist Parents and Encourage Them in Career Selection Process", text: "Parental involvement in career selection can provide crucial support, helping students make informed and confident career choices. Parental influence has the most powerful impact on their children's choices, beliefs, attitudes, motivation, decision-making, career development paths, and many more. Mostly they develop all these attributes unconsciously as children and teenagers absorb their parents' attitudes and expectations. " }
  ];
  
  const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
  
    const toggleExpand = (index) => {
      setExpandedIndex(prevIndex => prevIndex === index ? null : index);
    };
  
    return (
      <Box sx={{ backgroundColor: "#92B4E2", color: "#1F3C88",minHeight:"100vh",display:"flex",flexDirection: "column" }}>
        <Box sx={{ flex:1 }}>
        <Box sx={{ textAlign: "center", py: 4, backgroundColor: "#004AAD", color: "white" }}>
          <Typography variant="h3" fontWeight="bold">Services</Typography>
        </Box>
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h4" fontWeight="bold">Articles</Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {articles.map((article, index) => (
            <Grid item key={index} md={3} sm={6} xs={12}>
              <Card sx={{ backgroundColor: "#1F3C88", color: "white", height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" image={article.image} alt={article.title} sx={{ height: 250, objectFit: "contain" }} />
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Box sx={{ minHeight: 100, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>{article.title}</Typography>
                    <Typography variant="body2" sx={{ textAlign: "justify" }}>
                      {expandedIndex === index ? article.text : article.text.split(" ").slice(0, 9).join(" ") + "..."}
                    </Typography>
                  </Box>
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: "#004AAD" }} onClick={() => toggleExpand(index)}>
                    {expandedIndex === index ? "Show Less" : "View Article"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h4" fontWeight="bold">Blogs</Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
          {blogs.map((blog, index) => (
            <Grid item key={index} md={3} sm={6} xs={12}>
              <Card sx={{ backgroundColor: "#1F3C88", color: "white", height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" image={blog.image} alt={blog.title} sx={{ height: 250, objectFit: "contain" }} />
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Box sx={{ minHeight: 100, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>{blog.title}</Typography>
                    <Typography variant="body2" sx={{ textAlign: "justify" }}>
                      {expandedIndex === `blog-${index}` ? blog.text : blog.text.split(" ").slice(0, 9).join(" ") + "..."}
                    </Typography>
                  </Box>
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: "#004AAD" }} onClick={() => toggleExpand(`blog-${index}`)}>
                    {expandedIndex === `blog-${index}` ? "Show Less" : "View Blog"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Box>
    );
  };
  
  export default Services;
  
