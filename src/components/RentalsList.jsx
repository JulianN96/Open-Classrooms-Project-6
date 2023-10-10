import React from 'react';
import testdata from '../data/testdata.json'
import RentalTile from './RentalTile';

export default function RentalsList() {

  const rentalData = testdata

  return (
    <div className='rentalsList'>
        <RentalTile rentalData = {rentalData}/>
    </div>
  );
}
