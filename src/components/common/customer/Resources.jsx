import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../customer/Navbar';
import Footer from '../customer/Footer';
import schoolIcon from '../../../assets/auth/schoollogo.png';
import collegeIcon from '../../../assets/auth/collegelogo.png';
import courseIcon from '../../../assets/auth/courselogo.png';
import scholarshipIcon from '../../../assets/auth/scholarshiplogo.png';

const resources = [
  { title: 'School', text: 'Looking for a school based on your Preferences or Locality?', icon: schoolIcon, color: '#003366', link: '/Schooldirectory' },
  { title: 'College', text: 'Looking for a school based on your Preferences or Locality?', icon: collegeIcon, color: '#003366', link: '/Collegedirectory' },
  { title: 'Course', text: 'Want to achieve your goals in a determined field?', icon: courseIcon, color: '#003366', link: '/Coursedirectory' },
];

const additionalResources = [
  { title: 'School', text: 'Want to Check merit of your ideal School?', icon: schoolIcon, color: '#002855', link: '/Meritschool' },
  { title: 'College', text: 'Want to Check merit of your ideal College?', icon: collegeIcon, color: '#002855', link: '/Meritcollege' },
  { title: 'Scholarship', text: 'Get financial aid from your desired School/college', icon: scholarshipIcon, color: '#002855', link: '/Award' },
];

const CareerResources = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#B0D9F1', minHeight: '100vh', paddingBottom: '2rem', paddingTop: '3rem' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#005a9c', marginBottom: '1rem' }}>
            Career Resources
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {resources.map((resource, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ backgroundColor: resource.color, color: '#FFF', height: '270px', width: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                  <Box display="flex" justifyContent="center" mb={1} sx={{ backgroundColor: '#FFF', borderRadius: '50%', padding: '10px' }}>
                    <img src={resource.icon} alt={resource.title} style={{ width: '40px', height: '40px' }} />
                  </Box>
                  <Typography variant="h6" align="center" gutterBottom>{resource.title}</Typography>
                  <Typography variant="body2" align="center" gutterBottom>{resource.text}</Typography>
                  <Button variant="contained" sx={{ mt: 'auto', backgroundColor: '#b3e5fc', color: '#000' }} onClick={() => navigate(resource.link)}>
                    Explore Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box mt={5} textAlign="center">
            <Typography variant="h5" sx={{ color: '#005a9c', marginBottom: '1rem' }}>Additional Career Resources</Typography>
          </Box>
          <Grid container spacing={2} justifyContent="center" mt={1}>
            {additionalResources.map((resource, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ backgroundColor: resource.color, color: '#FFF', height: '270px', width: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                  <Box display="flex" justifyContent="center" mb={1} sx={{ backgroundColor: '#FFF', borderRadius: '50%', padding: '10px' }}>
                    <img src={resource.icon} alt={resource.title} style={{ width: '40px', height: '40px' }} />
                  </Box>
                  <Typography variant="h6" align="center" gutterBottom>{resource.title}</Typography>
                  <Typography variant="body2" align="center" gutterBottom>{resource.text}</Typography>
                  <Button variant="contained" sx={{ mt: 'auto', backgroundColor: '#b3e5fc', color: '#000' }} onClick={() => navigate(resource.link)}>
                    Explore Now
                  </Button>
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

export default CareerResources;