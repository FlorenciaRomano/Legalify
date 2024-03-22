import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Testimonial = ({ name, quote }) => (
  <Card sx={{ width: 250,
   height: 120,
    mx: 'auto',
    border:'gray',
     boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.6)',
     }} 
     className="testimonial-card">
    
    <CardContent>
      <Typography fontSize={12.8} fontFamily={'inherit'}>
        "{quote}"
      </Typography>
      <Typography color={'Blue'} variant="h5" component="h2" marginTop={2}>
        - {name}
      </Typography>
    </CardContent>
  </Card>
);

export default Testimonial;