

// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { FiShoppingCart, FiHeart } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from './CartContext';
// import { useWishlist } from './WishlistContext';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const { wishlistItems } = useWishlist();
//     const { itemCount } = useCart(); // Access itemCount from the cart context
//     const handleButtonClick = () => {
//         navigate('/dashboard');
//     };

//     const location = useLocation(); // Get the current location

//     // Determine the navbar background color based on the current route
//     const navbarBgColor =
//         location.pathname === '/details' ||
//         location.pathname === '/dashboard' ||
//         location.pathname === '/stats'
//             ? 'bg-white text-purple-600' // White background for specific routes
//             : 'bg-purple-600 text-white'; // Purple background for all other routes

//     return (
//         <nav className='lg:px-8 px-2 py-4 m-8 rounded-lg shadow-md bg-purple-600' >
//             <div className={`flex items-center justify-between ${navbarBgColor}`}>
//                 <div className="lg:text-2xl text-sm font-bold">
//                     Gadget Heaven
//                 </div>

//                 <div className="flex space-x-8">
//                     <NavLink
//                         to="/"
//                         className={({ isActive }) =>
//                             isActive ? 'text-white font-semibold lg:text-xl text-sm ml-3' : 'hover:text-gray-300 lg:text-xl text-sm ml-3'
//                         }
//                     >
//                         Home
//                     </NavLink>
//                     <NavLink
//                         to="/statistics"
//                         className={({ isActive }) =>
//                             isActive ? 'text-white font-semibold lg:text-xl text-xs' : 'hover:text-gray-300 lg:text-xl text-xs'
//                         }
//                     >
//                         Statistics
//                     </NavLink>
//                     <NavLink
//                         to="/dashboard"
//                         className={({ isActive }) =>
//                             isActive ? 'text-white font-semibold lg:text-xl text-xs' : 'hover:text-gray-300 lg:text-xl text-xs'
//                         }
//                     >
//                         Dashboard
//                     </NavLink>
//                 </div>

//                 <div className="flex space-x-4">
//                     {/* Cart Icon with Badge */}
//                     <div className="relative">
//                         <button className="lg:w-10 lg:h-10 mt-2 lg:mt-0 ml-2 lg:ml-0 w-5 h-5 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-gray-200">
//                             <FiShoppingCart className='w-4' size={20} />
//                             {itemCount > 0 && (
//                                 <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
//                                     {itemCount}
//                                 </span>
//                             )}
//                         </button>
//                     </div>

//                     {/* Wishlist Icon */}
//                     <button className="lg:w-10 lg:h-10 mt-2 lg:mt-0 ml-2 lg:ml-0 w-5 h-5 bg-white rounded-full flex items-center justify-center text-purple-600 hover:bg-gray-200">
//                         <FiHeart className='w-4' size={20} />
//                     </button>
//                 </div>
//             </div>

//             {/* Banner Content */}
//             <div>
//                 <h2 className="text-4xl text-white font-extrabold mb-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
//                 <p className="text-lg text-white mb-8">
//                     Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
//                 </p>
//                 <button
//                     onClick={handleButtonClick}
//                     className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
//                 >
//                     Shop Now
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { itemCount } = useCart(); 
    const { wishlistItems } = useWishlist(); 
    const handleButtonClick = () => {
        navigate('/dashboard');
    };

    const location = useLocation(); 

    
    const navbarBgColor =
        location.pathname === '/details' ||
        location.pathname === '/dashboard' ||
        location.pathname === '/stats'
            ? 'bg-white text-purple-600' 
            : 'bg-purple-600 text-white'; 

    return (
        <nav className={`lg:px-8 px-2 py-4 m-8 rounded-lg shadow-md ${navbarBgColor}`}>
            <div className="flex items-center justify-between">
                <div className="lg:text-2xl text-sm font-bold">
                    Gadget Heaven
                </div>

                <div className="flex space-x-8">
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
                            isActive ? 'text-white font-semibold lg:text-xl text-xs' : 'hover:text-gray-300 lg:text-xl text-xs'
                        }
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? 'text-white font-semibold lg:text-xl text-xs' : 'hover:text-gray-300 lg:text-xl text-xs'
                        }
                    >
                        Dashboard
                    </NavLink>
                </div>

                <div className="flex space-x-4">
                  
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

            {/* Banner  */}
            <div>
                <h2 className="text-4xl text-white font-extrabold mb-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p className="text-lg text-white mb-8">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button
                    onClick={handleButtonClick}
                    className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
                >
                    Shop Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
