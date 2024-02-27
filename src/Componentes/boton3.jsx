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
import CheckIcon from '@mui/icons-material/Check';





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
  
  export default function Boton3() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const Abogado = () => {
      setOpen(false);
    };
    
  
    return (
      <div className='boton3'>
        
       
        <Button variant="outlined" color="primary" startIcon={<PersonIcon/>} onClick={handleClickOpen}>
        ABOGADO
        </Button>
        <Dialog onClose={Abogado } aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={Abogado }>
          ¿Eres abogado? Descubre nuestros planes y alcanza tus objetivos profesionales
          </DialogTitle>
          <DialogContent dividers>
            <Typography className='MuiTypography-rootPrincipal' gutterBottom>
              <h5>PREMIUM $7532/Mensual *Mas iva</h5>
            </Typography>
            <Typography gutterBottom>
           <CheckIcon className='checkIcon'/> 14 días sin cargo
            </Typography>
            <Typography gutterBottom>
           <CheckIcon className='checkIcon' /> Mensual ＄ 7532 / Anual ＄ 75320
            </Typography>
            <Typography gutterBottom>
           <CheckIcon className='checkIcon' /> 3 especialidades / 2 jurisdicciones
            </Typography>
            <Typography gutterBottom>
           <CheckIcon className='checkIcon' /> Agenda de reuniones / Llamadas de emergencia
            </Typography>
            <Button id='MuiButtonBase-root' className='contratar' autoFocus onClick={Abogado} color="primary">
            CONTRATAR
            </Button>
          </DialogContent>
  

          <DialogContent dividers>
            <Typography className='MuiTypography-rootPrincipal' gutterBottom>
              <h5>CORPORATIVO $14250 Mensual *Mas iva</h5>
            </Typography>
            <Typography gutterBottom>
           <CheckIcon className='checkIcon' /> 14 días sin cargo
            </Typography>
            <Typography gutterBottom>
           <CheckIcon className='checkIcon' /> Mensual ＄ 14.250 / Anual ＄ 142.500
            </Typography>
            <Typography gutterBottom>
           <CheckIcon className='checkIcon' /> Sin límite de especialidades / Sin límite de jurisdicciones
            </Typography>
            <Typography gutterBottom>
           <CheckIcon className='checkIcon' /> Agenda de reuniones / Llamadas de emergencia
            </Typography>
            <Button id='MuiButtonBase-root' className='contratar' autoFocus onClick={Abogado} color="primary">
            CONTRATAR
            </Button>
          </DialogContent>
          
        </Dialog>
        
      </div>
     
    );
  }
       
       


       
       