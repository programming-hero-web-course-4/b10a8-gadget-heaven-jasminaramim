
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats';
import Home from './components/Home';
import Details from './components/Details';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from './components/WishlistContext';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/Banner';

const AppRoutes = () => {
    const location = useLocation();

    return (
        <>
            
            {location.pathname === '/' && <Banner />}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <>
                            <Helmet>
                                <title>Home - Gadget Heaven</title>
                                <link rel="icon" href="https://raw.githubusercontent.com/ProgrammingHero1/B10-A8-gadget-heaven/refs/heads/main/assets/favicon-16x16.png" />
                            </Helmet>
                            <Home />
                        </>
                    } 
                />
                <Route 
                    path="/details/:id" 
                    element={
                        <>
                            <Helmet>
                                <title>Details - Gadget Heaven</title>
                                <link rel="icon" href="https://raw.githubusercontent.com/ProgrammingHero1/B10-A8-gadget-heaven/refs/heads/main/assets/favicon-16x16.png" />
                            </Helmet>
                            <Details />
                        </>
                    } 
                />
                <Route 
                    path="/dashboard" 
                    element={
                        <>
                            <Helmet>
                                <title>Dashboard - Gadget Heaven</title>
                                <link rel="icon" href="https://raw.githubusercontent.com/ProgrammingHero1/B10-A8-gadget-heaven/refs/heads/main/assets/favicon-16x16.png" />
                            </Helmet>
                            <Dashboard />
                        </>
                    } 
                />
                <Route 
                    path="/stats" 
                    element={
                        <>
                            <Helmet>
                                <title>Stats - Gadget Heaven</title>
                                <link rel="icon" href="https://raw.githubusercontent.com/ProgrammingHero1/B10-A8-gadget-heaven/refs/heads/main/assets/favicon-16x16.png" />
                            </Helmet>
                            <Stats />
                        </>
                    } 
                />
                <Route 
                    path="*" 
                    element={
                        <>
                            <Helmet>
                                <title>404 - Page Not Found</title>
                                <link rel="icon" href="https://raw.githubusercontent.com/ProgrammingHero1/B10-A8-gadget-heaven/refs/heads/main/assets/favicon-16x16.png" />
                            </Helmet>
                            <NotFound />
                        </>
                    } 
                />
            </Routes>
        </>
    );
};

const App = () => {
    return (
        <HelmetProvider>
            <WishlistProvider>
                <CartProvider>
                    <Router>
                        <Navbar />
                        <AppRoutes />
                    </Router>
                </CartProvider>
            </WishlistProvider>
        </HelmetProvider>
    );
};

export default App;
