import React from 'react'
import Hero from '../components/Hero'
import RentalsList from '../components/RentalsList'

export default function Home() {
  return (
    <div className="homepage">
      <Hero background='/src/assets/images/IMG.avif' text='Chez vous, partout et ailleurs'/>
      <RentalsList />
    </div>
  )
}
