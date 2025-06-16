import { useState } from 'react'
import Booking from "./Component/Booking/Booking";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero"
import Title from "./Component/Title/Title"
import PopularCars from "./Component/PopularCars/PopularCars"
import RecommendationCars from "./Component/RecommendationCars/RecommendationCars"
import SideBar from "./Component/SideBar/SideBar";


function App() {
  return (
    <>
      <Navbar />
        <div className='container'>
          <Hero />
          <Booking />
          <Title Title='Popular Cars' />
          <PopularCars />
          <Title Title='Recommendation Cars' />
          <RecommendationCars />
        </div>
    </>
  );
}

export default App;
