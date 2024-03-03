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
        <a href="https://www.instagram.com/legalify.app/"><img src= {LogoIg} alt="instagram" /></a>
        <a href="https://www.facebook.com/legalify.ok"><img src={LogoFb} alt="instagram" /></a>
        <a href="https://www.linkedin.com/company/legalify-global/"><img src={LogoLi} alt="instagram" /></a>
       

    </div>

    </div>
    )
}
export default Footer