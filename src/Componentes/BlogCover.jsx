import React from 'react';
import PortadaBlog from '../assets/portadaBlog.jpg'
import { useState, useEffect } from 'react';

const BlogCover = () => {
  const [displayText, setDisplayText] = useState('');
  const text = 'Legalify Blog';
  const delay = 200; // Delay between each letter in milliseconds

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayText.length < text.length) {
        setDisplayText(displayText + text[displayText.length]);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText]);



  return (
  
    <div className='portadaBlog' style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${PortadaBlog})`,
      backgroundSize: 'cover',
      height: '500px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '3rem',
      fontWeight: 'bold',
      zIndex: -1,
    }}>

        
      <h1 style={{
        fontSize:'80px',
        border: '2px solid black',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
        padding: '5px',
      }}>{displayText}</h1>
    </div>
    
  );
}; 

export default BlogCover;