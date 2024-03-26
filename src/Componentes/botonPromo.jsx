import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation() {
  return (
    <Button variant="contained" disableElevation sx={{background:'#05325a', fontSize:'1.8rem'}}>
      QUIERO LA PROMO
    </Button>
  );
}