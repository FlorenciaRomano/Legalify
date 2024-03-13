import React from 'react';
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import img1 from '../assets/TerminosYcondiciones/ImagenS2.png'
import Info from '../assets/TerminosYcondiciones/info.png'
import Candado from '../assets/TerminosYcondiciones/candado.png'
import PoliticaDePrivacidad from '../assets/TerminosYcondiciones/PoliticaDePrivacidad.png'

const TermsCS2 = () => {
    return (
        <>
            <section className="legalify-section">
                <div className="legalify-section__content">
                    <h4 className="legalify-section__title">Bienvenido a Legalify</h4>
                    <img src={LogoTC} alt="" width={100} />
                </div>
            </section>

            <div  className='img1'>
            <img src={img1} alt="" width={200}/>
            </div>

           

            <section className='Seccion1TC'>
                <div>
                    <img src={Info} alt="" />
                    <img src={Candado} alt="" />

                </div>
                <div>
                <p>
                    Es una plataforma digital que pone en contacto a personas que necesitan asesoramiento
                    jurídico (los "clientes") con abogados especializados que pueden proporcionar dicho
                    asesoramiento (los "asesores jurídicos").
                </p>
                  
                <p> Para prestar adecuadamente este servicio, necesitamos recabar información personal de
                    nuestros clientes y asesores jurídicos (los "usuarios").
                </p>

                <p>
                    Nos preocupamos por la privacidad y seguridad de su información. Por eso hemos creado esta
                    política de privacidad (la "política"). En ella se explica de forma transparente y
                    comprensible qué información recogemos, cómo la recogemos y por qué la recogemos.
                    Esta política sigue todas las leyes aplicables, incluido el Reglamento General Europeo
                    de Protección de Datos (RGPD).
                </p>
                </div>

                <div className='PoliticaDePrivacidad'>
                    <img src={PoliticaDePrivacidad} alt="" />
                    <h2>POLITICA DE PRIVACIDAD</h2>
                </div>
            </section>
           
        </>
    );
};

export default TermsCS2;