import React from 'react';

export default function Hero({ background, text }) {
  return (
    <div
      className='hero'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${background}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <h1 className='heroTitle'>{text}</h1>
    </div>
  );
}
