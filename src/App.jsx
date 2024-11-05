
import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats';
import Home from './components/Home';
import Details from './components/Details';
import { CartProvider } from './components/CartContext'; 
import { WishlistProvider } from './components/WishlistContext';
import NotFound from './NotFound';

const App = () => {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
};



export default App;
