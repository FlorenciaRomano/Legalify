import React from 'react'
import '../styles/Index.css'
import Escena1 from '../assets/scenes04.svg'
import {Button} from 'bootstrap'
import { Box } from '@mui/material'

function Section2() {
  return (
    <Box sx={{display:{xs:'inline', md:'flex'}}} className='sectionDos'>
      <div className='imagenDos'>
        <img src={Escena1} alt='' srcset='' width={400} />
      </div>
      <Box sx={{display:{xs:'inline', md:'flex'}}} className='section2'>
        <h1>¿Qué es Legalify?</h1>

        <p>Es la única plataforma global de servicios profesionales especializados y calificados por los usuarios que vincula de manera transparente al profesional con su cliente.</p>
        <p>Legalify está al alcance de todos, sin barreras económicas, geográficas y sociales.</p>
      </Box>
    </Box>
  )
}
export default Section2
