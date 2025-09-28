import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HomePage = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      background: 'linear-gradient(135deg, #f8b6d2, #ffd6a5)',
      borderRadius: 4,
      boxShadow: 3,
      p: 4,
      mt: 4,
    }}
  >
    <Typography variant="h2" color="primary" gutterBottom>
      אולפן ווליום
    </Typography>
    <Typography variant="h5" color="secondary" gutterBottom>
      הקלטות שירים, קריינות, ג'ינגלים ועוד
    </Typography>
    <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
      צור קשר
    </Button>
  </Box>
);

export default HomePage;