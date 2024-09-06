import React from 'react'; // Ensure React is imported

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';

import './App.css';
import './index.css';
import Home from'./page/Home';
import Navbar from'./Component/Navbar';
import Allproduct from './page/Allproduct';
import Mobile from './page/Mobiles';
import Electronics from './page/Electronic';
import Kitchen from './page/Kitchen';
import Laptop from './page/Laptop';
import Bike from './page/Bike';
import Sports from './page/Sports';

import Footer from './Component/Footer';
import Signin from './page/Signin';
import Return from './page/Return';
import Cart from './page/Cart';
function App() { 
  return (
    <BrowserRouter>
    <Navbar />
    <useCart>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/allproduct" element={<Allproduct/>}/>
      <Route path="/mobile" element={<Mobile/>}/>
      <Route path="/electronics" element={<Electronics/>}/>
      <Route path="/kitchen" element={<Kitchen/>}/>
      <Route path="/laptop" element={<Laptop/>}/>
      <Route path="/bike" element={<Bike/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/return" element={<Return/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </useCart>
    <Footer />
  </BrowserRouter>


  );
}

export default App;
