import React from 'react';

export default function Hero(props) {
  return (
    <div
      className='hero'
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(${props.background}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <h1 className='heroTitle'>{props.text}</h1>
    </div>
  );
}
