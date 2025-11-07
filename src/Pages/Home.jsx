import React from 'react'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import SelfPresentation from '../Component/SelfPresentation'
import Service from '../Component/Service'
import Project from '../Component/Project'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SelfPresentation />
      <Service />
      <Project/>
    </div>
  );
}

export default Home