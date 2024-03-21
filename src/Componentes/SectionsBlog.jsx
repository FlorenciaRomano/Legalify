import * as React from 'react';
import { Container } from '@mui/material';
import Sections from '../SectionsBlog';
import Typography from '@material-ui/core/Typography';
import LeerMas from './BotonLeerMas';

export default function SectionsBlog() {
  return (
    <>
    {Sections?.map((e)=>(

<Container  sx={{
     display:{xs:'inline', md:'flex'},
     flexWrap:'wrap',
     flexDirection:'column',
     marginLeft:'10px',
     width:'80%',
     height:{md:'270px', xs:'unset'},
     gap:'2rem',
     boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.6)',
     background: 'linear-gradient(135deg, #f5f5f5 0%, #d3d3d3 100%)',}} >
   

    <React.Fragment >
       <Typography variant="h2">
        {e.title}
      </Typography>
      <Typography variant="h6">
        {e.date} / {e.author} {e.comments} COMMENTS
      </Typography>
      <Typography variant="body1">
        {e.content}
      </Typography>
    </React.Fragment>
    <LeerMas/>
</Container>

    ))}
    </>
    

    
  );
}

    // <Container className={classes.container}>
    //   {sections.map((section, index) => (
    //     <React.Fragment key={index}>
    //       <Typography variant="h1" className={classes.title}>
    //         {section.title}
    //       </Typography>
    //       <Typography variant="body1" className={classes.text}>
    //         {section.date} / {section.author} {section.comments} COMMENTS
    //       </Typography>
    //       <Typography variant="body1" className={classes.text}>
    //         {section.content}
    //       </Typography>
    //     </React.Fragment>
    //   ))}
    // </Container>
  

  


