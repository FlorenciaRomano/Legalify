import React from 'react';
import '../styles/Index.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Tributo from './Tributo';

function Main() {
    return(
    <div className='main'>
 
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Tributo/>

    </div>
    )
}
export default Main