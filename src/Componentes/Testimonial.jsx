import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Testimonial = ({ name, quote }) => (
  <Card sx={{ width: 250,
   height: 120,
    mx: 'auto',
     boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.6)',
     background: 'linear-gradient(135deg, #f5f5f5 0%, #d3d3d3 100%)',}} 
     className="testimonial-card">
    
    <CardContent>
      <Typography fontSize={12}>
        "{quote}"
      </Typography>
      <Typography variant="h5" component="h2" marginTop={2}>
        - {name}
      </Typography>
    </CardContent>
  </Card>
);

export default Testimonial;