import React, {useEffect, useState} from 'react'
import {AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Select, FormControl, InputLabel} from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material'
import Logo from '../assets/logo_legalify_azul_transparente.png'
import LanguageIcon from '@mui/icons-material/Language'
import ENFlag from '../assets/Flags/ENFlag.webp'
import ESFlag from '../assets/Flags/ESFlag.webp'
import {Link, useLocation} from 'react-router-dom'
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

  useEffect(() => {
    if (location.pathname === '/blog') {
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
    <AppBar position='static'>
      <Toolbar>
        <div className='logo'>
          <IconButton edge='start' color='inherit'>
            <img src={Logo} alt='' srcset='' />
          </IconButton>
        </div>

        <div className='mainMenu'>
          {/* Main menu */}
          <Typography variant='h5' className={classes.title}>
            <Link to='/'>Home &nbsp;| &nbsp;</Link>
            {blog
              ? menuItems.map((item, index) => (
                  <Button key={index} color='inherit'>
                    {item.label}
                  </Button>
                ))
              : null}
            <Link to='/blog'>Blog</Link>
          </Typography>
        </div>

        <div className='grupoBotones'>
          {/* Login and Register buttons */}
          <Button color='inherit'>Iniciar sesión</Button>
          <Button color='inherit'>Registrarse</Button>

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
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
