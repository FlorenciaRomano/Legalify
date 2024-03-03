import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pasos from '../pasoAPaso'

export default function PasoAPaso() {
  return (
    <>
    {Pasos?.map((e)=>(

    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          image={e.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {e.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
