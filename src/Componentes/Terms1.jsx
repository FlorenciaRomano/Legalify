import React from 'react'
import '../styles/Index.css'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import {useTranslation, withTranslation, Trans} from 'react-i18next'
import {Typography} from '@mui/material'

function TermCS1() {
  const {t, i18n} = useTranslation()

  return (
    <div>
      <div className='TermCS1'>
        <img src={LogoTC} alt='' width={250} />
        <Typography variant='h2' component='h2' align='center'>
          <Trans i18nKey='title' />
        </Typography>
      </div>
    </div>
  )
}
export default TermCS1
