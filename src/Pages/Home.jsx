import React from 'react'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import SelfPresentation from '../Component/SelfPresentation'
import Service from '../Component/Service'

const Home = () => {
  return (
      <div>
          <Navbar />
          <Banner />
          <SelfPresentation />
          <Service/>
    </div>
  )
}

export default Home