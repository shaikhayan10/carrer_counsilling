import React from 'react';
import { Container, Grid, Card, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
      {/* Prevent horizontal scrolling */}
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            width: 100%;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>

      <Box
        sx={{
          backgroundColor: '#B0D9F1',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: '4rem', // Adjusted spacing below header
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" align="center" gutterBottom sx={{ color: '#005a9c', mb: 4 }}>
            Career Resources
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {resources.map((resource, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: resource.color,
                    color: '#FFF',
                    height: '270px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ backgroundColor: '#FFF', borderRadius: '50%', padding: '10px', mb: 1 }}>
                    <img src={resource.icon} alt={resource.title} style={{ width: '40px', height: '40px' }} />
                  </Box>
                  <Typography variant="h6">{resource.title}</Typography>
                  <Typography variant="body2">{resource.text}</Typography>
                  <Button variant="contained" sx={{ mt: 'auto', backgroundColor: '#b3e5fc', color: '#000' }} onClick={() => navigate(resource.link)}>
                    Explore Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Added extra space between Additional Career Resources and footer */}
          <Box mt={8} mb={4} textAlign="center">
            <Typography variant="h4" sx={{ color: '#005a9c', mb: 2 }}>
              Additional Career Resources
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center" mb={10}>
            {additionalResources.map((resource, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: resource.color,
                    color: '#FFF',
                    height: '270px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ backgroundColor: '#FFF', borderRadius: '50%', padding: '10px', mb: 1 }}>
                    <img src={resource.icon} alt={resource.title} style={{ width: '40px', height: '40px' }} />
                  </Box>
                  <Typography variant="h6">{resource.title}</Typography>
                  <Typography variant="body2">{resource.text}</Typography>
                  <Button variant="contained" sx={{ mt: 'auto', backgroundColor: '#b3e5fc', color: '#000' }} onClick={() => navigate(resource.link)}>
                    Explore Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CareerResources;
