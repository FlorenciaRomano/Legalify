import React from 'react'
import {useTranslation, Trans} from 'react-i18next'
import {Box, useMediaQuery} from '@mui/material'
import Principal from '../assets/TerminosYcondiciones/section7.png'
import icon from '../assets/TerminosYcondiciones/iIcon7.png'

export default function TermsCS7() {
  const isMobile = useMediaQuery('(max-width: 1200px)')

  const {t} = useTranslation()
  return (
    <Box sx={{display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      width:'50%',
       height:{md:'60vh'}}}>
        
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
        <Box className='PoliticaDePrivacidad' sx={{
          display:'flex',
          height:'40vh',
          width:'15%'
        }
        }>
          <img src={Principal} width={100} alt={<Trans i18nKey='terms7.blue' />} />
          <h2>
            <Trans i18nKey='terms7.blue' />
          </h2>
        </Box>
      )}
    </Box>
  )
}
