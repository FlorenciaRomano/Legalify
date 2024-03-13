import React from 'react';
import LogoTC from '../assets/logo_legalify_azul_transparente.png'
import Item1 from '../assets/TerminosYcondiciones/Seccion5Item1.png'
import Principal from '../assets/TerminosYcondiciones/Seccion5Derecha.png'



const TermsCS5 = () => {
    return (
        <>
            <div className='ContenedorGeneralS5'>


                <div className='ContenedorMedioS5'>

                    <div className="legalify-section__content3">
                      
                        <h4>Recogemos y tratamos sus datos personales basándonos en: </h4>
                    </div>


                    <section className='Seccion3TC'>
                        <div className='itemsS5'>
                          
                            <img src={Item1} alt="" />
                            <img src={LogoTC} alt="" />

                        </div>
                        <div className='itemsP5'>
                            <p>
                            En el consentimiento de los clientes. 
                            </p>

                            <p> 
                            Los intereses legítimos de Legalify, que no prevalecen sobre sus 
                            derechos de privacidad.
                            </p>

                        </div>

                    </section>
                </div>

                <div className='PoliticaDePrivacidad'>
                    <img src={Principal} alt=""  width={200}/>
                    <h2>¿CUÁL ES LA BASE JURÍDICA QUE JUSTIFICA EL 
                        TRATAMIENTO DE SUS DATOS PERSONALES?</h2>
                </div>

            </div>
        </>
    );
};

export default TermsCS5;