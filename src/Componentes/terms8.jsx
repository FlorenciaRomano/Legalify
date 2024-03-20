import React from 'react'
import {useTranslation, Trans} from 'react-i18next'
import {Box, Typography} from '@mui/material'
import Principal from '../assets/TerminosYcondiciones/section8.png'
import Logo from '../assets/TerminosYcondiciones/LegalifyLogo.png'
import item1 from '../assets/TerminosYcondiciones/s8i1.png'
import item2 from '../assets/TerminosYcondiciones/s8i2.png'
import item3 from '../assets/TerminosYcondiciones/s8i3.png'
import item4 from '../assets/TerminosYcondiciones/s8i4.png'

export default function TermsCS8() {
  const {t, i18n} = useTranslation()
  return (
    <Box sx={{mt: 4, display: 'flex',
     justifyContent: 'space-evenly'}}>
      <Box sx={{width:'77vw'}} >
        <Box>
          <img src={Logo} width={130} alt={<Trans i18nKey='terms8.item1' />} />
        </Box>
        <Box sx={{width: '90%'}}>
          <Typography variant='p'>
            <Trans i18nKey='terms8.description' />
          </Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Box sx={{mt:4}} >
            <img src={item1} width={100} alt={<Trans i18nKey='terms8.item1' />} />
            <Typography variant='p'>
              <Trans i18nKey='terms8.item1' />
            </Typography>
          </Box>
          <Box sx={{mt:4}} >
            <img src={item2} width={100} alt={<Trans i18nKey='terms8.item2' />} />
            <Typography variant='p'>
              <Trans i18nKey='terms8.item2' />
            </Typography>
          </Box>
          <Box sx={{mt:4}} >
            <img src={item3} width={100} alt={<Trans i18nKey='terms8.item3' />} />
            <Typography variant='p'>
              <Trans i18nKey='terms8.item3' />
            </Typography>
          </Box>
          <Box sx={{mt:4}} >
            <img src={item4} width={100} alt={<Trans i18nKey='terms8.item4' />} />
            <Typography variant='p'>
              <Trans i18nKey='terms8.item4' />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className='PoliticaDePrivacidadS8'>
        <img src={Principal} width={149} alt={<Trans i18nKey='terms7.blue' />} />
        <h2>
          <Trans i18nKey='terms8.blue' />
        </h2>
      </Box>
    </Box>
  )
}
