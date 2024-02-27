import React from 'react';
import '../styles/Index.css';
import LogoIg from '../assets/instagramIcon.svg'
import LogoFb from '../assets/facebookIcon.svg'
import LogoLi from '../assets/linkedinIcon.svg'



function Footer() {
    return(
    <div className='footer'>
    
    <div className='marca'>
    <p>LEGALIFY ES UNA MARCA REGISTRADA DE LEGALIFY SAS 2020</p>
    </div>
    
    <div className='iconos'>
        <img src={LogoIg} alt="instagram" />
        <img src={LogoFb} alt="instagram" />
        <img src={LogoLi} alt="instagram" />
       

    </div>

    </div>
    )
}
export default Footer