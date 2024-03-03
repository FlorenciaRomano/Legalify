import React from 'react';
import '../styles/Index.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Boton2 from './boton2';
import Boton3 from './boton3';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import PromocionAbogados from './PromocionAbogados';


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  
  export default function Section4() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const Particular = () => {
      setOpen(false);
    };
    
  
    return (
      <div className='Seccion3'>
            
        <h1 className='tituloS3'>Encuentra a tu abogado especializado hoy</h1>
        <p>Selecciona que tipo de ente sos:</p>
        
        <div className='botonesS3'>
        <Button variant="outlined" color="primary" startIcon={<PersonIcon/>} onClick={handleClickOpen}>
        PARTICULAR
        </Button>
        <Dialog onClose={Particular } aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={Particular }>
          PERSONA PARICULAR
          </DialogTitle>
          <DialogContent dividers>
            <Typography className='MuiTypography-rootPrincipal' gutterBottom>
              <h5>Encontra tu abogado GRATIS</h5>
            </Typography>
            <Typography gutterBottom>
           <CheckIcon className='checkIcon' /> Algoritmo de búsqueda optimizado
            </Typography>
            <Typography gutterBottom>
              <ClearIcon  className='clearIcon' /> Agenda una reunión en el horario que te resulte conveniente
            </Typography>
            <Typography gutterBottom>
              <ClearIcon className='clearIcon' /> Puedes evacuar tus primeras dudas y recibir la propuesta 
              profesional en la primer reunión. Acceso al perfil del abogado antes de 
              fijar la cita
            </Typography>
            <Typography gutterBottom>
              <ClearIcon className='clearIcon' /> Contacto inmediato en caso de emergencia
            </Typography>
            <Button id='MuiButtonBase-root' className='contratar' autoFocus onClick={Particular} color="primary">
            CONTRATAR
            </Button>
          </DialogContent>
  

          <DialogContent dividers>
            <Typography className='MuiTypography-rootPrincipal' gutterBottom>
              <h5>REUNION VIRTUAL $3000</h5>
            </Typography>
            <Typography gutterBottom>
           <CheckIcon  className='checkIcon' /> Algoritmo de búsqueda optimizado
            </Typography>
            <Typography gutterBottom>
           <CheckIcon   className='checkIcon' /> Agenda una reunión en el horario que te resulte conveniente
            </Typography>
            <Typography gutterBottom>
           <CheckIcon  className='checkIcon' /> Puedes evacuar tus primeras dudas y recibir la propuesta
            profesional en la primer reunión. Acceso al perfil del abogado antes de fijar la cita
            </Typography>
            <Typography gutterBottom>
              <ClearIcon className='clearIcon' /> Contacto inmediato en caso de emergencia
            </Typography>
            <Button id='MuiButtonBase-root' className='contratar' autoFocus onClick={Particular} color="primary">
            CONTRATAR
            </Button>
          </DialogContent>

          <DialogContent dividers>
            <Typography className='MuiTypography-rootPrincipal' gutterBottom>
              <h5> LLAMADAS DE EMERGENCIA $6000</h5>
            </Typography>
            <Typography gutterBottom>
           <CheckIcon  className='checkIcon' /> Algoritmo de búsqueda optimizado
            </Typography>
            <Typography gutterBottom>
           <CheckIcon  className='checkIcon' /> Agenda una reunión en el horario que te resulte conveniente
            </Typography>
            <Typography gutterBottom>
           <CheckIcon  className='checkIcon' /> Puedes evacuar tus primeras dudas y recibir la propuesta
            profesional en la primer reunión. Acceso al perfil del abogado antes de fijar la cita
            </Typography>
            <Typography gutterBottom>
              <CheckIcon  className='checkIcon' /> Contacto inmediato en caso de emergencia
            </Typography>
            <Button id='MuiButtonBase-root' className='contratar' autoFocus onClick={Particular} color="primary">
            CONTRATAR
            </Button>
          </DialogContent>
         

          
        </Dialog>
        
      <Boton2/>
      <Boton3/>
      
      </div>
      <PromocionAbogados/>
      </div>
    );
  }
       
       


       
       