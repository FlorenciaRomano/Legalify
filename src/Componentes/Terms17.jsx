import React from 'react'
import Item from '../assets/TerminosYcondiciones/Seccion17Derecha.png'
import {useMediaQuery} from '@mui/material'

const TermsCS17 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <div className='ContenedorGeneralS3'>
        <div className='ContenedorMedioS14'>
          <section className='Seccion3TC'>
            <div className='itemsP15'>
              <img src={Item} alt='' width={250} />
              <span>
                <p>Si tiene alguna pregunta sobre esta Política, escríbanos a la siguiente dirección de correo electrónico: info@legalify.app </p>
              </span>
            </div>
          </section>
        </div>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad'>
            <h2>CONTACTO</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default TermsCS17
