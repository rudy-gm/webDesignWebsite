import React from 'react';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import NotFound from './pages/notFound/notFound';
import Portfolio from './pages/portfolio-gallery/portfolio';
import Services from './pages/services-plans/services';
import Trainers from './pages/trainers/trainers';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
<BrowserRouter>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Contact></Contact>
    <NotFound></NotFound>
    <Portfolio></Portfolio>
    <Services></Services>
    <Trainers></Trainers>


</BrowserRouter>
  )
}

export default App