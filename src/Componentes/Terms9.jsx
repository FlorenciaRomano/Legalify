import React from 'react'
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Sec9Logo1 from '../assets/TerminosYcondiciones/Seccion9Logo1.png'
import Sec9Logo2 from '../assets/TerminosYcondiciones/Seccion9Logo2.png'
import Sec9Logo3 from '../assets/TerminosYcondiciones/Seccion9Logo3.png'
import Item1 from '../assets/TerminosYcondiciones/Seccion9Item1.png'
import {useMediaQuery} from '@mui/material'

const TermsCS9 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <div className='ContenedorGeneralS9'>
        <div className='ContenedorMedioS6'>
          <div className='legalify-section__content9'>
            <img src={Sec9Logo1} alt='' width={100} />
            <img src={Sec9Logo2} alt='' width={100} />
            <img src={Sec9Logo3} alt='' width={100} />
          </div>

          <section className='Seccion9TC'>
            <div className='itemsS9s'>
              <img src={Item1} alt='' />
            </div>

            <div className='itemsP9'>
              <p>Nuestros servicios contienen enlaces a otras plataformas. Además, puede utilizar su cuenta preexistente de "Facebook", "Google" o "LinkedIn" para iniciar sesión fácilmente en nuestro sitio web.</p>

              <span>
                <img src={LogoTC} alt='' width={150} />
                <p>no controla estos sitios web y no es responsable de su contenido, políticas de privacidad, medidas de seguridad, o cómo utilizan su información personal.</p>
              </span>
              <p>Tenga en cuenta que estas plataformas y redes sociales pueden recopilar su información, lo cual está fuera del control de Legalify. Cualquier información que usted les proporcione está sujeta a sus políticas de privacidad, no a las de Legalify. Por lo tanto, le recomendamos que lea detenidamente las condiciones de uso y las políticas de privacidad de dichos terceros.</p>
            </div>
          </section>
        </div>
        {isMobile ? null : (
          <div className='PoliticaDePrivacidad'>
            <h2>INFORMACIÓN RECOPILADA POR OTRAS PLATAFORMAS Y REDES SOCIALES </h2>
          </div>
        )}
      </div>
    </>
  )
}

export default TermsCS9
