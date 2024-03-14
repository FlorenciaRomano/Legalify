import React from 'react'
import {useTranslation, Trans} from 'react-i18next'
import {Box, Typography} from '@mui/material'
import Logo from '../assets/TerminosYcondiciones/LegalifyLogo.png'
import item1 from '../assets/TerminosYcondiciones/s8i1.png'
import item2 from '../assets/TerminosYcondiciones/linkicon.png'
import item3 from '../assets/TerminosYcondiciones/mediaicon.png'
import item4 from '../assets/TerminosYcondiciones/NotificationIcon.png'

export default function TermsCS10() {
  const {t, i18n} = useTranslation()
  return (
    <Box sx={{mt: 4, display: 'flex', width: '90%', ml: 4, justifyContent: 'center'}}>
      <Box>
        <Box mt={4} sx={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
          <img src={item1} width={150} alt='item1' />
          <img src={item2} width={150} alt='item2' />
          <img src={item3} width={150} alt='item3' />
        </Box>
        <Box  sx={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Box mt={4} width='70%' textAlign='justify'>
            <Trans i18nKey='terms10.description' />
          </Box>
          <Box width='70%' textAlign='justify' sx={{display: 'flex', flexDirection: 'column'}}>
            <img src={Logo} width={130} alt={<Trans i18nKey='terms10.item1' />} />
            <Trans i18nKey='terms10.item1' />
          </Box>
          <Box display={'flex'} justifyContent={'center'} mt={8}>
            <img src={item4} width={130} alt={<Trans i18nKey='terms10.item1' />} />
            <Box textAlign='justify' width='60%'>
              <Trans i18nKey='terms10.item2' />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='PoliticaDePrivacidad'>
        <h2>
          <Trans i18nKey='terms8.blue' />
        </h2>
      </Box>
    </Box>
  )
}
