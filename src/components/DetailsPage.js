import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Box,
} from '@mui/material';
import { useCityData } from '../hooks/useCityData'; 

const DetailsPage = () => {
  const location = useLocation();
  const { city } = location.state;

  const { weather, images, loading } = useCityData(city);

  if (loading) {
    return (
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #74ebd5, #acb6e5)',
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        padding: '2rem 0',
      }}
    >
      <Container>
        <Typography
          variant="h3"
          gutterBottom
          style={{
            color: '#ffffff',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Details for {city}
        </Typography>

        {weather && (
          <Card
            style={{
              marginBottom: '2rem',
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Weather in {weather.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Temperature: {weather.main.temp}°C
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Weather: {weather.weather[0].description}
              </Typography>
            </CardContent>
          </Card>
        )}

        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: '#ffffff',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Images of {city}
        </Typography>

        <Grid container spacing={3}>
          {images.map((image) => (
            <Grid item key={image.id} xs={12} sm={6} md={4}>
              <Box
                component="img"
                src={image.webformatURL}
                alt={image.tags}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DetailsPage;