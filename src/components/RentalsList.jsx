import React from 'react';
import testdata from '../data/testdata.json'
import RentalTile from './RentalTile';

export default function RentalsList() {

  const rentalData = testdata

  return (
    <div className='rentalsList'>
      <div className='rentalsList__container'>
        {rentalData.map(rental => (
          <RentalTile 
            id={rental.id}
            cover = {rental.cover}
            title = {rental.title}
          />
        ))}
      </div>
    </div>
  );
}
