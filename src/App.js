import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutpage from './pages/about';
import NavigationBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
      <BrowserRouter className='px-0 mx-0'>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Aboutpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
