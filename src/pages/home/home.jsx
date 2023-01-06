import MainHeader from '../../components/MainHeader';
import React from 'react'
import Programs from '../../components/Programs';
import './home.css';
import Values from '../../components/Values';
import FAQs from '../../components/FAQs';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';
import MenuBar from '../../components/MenuBar';

const Home = () => {
  return (
    <>
    <MainHeader></MainHeader>
      <Programs></Programs>
      <Values></Values>
      <FAQs></FAQs>
      <Testimonials></Testimonials>
      <MenuBar></MenuBar>
      {/* <Footer></Footer> */}
    </>
  )
}

export default Home