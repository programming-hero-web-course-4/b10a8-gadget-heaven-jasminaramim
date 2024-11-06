
import { HashRouter as Router, Route, Routes } from 'react-router-dom';  

import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats';
import Home from './components/Home';
import Details from './components/Details';
import AboutUs from './components/AboutUs';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from './components/WishlistContext';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/Banner';
import Footer from '../Footer';
import CategoryPage from './CategoryPage';

const AppRoutes = () => {
    return (
        <>
        {location.pathname === '/' && <Banner />}
        {/* //             <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} /> */}
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
                            <Banner />
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
                    path="/about-us"
                    element={
                        <>
                            <Helmet>
                                <title>About Us - Gadget Heaven</title>
                                <link rel="icon" href="https://raw.githubusercontent.com/ProgrammingHero1/B10-A8-gadget-heaven/refs/heads/main/assets/favicon-16x16.png" />
                            </Helmet>
                            <AboutUs />
                        </>
                    }
                />
                <Route
                    path="/home/:category"
                    element={
                        <>
                            <Helmet>
                                <link rel="icon" href="https://raw.githubusercontent.com/ProgrammingHero1/B10-A8-gadget-heaven/refs/heads/main/assets/favicon-16x16.png" />
                            </Helmet>
                            <CategoryPage />
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
                        {location.pathname === '/' && <Banner />}
                        {/* {window.location.pathname === '#/' && <Banner />} */}
                        <AppRoutes />
                        <Footer />
                    </Router>
                </CartProvider>
            </WishlistProvider>
        </HelmetProvider>
    );
};

export default App;
