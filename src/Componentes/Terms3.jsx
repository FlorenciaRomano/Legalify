import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Item1 from '../assets/TerminosYcondiciones/Seccion3Item1.png'
import Item2 from '../assets/TerminosYcondiciones/Seccion3Item2.png'
import Item3 from '../assets/TerminosYcondiciones/Seccion3Item3.png'
import Principal from '../assets/TerminosYcondiciones/Seccion3Derecha.png'
import { useMediaQuery } from '@mui/material'

const TermsCS3 = () => {
  const isMobile = useMediaQuery('(max-width: 480px)')

  return (
    <>
      <div className='ContenedorGeneralS3'>
        <div className='ContenedorMedioS3'>
          <div className='legalify-section__content3'>
            <img src={LogoTC} alt='' width={100} />
            <h4>Recoge información personal de usted, el usuario, en tres momentos: </h4>
          </div>
          <section className='Seccion3TC'>
            <div className='itemsS3'>
              <img src={Item1} alt='' />
              <img src={Item2} alt='' />
              <img src={Item3} alt='' />
            </div>
            <div className='itemsP3'>
              <p>Al momento del registro en la plataforma, se recoje información de: Clientes y asesores jurídicos.</p>

              <p> Despues del registro,también se recoje información de: Clientes y asesores juridicos.</p>

              <p>
                Finalmente, también se recopila información personal que usted nos proporciona voluntariamente cuando se pone en contacto con nosotros a través de:
                <ul>
                  <li>Correo electrónico</li>

                  <li>A través de la herramienta Whatsapp de nuestra plataforma</li>
                </ul>
              </p>
            </div>
          </section>
        </div>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidadS3'>
            <img src={Principal} alt='' width={150} />
            <h2>¿QUE INFORMACION RECOPILAMOS?</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default TermsCS3
