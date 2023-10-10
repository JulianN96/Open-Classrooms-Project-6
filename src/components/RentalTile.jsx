import React from 'react'
import { Link } from 'react-router-dom'

export default function RentalTile(rentalData) {
  return (
    <div className='rentalsList__container'>
{      rentalData.rentalData.map(rental => (
        <article key={rental.id} style={{backgroundImage: `url(${rental.cover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='rentalsList__tile'>
        <Link className='rentalsList__Link' to={`/rental/${rental.id}`} >
        <div className='rentalsList__tileGradient'>
            <h2 className='rentalsList__tileTitle' >{rental.title}</h2>
            </div>
        </Link>
        </article>))}
    </div>
  )
}
