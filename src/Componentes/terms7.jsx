import React from 'react'
import {useTranslation, Trans} from 'react-i18next'
import {Box, Typography, useMediaQuery} from '@mui/material'
import Principal from '../assets/TerminosYcondiciones/section7.png'
import icon from '../assets/TerminosYcondiciones/iIcon7.png'

export default function TermsCS7() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const {t, i18n} = useTranslation()
  return (
    <Box sx={{display: 'flex', width: '96%', justifyContent: 'center', height:{md:'100vh'}}}>
      <Box>
        <Box sx={{mt: 4}}>
          {t('terms7.ls1', {returnObjects: true}).map((item, index) => (
            <div className='textListSec4' key={index}>
              <img src={icon} alt={item} width={50} /> {item}
            </div>
          ))}
        </Box>
      </Box>
      {isMobile ? null : (
        <Box className='PoliticaDePrivacidad'>
          <img src={Principal} width={130} alt={<Trans i18nKey='terms7.blue' />} />
          <h2>
            <Trans i18nKey='terms7.blue' />
          </h2>
        </Box>
      )}
    </Box>
  )
}
