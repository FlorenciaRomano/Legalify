import React from 'react';
import Testimonial from './Testimonial';

const testimonialsData = [
  {
    name: 'Alejandra',
    quote: 'Pude conseguir casos que no habría conseguido si no fuera por Legalify.'
  },
  {
    name: 'Marcela',
    quote: 'He obtenido resultados muy rápidos con esta plataforma.'
  },
  {
    name: 'Alberto',
    quote: 'Logré solucionar un tema legal que me tenía muy preocupado.'
  }
];

const Testimonials = () => (
  
  <>
 
  <div className="testimonials">
    <div className='tituloTestimonials'>
    <h2>Testimonios</h2>
    </div>
    <div className='cardsTestimonials'>
    {testimonialsData.map(({ name, quote }, index) => (
      <Testimonial key={index} name={name} quote={quote} />
    ))}
  </div>
  </div>
  </>
);

export default Testimonials;