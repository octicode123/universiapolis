import React from 'react';
import { Box, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <Box
    component="footer"
    className="bg-dark text-white text-center py-3 fixed-bottom"
    sx={{
      zIndex: 1000, // Ensure the footer stays above other content
    }}
  >
    <Typography variant="body1" component="p" className="mb-0">
      &copy; 2024 React Application
    </Typography>
  </Box>
);

export default Footer;