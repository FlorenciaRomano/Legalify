import React from 'react'
import '../styles/Index.css'
import Escena1 from '../assets/scenes04.svg'
import PasoAPaso from './PasoAPaso'
import {useMediaQuery} from '@mui/material'
import StepCarousel from './stepbystepCarousel'

function Section3() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className='sectionTres'>
      <div className='section3'>
        <h1>¿Cómo usar Legalify?</h1>
      </div>
      <div className='pasoAPaso'>{isMobile ? <StepCarousel /> : <PasoAPaso />}</div>
    </div>
  )
}
export default Section3
