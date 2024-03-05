import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from '../assets/logo_legalify_azul_transparente.png'
import LanguageIcon from '@mui/icons-material/Language';

const useStyles = ((theme) => ({
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    
  },
}));


const Navbar = () => {
  const classes = useStyles();

  // States for the language menu
  const [languageMenu, setLanguageMenu] = React.useState(null);

  const handleLanguageClick = (event) => {
    setLanguageMenu(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageMenu(null);
  };

  const handleLanguageSelect = (language) => {
    // Handle language selection logic here
    handleLanguageClose();
  };

  // List of menu items
  const menuItems = [
    { label: 'Home', path: '#' },
    { label: 'Servicios', path: '/services' },
    { label: 'Nosotros', path: '/about-us' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contacto', path: '/contact' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
       
      <div className='logo'>
        <IconButton edge="start" color="inherit">
        <img src={Logo} alt="" srcset="" />
        </IconButton>
       
      </div>
       
       <div className='mainMenu'>
        {/* Main menu */}
        <Typography variant="h5" className={classes.title}>
          {menuItems.map((item, index) => (
            <Button key={index} color="inherit" href={item.path}>
              {item.label}
            </Button>
          ))}
        </Typography>
        </div>

        <div className='grupoBotones'>
        {/* Login and Register buttons */}
        <Button color="inherit">Iniciar sesión</Button>
        <Button color="inherit">Registrarse</Button>


 {/* Language menu */}
      
        <FormControl>
          
          <Select
            labelId="language-select-label"
            id="language-select"
            value="react"
            onClick={handleLanguageClick}
            MenuProps={{
              anchorEl: languageMenu,
              open: Boolean(languageMenu),
              onClose: handleLanguageClose,
            }}
          >
            <MenuItem value="react" onClick={() => handleLanguageSelect('react')}>
              <LanguageIcon/>
            </MenuItem>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="spanish">Español</MenuItem>
          </Select>
        </FormControl>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
