import React from 'react'
import Hero from '../components/Hero'
import RentalsList from '../components/RentalsList'
import backgroundImg from '../assets/images/IMG.avif';

export default function Home() {
  return (
    <div className="homepage">
      <Hero background={backgroundImg} text='Chez vous, partout et ailleurs'/>
      <RentalsList />
    </div>
  )
}
