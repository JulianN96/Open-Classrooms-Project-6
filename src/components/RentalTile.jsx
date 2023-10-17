import React from 'react'
import { Link } from 'react-router-dom'

export default function RentalTile({id, cover, title}) {
  return (
        <article key={id} style={{backgroundImage: `url(${cover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='rentalsList__tile'>
          <Link className='rentalsList__Link' to={`/rental/${id}`} >
          <div className='rentalsList__tileGradient'>
              <h2 className='rentalsList__tileTitle' >{title}</h2>
              </div>
          </Link>
        </article>
  )
}
