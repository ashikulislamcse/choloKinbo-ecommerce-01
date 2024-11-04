import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Services from '../Services'

const RootLayout = () => {
  return (
    <div>
      <>
      <Header/>
      <Outlet/>
      <Services/>
      <Footer/>
      </>
    </div>
  )
}

export default RootLayout
