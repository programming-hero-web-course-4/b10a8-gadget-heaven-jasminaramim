
import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { useNavigate } from 'react-router-dom';
import CongratulationsModal from './CongratulationsModal';
import { ToastContainer, toast } from 'react-toastify';
import { FiX } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const { cartItems, clearCart, removeItemFromCart } = useCart();
    const { wishlistItems } = useWishlist();
    const [activeTab, setActiveTab] = useState("Cart");
    const [sortedCartItems, setSortedCartItems] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    useEffect(() => {
        setSortedCartItems(cartItems);
    }, [cartItems]);

    const sortByPrice = () => {
        const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
        setSortedCartItems(sortedItems);
    };

    const handlePurchase = () => {
        clearCart();
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        navigate('/');
    };

    const handleDeleteItem = (itemId) => {
        removeItemFromCart(itemId);
        toast.success('Item removed from cart');
    };

    return (
        <div className="container mx-auto mt-8">
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
            <div className='relative p-8 h-[400px] w-full -my-[500px] mb-20 bg-purple-500'>
                <div>
                    <h1 className='text-3xl text-center text-white font-bold'>Dashboard</h1>
                    <p className='text-white text-center'>
                        Explore the latest gadgets that will take your experience to the next level.
                        From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
                <div className="flex justify-center mt-20 space-x-4 mb-6">
                    <button
                        onClick={() => setActiveTab("Cart")}
                        className={`px-6 py-2 font-bold rounded-full ${activeTab === "Cart" ? "bg-white text-purple-700 " : "bg-purple-500 text-white border border-white"} rounded`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => setActiveTab("Wish List")}
                        className={`px-4 py-2 font-bold rounded-full  ${activeTab === "Wish List" ? "bg-white text-purple-700" : "bg-purple-500 text-white border border-white"} rounded`}
                    >
                        Wish List
                    </button>
                </div>
            </div>

            {activeTab === "Cart" && (
                <div>
                    <div className="flex justify-between mb-4">
                        <h2 className="lg:text-xl font-bold">Cart Items</h2>
                        <div className='flex justify-center gap-4'>
                            <div className="lg:mt-2 lg:text-lg text-xs mt-2 font-bold">
                                Total Price: ${totalPrice.toFixed(2)}
                            </div>
                            <button
                                onClick={sortByPrice}
                                className="bg-purple-500 text-white  lg:text-xl lg:px-4 lg:py-2 text-xs p-1 rounded-full"
                            >
                                Sort by Price
                            </button>
                            <button
                                onClick={handlePurchase}
                                className={`bg-green-600 text-white lg:text-xl lg:px-4 lg:py-2 text-xs p-1 rounded-full ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={cartItems.length === 0}
                            >
                                Purchase
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {sortedCartItems.map((item) => (
                            <div key={item.product_id} className="border relative p-4 rounded-lg shadow">
                                <button 
                                    onClick={() => handleDeleteItem(item.product_id)}
                                    className="absolute top-2 right-2 text-black rounded-full p-[3px] bg-red-500 hover:text-red-700"
                                >
                                    <FiX size={20} />
                                </button>
                                <img src={item.product_image} alt={item.product_title} className="lg:w-full w-[300px] lg:h-32 lg:object-cover rounded" />
                                <h3 className="text-lg font-semibold mt-2">{item.product_title}</h3>
                                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                <p className="text-gray-500 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

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

            {isModalOpen && <CongratulationsModal onClose={handleCloseModal} />}
        </div>
    );
};

export default Dashboard;
