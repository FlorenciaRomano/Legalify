import React, {useEffect, useState} from 'react'
import {AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Select, useMediaQuery, Box, InputLabel, FormControl, Avatar} from '@mui/material'
import Logo from '../assets/logo_legalify_azul_transparente.png'
import LanguageIcon from '@mui/icons-material/Language'
import ENFlag from '../assets/Flags/ENFlag.webp'
import ESFlag from '../assets/Flags/ESFlag.webp'
import {Link, useLocation} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import {useTranslation} from 'react-i18next'

const useStyles = (theme) => ({
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
})

const Navbar = () => {
  const {t, i18n} = useTranslation()
  const classes = useStyles()
  const [blog, setBlog] = useState(true)
  // States for the language menu
  const [languageMenu, setLanguageMenu] = React.useState(null)
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width: 768px)')
  useEffect(() => {
    if (location.pathname === '/blog' || location.pathname === '/terms') {
      setBlog(false)
    } else {
      setBlog(true)
    }
  }, [location.pathname])

  const handleLanguageClick = (event) => {
    setLanguageMenu(event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  const handleLanguageClose = () => {
    setLanguageMenu(null)
  }

  // List of menu items
  const menuItems = [
    {label: 'Servicios', path: '/services'},
    {label: 'Nosotros', path: '/about-us'},
    {label: 'Contacto', path: '/contact'},
  ]

  return (
    <Toolbar sx={{width: {xs: '100vw', md: '100%'}}}>
      <div className='logo'>
        <IconButton edge='start' sx={{border:'none'}}>
          <img src={Logo} alt='' srcset='' />
        </IconButton>
      </div>

      {isMobile ? (
        <FormControl sx={{width: 100}}>
          <InputLabel>Opciones </InputLabel>
          <Select>
            <MenuItem>
              {/* Main menu */}
              <Typography variant='h5' sx={{display: 'flex',
               color: 'black',
                flexDirection: 'column',
                fontSize:'30px',
                 alignItems: 'center'}} 
                 className={classes.title}>
                <Link to='/'>Home &nbsp;</Link>
                {blog
                  ? menuItems.map((item, index) => (
                      <Button  key={index} color='inherit'>
                        {item.label}
                        
                      </Button>
                    ))
                  : null}
                <Box sx={{display: 'flex', flexDirection: 'column'}} className='grupoBotones'>
                  {/* Login and Register buttons */}
                  <Button color='inherit' sx={{
                    background:'white'
                  }}>
                    Iniciar sesión</Button>
                  <Button color='inherit'>Registrarse</Button>

                  {/* Language menu */}

                  <Link to='/blog'>Blog</Link>
                  <Select labelId='language-select-label' defaultValue='es' onChange={handleLanguageClick} sx={{border:'none'}}>
                    <MenuItem className='flagsNames widthMenu' value='en' sx={{border:'none'}}>
                      <img src={ENFlag} alt='English' />
                    </MenuItem>
                    <MenuItem className='flagsNames widthMenu' value='es'>
                      <img src={ESFlag} alt='Español' />
                    </MenuItem>
                  </Select>
                </Box>
              </Typography>
            </MenuItem>
          </Select>
        </FormControl>
      ) : (
        <>
          <div className='mainMenu'>
            {/* Main menu */}
            <Typography variant='h5' className={classes.title}>
              <Link to='/'>Home &nbsp;| &nbsp;</Link>
              {blog
                ? menuItems.map((item, index) => (
                    <Button key={index} color='inherit' >
                      {item.label}
                    </Button>
                  ))
                : null}
              <Link to='/blog'>Blog</Link>
            </Typography>
          </div>

          <div className='grupoBotones'>
            {/* Login and Register buttons */}
            <Button color='inherit' sx={{background:'#05325a', color:'white'}}>Iniciar sesión</Button>
            &nbsp;  &nbsp;
            <Button color='inherit' sx={{background:'white', color:'black'}}>Registrarse</Button>

            {/* Language menu */}

            <Select labelId='language-select-label' defaultValue='es' onChange={handleLanguageClick}>
              <MenuItem className='flagsNames widthMenu' value='en'>
                <img src={ENFlag} alt='English' />
              </MenuItem>
              <MenuItem className='flagsNames widthMenu' value='es'>
                <img src={ESFlag} alt='Español' />
              </MenuItem>
            </Select>
          </div>
        </>
      )}
    </Toolbar>
  )
}

export default Navbar
