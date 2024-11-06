
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import Banner from './Banner';

const Navbar = () => {
    const navigate = useNavigate();
    const { itemCount } = useCart(); 
    const { wishlistItems } = useWishlist(); 
    const location = useLocation(); 

    const isHomePage = location.pathname === '/';
    const isCategoryPage = location.pathname.startsWith('/home/');

    const navbarBgColor = isHomePage || isCategoryPage ? 'bg-purple-600 text-white' : 'bg-white text-purple-600';

    return (
        <nav className={`lg:px-8 px-2 py-4 m-8 h-[560px] rounded-lg ${navbarBgColor}`}>
            <div className="flex items-center justify-between">
                <div className="lg:text-2xl text-sm font-bold">
                    Gadget Heaven
                </div>

                <div className="flex space-x-3 lg:space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-white font-semibold lg:text-xl text-sm ml-3' : 'hover:text-gray-300 lg:text-xl text-sm ml-3'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive }) =>
                            isActive ? 'text-purple-600 font-semibold lg:text-xl text-xs' : 'hover:text-gray-300 lg:text-xl text-xs'
                        }
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? 'text-purple-600 font-semibold lg:text-xl text-xs' : 'hover:text-gray-300 lg:text-xl text-xs'
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            isActive ? 'text-purple-600 font-semibold lg:text-xl text-xs' : 'hover:text-gray-300 lg:text-xl text-xs'
                        }
                    >
                        About Us
                    </NavLink>
                </div>

                <div className="flex lg:space-x-4">
                    <div className="relative">
                        <button className="lg:w-10 lg:h-10 mt-2 lg:mt-0 ml-2 lg:ml-0 w-5 h-5 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-gray-200">
                            <FiShoppingCart className='w-4' size={20} />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                    </div>

                    <div className="relative">
                        <button className="lg:w-10 lg:h-10 mt-2 lg:mt-0 ml-2 lg:ml-0 w-5 h-5 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-gray-200">
                            <FiHeart className='w-4' size={20} />
                            {wishlistItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
                                    {wishlistItems.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

         
            {/* {(isHomePage || isCategoryPage) && <Banner />} */}
            <Banner></Banner>
        </nav>
    );
};

export default Navbar;

