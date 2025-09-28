import React from 'react';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        אולפן ווליום
      </Typography>
      <Typography variant="h5" align="center" color="secondary">
        הקלטות שירים, קריינות, ג'ינגלים ועוד
      </Typography>
    </Container>
  );
}

export default App;