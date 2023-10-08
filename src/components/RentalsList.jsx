import React from 'react';
import { Link } from 'react-router-dom';
import testdata from '../data/testdata.json'

export default function RentalsList() {

  const rentalData = testdata

  const rentals = rentalData.map(rental => (
  <article key={rental.id} style={{backgroundImage: `url(${rental.cover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='rentalsList__tile'>
   <Link className='rentalsList__Link' to={`/rental/${rental.id}`} >
   <div className='rentalsList__tileGradient'>
      <h2 className='rentalsList__tileTitle' >{rental.title}</h2>
    </div>
   </Link>
  </article>
  ))

  return (
    <div className='rentalsList'>
      <div className='rentalsList__container'>
        {rentals}
        {/* {rentals[0]}
        {rentals[1]}
        {rentals[2]}
        {rentals[3]}
        {rentals[4]}
        {rentals[5]} */}
      </div>
    </div>
  );
}
