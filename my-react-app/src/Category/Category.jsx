import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import SideBar from '../Component/SideBar/SideBar'
import Booking from '../Component/Booking/Booking'
import PopularCars from '../Component/PopularCars/PopularCars'
import RecommendationCars from '../Component/RecommendationCars/RecommendationCars'
import Footer from '../Component/Footer/Footer'

const card = () => {
  return (
    <>
    <Navbar />
    <SideBar />
    <div className='drop'>
    <Booking />
    <PopularCars />
    <RecommendationCars />
    </div>
    <Footer />
    </>
  )
}

export default card

