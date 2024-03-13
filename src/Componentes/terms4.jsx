import React from 'react'
import {useTranslation, withTranslation, Trans} from 'react-i18next'
import {Box, Container, Typography} from '@mui/material'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Principal from '../assets/TerminosYcondiciones/Seccion3Derecha.png'

export default function TermsCS4() {
  const {t, i18n} = useTranslation()
  return (
    <>
      <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <div>
          <Box sx={{height:300}} >
            <Trans i18nKey='terms4.t1' />
            <img src={LogoTC} alt='' width={100} />
            <img src={LogoTC} alt='' width={100} />
            <img src={LogoTC} alt='' width={100} />
            <img src={LogoTC} alt='' width={100} />
            <img src={LogoTC} alt='' width={100} />
          </Box>
          <Box sx={{height:300}} >
            <Trans i18nKey='terms4.t2' />
            <img src={LogoTC} alt='' width={100} />
            <img src={LogoTC} alt='' width={100} />
            <img src={LogoTC} alt='' width={100} />
            <img src={LogoTC} alt='' width={100} />
            <img src={LogoTC} alt='' width={100} />
          </Box>
        </div>
        <Box>
          <div>
            <ul>
              {t('terms4.ls1', {returnObjects: true}).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {t('terms4.ls2', {returnObjects: true}).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {t('terms4.ls3', {returnObjects: true}).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {t('terms4.ls4', {returnObjects: true}).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Box>
        <div className='PoliticaDePrivacidad'>
          <img src={Principal} alt='' />
          <Typography variant='h2'>
            <Trans i18nKey='terms4.blue' />
          </Typography>
        </div>
      </Box>
    </>
  )
}
