import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBanner from './TopBanner'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='app'>
      <TopBanner />
        <Outlet />
      <Footer />
    </div>
  )
}
