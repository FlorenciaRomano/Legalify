import React, {Component} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import Pasos from '../pasoAPaso'
import {Box} from '@mui/material'

export default function StepCarousel() {
  return (
    <Box width={'50vw'}>
      <Carousel>
        {Pasos.map((step) => (
          <div>
            <img src={step.img} />
            <p className='legend'>{step.descripcion}</p>
            
          </div>
        ))}
      </Carousel>
    </Box>
  )
}
