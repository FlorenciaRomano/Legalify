import React from 'react'
import {useTranslation, Trans} from 'react-i18next'
import {Box, Typography, useMediaQuery} from '@mui/material'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Principal from '../assets/TerminosYcondiciones/dataBase.png'
import contentImg from '../assets/TerminosYcondiciones/section4.png'

export default function TermsCS4() {
  const {t, i18n} = useTranslation()
  const isMobile = useMediaQuery('(max-width: 1200px)')

  return (
    <Box sx={{display: 'flex',
     ml: 4, 
     justifyContent: 'center',
     gap:'12rem'}}>
      <Box>
        {isMobile ? (
          <>
            <Box>
              <Box sx={{height: 300, width:'95vw'}}>
                <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                  <Trans i18nKey='terms4.t1' />
                </Typography>
                <img src={contentImg} alt='Organización de datos' width={350} />
              </Box>
              
            </Box>
            <Box>
              <ul>
                {t('terms4.ls1', {returnObjects: true}).map((item, index) => (
                  <li className='textListSec4' key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
            <Box sx={{mt: 2}}>
              <ul>
                {t('terms4.ls2', {returnObjects: true}).map((item, index) => (
                  <li className='textListSec4' key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
            <Box sx={{height: 300}}>
                <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                  <Trans i18nKey='terms4.t2' />
                </Typography>
                <img src={contentImg} alt='Organización de datos' width={350} />
              </Box>
            <Box sx={{mt: 4}}>
              <ul>
                {t('terms4.ls3', {returnObjects: true}).map((item, index) => (
                  <li className='textListSec4' key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
            <Box sx={{mt: 4}}>
              <ul>
                {t('terms4.ls4', {returnObjects: true}).map((item, index) => (
                  <li className='textListSec4' key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
          </>
        ) : (
          <>
            <Box>
              <Box sx={{height: 300}}>
                <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                  <Trans i18nKey='terms4.t1' />
                </Typography>
                <img src={contentImg} alt='Organización de datos' width={400} />
              </Box>
              <Box sx={{height: 300}}>
                <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                  <Trans i18nKey='terms4.t2' />
                </Typography>
                <img src={contentImg} alt='Organización de datos' width={400} />
              </Box>
            </Box>
            <Box>
              <ul>
                {t('terms4.ls1', {returnObjects: true}).map((item, index) => (
                  <li className='textListSec4' key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
            <Box sx={{mt: 2}}>
              <ul>
                {t('terms4.ls2', {returnObjects: true}).map((item, index) => (
                  <li className='textListSec4' key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
            <Box sx={{mt: 4}}>
              <ul>
                {t('terms4.ls3', {returnObjects: true}).map((item, index) => (
                  <li className='textListSec4' key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
            <Box sx={{mt: 4}}>
              <ul>
                {t('terms4.ls4', {returnObjects: true}).map((item, index) => (
                  <li className='textListSec4' key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
          </>
        )}
      </Box>
      {isMobile ? null : (
        <Box className='PoliticaDePrivacidad4'>
          <img src={Principal} alt='' width={150} />
          <Typography variant='h2' />
          <h2>
            <Trans i18nKey='terms4.blue' />
          </h2>
        </Box>
      )}
    </Box>
  )
}
