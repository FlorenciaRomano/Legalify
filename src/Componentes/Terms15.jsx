import React from 'react'
import Item from '../assets/TerminosYcondiciones/Seccion15Item.png'
import Principal from '../assets/TerminosYcondiciones/Seccion15Derecha.png'
import {useMediaQuery} from '@mui/material'

const TermsCS15 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <div className='ContenedorGeneralS3'>
        <div className='ContenedorMedioS14'>
          <section className='Seccion3TC'>
            <div className='itemsP15'>
              <img src={Item} alt='' width={200} />
              <span>
                <p>Al aceptar esta Política, usted nos da su consentimiento:</p>
                <ul>
                  <li>Libre</li>
                  <li>Expreso</li>
                  <li>Inequívoco e informado.</li>
                </ul>
                <p>Esto con la finalidad de tratar sus datos personales de acuerdo con los fines expuestos anteriormente (artículo 4).</p>
              </span>
            </div>
          </section>
        </div>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad'>
            <img src={Principal} alt='' />
            <h2>CONSENTIMIENTO</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default TermsCS15
