import React from 'react'
import Item1 from '../assets/TerminosYcondiciones/Seccion11Item2.png'
import Principal from '../assets/TerminosYcondiciones/Seccion13Derecha.png'

const TermsCS14 = () => {
  return (
    <>
      <div className='ContenedorGeneralS14'>
        <div className='ContenedorMedioS14'>
          <section className='Seccion3TC'>
            <div className='itemsS11'>
              <img src={Item1} width={80} alt='' />
              <img src={Item1} width={80} alt='' />
              <img src={Item1} width={80} alt='' />
            </div>
            <div className='itemsP14'>
              <p>No podremos ofrecerle los servicios prestados en nuestro sitio web.</p>

              <p>No podrá utilizar nuestro sitio web ni acceder a sus funciones.</p>

              <p>No podremos responder a sus preguntas, preocupaciones o quejas.</p>
            </div>
          </section>
        </div>

        <div className='PoliticaDePrivacidadS10'>
          <img src={Principal} alt='' />
          <h2>¿QUÉ CONSECUENCIAS TIENE NEGARNOS EL ACCESO A SUS DATOS PERSONALES? </h2>
        </div>
      </div>
    </>
  )
}

export default TermsCS14
