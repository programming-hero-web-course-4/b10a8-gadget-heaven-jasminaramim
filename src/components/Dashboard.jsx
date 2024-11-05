
import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';

const Dashboard = () => {
    const { cartItems } = useCart(); // Access cart items from cart context
    const { wishlistItems } = useWishlist(); // Access wishlist items from wishlist context
    const [activeTab, setActiveTab] = useState("Cart"); // State to track active tab
    const [sortedCartItems, setSortedCartItems] = useState([...cartItems]); // State to manage sorted cart items

    // Calculate total price of cart items
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    // Sort cart items by price in descending order
    const sortByPrice = () => {
        const sortedItems = [...sortedCartItems].sort((a, b) => b.price - a.price);
        setSortedCartItems(sortedItems);
    };

    return (
        <div className="container mx-auto mt-8">
            {/* Tabs for Cart and Wish List */}
            <div className="flex space-x-4 mb-6">
                <button 
                    onClick={() => setActiveTab("Cart")} 
                    className={`px-4 py-2 ${activeTab === "Cart" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"} rounded`}
                >
                    Cart
                </button>
                <button 
                    onClick={() => setActiveTab("Wish List")} 
                    className={`px-4 py-2 ${activeTab === "Wish List" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"} rounded`}
                >
                    Wish List
                </button>
            </div>

            {/* Display Cart Items */}
            {activeTab === "Cart" && (
                <div>
                    <div className="flex justify-between mb-4">
                        <h2 className="lg:text-xl font-bold">Cart Items</h2>
                    <div className='flex justify-between gap-4'>
                    <div className=" lg:mt-2 lg:text-lg text-xs mt-2  font-bold">
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>
                        <button 
                            onClick={sortByPrice} 
                            className="bg-purple-500 text-white lg:text-xl lg:px-4 lg:py-2 text-xs p-1 rounded"
                        >
                            Sort by Price
                        </button>
                    </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {sortedCartItems.map((item) => (
                            <div key={item.product_id} className="border p-4 rounded-lg shadow">
                                <img src={item.product_image} alt={item.product_title} className="lg:w-full w-[300px] lg:h-32 lg:object-cover rounded" />
                                <h3 className="text-lg font-semibold mt-2">{item.product_title}</h3>
                                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                <p className="text-gray-500 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>
                 
                </div>
            )}

            {/* Display Wishlist Items */}
            {activeTab === "Wish List" && (
                <div>
                    <h2 className="text-xl font-bold mb-4">Wish List Items</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {wishlistItems.map((item) => (
                            <div key={item.product_id} className="border p-4 rounded-lg shadow">
                                <img src={item.product_image} alt={item.product_title} className="lg:w-full lg:h-32 lg:object-cover rounded" />
                                <h3 className="text-lg font-semibold mt-2">{item.product_title}</h3>
                                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                <p className="text-gray-500 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

