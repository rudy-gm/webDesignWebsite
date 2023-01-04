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
import Footer from './components/Footer';



const App = () => {
  return (
<BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='gallery' element={<Portfolio></Portfolio>}></Route>
      <Route path='plans' element={<Services></Services>}></Route>
      <Route path='trainers' element={<Trainers></Trainers>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>


</BrowserRouter>
  )
}

export default App