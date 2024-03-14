import React from 'react';
import Item1 from '../assets/TerminosYcondiciones/Seccion12Item1.png'
import Item2 from '../assets/TerminosYcondiciones/SeccionItem2.png'
import Item3 from '../assets/TerminosYcondiciones/Seccion12Item3.png'
import Principal from '../assets/TerminosYcondiciones/Seccion12Derecha.png'


const TermsCS12 = () => {
    return (
        <>
            <div className='ContenedorGeneralS3'>


                <div className='ContenedorMedioS3'>


                    <section className='Seccion3TC'>
                        <div className='itemsS12'>
                            <img src={Item1} alt="" />
                            <img src={Item2} alt="" />
                            <img src={Item3} alt="" />

                        </div>
                        <div className='itemsP3'>
                            <span>
                                <h5>
                                    Derecho a controlar sus datos personales:
                                </h5>
                                <ul>
                                    <li>
                                        Acceso: Solicitar el acceso a su información que almacena Legalify.
                                    </li>
                                    <li>
                                        Rectificación: Si encuentra algún dato incorrecto o incompleto,
                                        puede pedirnos que lo corrijamos.
                                    </li>
                                    <li>
                                        Cancelación: Puede solicitar la eliminación de sus datos de nuestra
                                        base de datos.
                                    </li>
                                    <li>
                                        Oposición: Si sus datos están siendo utilizados para un fin no
                                        mencionado en este documento, puede oponerse a su uso.

                                    </li>
                                </ul>
                            </span>

                            <span>
                                <h5>
                                    Derecho a la portabilidad de sus datos personales:
                                </h5>
                                <p>

                                    Tiene derecho a solicitar la devolución de sus datos personales a Legalify o
                                    pedirnos que los transfiramos a otra empresa.
                                </p>
                            </span>

                            <span>
                                <h5>
                                    Derecho a limitar el tratamiento de sus datos personales:
                                </h5>
                                <ul>
                                    <li>
                                        Si cree que su información personal es inexacta y ha solicitado su verificación.
                                    </li>
                                    <li>
                                        Si el tratamiento de su información es ilegal y usted se ha opuesto a su eliminación,
                                        solicitando en su lugar que limitemos su uso.
                                    </li>
                                    <li>
                                        Si Legalify ya no necesita su información para fines de procesamiento, pero usted la necesita
                                        para ejercer o defender reclamaciones legales.
                                    </li>
                                    <li>
                                        Si usted se ha opuesto al tratamiento de su información personal basándose en el artículo 21,
                                        apartado 1, del GDPR. Verificaremos si nuestras razones para procesar sus datos prevalecen sobre sus objeciones.
                                    </li>
                                </ul>
                            </span>
                        </div>

                    </section>
                </div>

                <div className='PoliticaDePrivacidad'>
                    <img src={Principal} alt="" />
                    <h2>DERECHOS Y OPCIONES </h2>
                </div>

            </div>
        </>
    );
};

export default TermsCS12;