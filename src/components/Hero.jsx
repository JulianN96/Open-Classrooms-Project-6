import React from 'react'

export default function Hero(props) {
    console.log(props.background)
  return (
    <div className='homepage__hero'
        // style={{backgroundImage: `url(${props.background})`}}
    >
        <h1 className='homepage__heroTitle'>{props.text}</h1>        
    </div>
  )
}
