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

    <Card sx={{ maxWidth: 150,
      mx: 'auto',
      boxShadow: '0px 5px 7px ',
      background: 'linear-gradient(100deg, white 0%, white 80%)'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={e.img}
          alt={e.nombre}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {e.nombre}
          </Typography>
          <Typography variant="body2" color="black">
            {e.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    ))}
    </>
    

    
  );
}
