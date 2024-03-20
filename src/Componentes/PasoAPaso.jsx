import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Pasos from '../pasoAPaso'

export default function PasoAPaso() {
  return (
    <>
    {Pasos?.map((e)=>(

    <Card sx={{ maxWidth: 200,
      mx: 'auto',
      boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.6)',
      background: 'linear-gradient(135deg, #f5f5f5 0%, #d3d3d3 100%)',
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={e.img}
          alt={e.nombre}
         sx={{display:'flex',
         flexDirection:'column',
         flexWrap:'wrap'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {e.nombre}
          </Typography>
          <Typography variant="body2" color="black">
            {e.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    ))}
    </>
    

    
  );
}
