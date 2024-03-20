import React from 'react';
import Item1 from '../assets/TerminosYcondiciones/Seccion13Item1.png'
import Item2 from '../assets/TerminosYcondiciones/Seccion13Item2.png'
import Principal from '../assets/TerminosYcondiciones/Seccion12Derecha.png'


const TermsCS13 = () => {
    return (
        <>
            <div className='ContenedorGeneralS3'>


                <div className='ContenedorMedioS3'>


                    <section className='Seccion3TC'>
                        <div className='itemsS13'>
                            <img src={Item1} alt="" />
                            <img src={Item2} alt="" />
                           

                        </div>
                        <div className='itemsP3'>
                            <span>
                                <h5>
                                    Derecho a la protección contra las decisiones automatizadas:
                                </h5>
                                <p>
                                    Tiene derecho a no ser objeto de decisiones basadas únicamente en
                                     un tratamiento automatizado que le afecten de forma significativa, 
                                     incluida la elaboración de perfiles. Sin embargo, tenga en cuenta que 
                                     si usted consintió expresamente dicho tratamiento al aceptar esta política,
                                      este derecho puede no ser aplicable.
                                </p>

                            </span>

                            <span>
                                <h5>
                                Derecho de recurso ante la Autoridad de Protección de Datos Personales de su país:
                                </h5>
                                <p>
                                Si cree que Legalify está gestionando mal tu información personal, tienes derecho a 
                                ponerte en contacto con la autoridad responsable de la protección de datos en tu país.
                                 Antes de hacerlo, le recomendamos que comparta con nosotros sus preocupaciones o 
                                 problemas, escribiendo a: 
                                </p>
                            </span>


                        </div>

                    </section>
                </div>

                <div className='PoliticaDePrivacidadS10'>
                    <img src={Principal} alt="" width={200} />
                    <h2>DERECHOS Y OPCIONES </h2>
                </div>

            </div>
        </>
    );
};

export default TermsCS13;