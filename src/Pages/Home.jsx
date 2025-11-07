import React from 'react'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import SelfPresentation from '../Component/SelfPresentation'
import Service from '../Component/Service'
import Project from '../Component/Project'
import Testimonial from '../Component/Testimonial'
import DesignProcess from '../Component/DesignProcess'
import Contact from '../Component/Contact'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SelfPresentation />
      <Service />
      <Project />
      <DesignProcess/>
      <Testimonial />
      <Contact/>
    </div>
  );
}

export default Home