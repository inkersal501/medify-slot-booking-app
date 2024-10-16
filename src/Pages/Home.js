import React from 'react';
import Blog from '../components/Blog/Blog'; 
import Families from '../components/Families/Families';
import Faq from '../components/Faq/Faq'; 
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import OfferSlider from '../components/OfferSlider/OfferSlider';
import PatientCare from '../components/PatientCare/PatientCare';
import Search from '../components/Search/Search';
import Specialist from '../components/Specialist/Specialist';
import Specialization from '../components/Specialization/Specialization';

function Home() {
  return (
    <div>
     
        <Navbar /> 
        <Hero />
        <Search />
        <OfferSlider />
        <Specialization />
        <Specialist />
        <PatientCare />
        <Blog />
        <Families />
        <Faq />
        
    </div>
  )
}

export default Home