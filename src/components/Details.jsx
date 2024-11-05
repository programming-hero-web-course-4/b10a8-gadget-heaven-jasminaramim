
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const gadgetsData = [
    // First Category: Cricket Equipment (6 items)
    {
        product_id: 1,
        product_title: "Stylish Cricket Bat",
        product_image: "https://5.imimg.com/data5/SELLER/Default/2022/9/NS/ZW/VF/13105903/1-500x500.jpg",
        category: "Cricket Equipment",
        price: 59.99,
        description: "A lightweight cricket bat perfect for beginners.",
        Specification: ["Material: Willow", "Weight: 2.7 lbs", "Length: 34 inches"],
        availability: true,
        rating: 4.5
    },
    {
        product_id: 2,
        product_title: "Professional Cricket Ball",
        product_image: "https://img.freepik.com/free-photo/cricket-ball-isolated_53876-17944.jpg",
        category: "Cricket Equipment",
        price: 54.99,
        description: "Durable leather cricket ball for competitive play.",
        Specification: ["Material: Leather", "Circumference: 22.4 cm"],
        availability: true,
        rating: 4.7
    },
    {
        product_id: 3,
        product_title: "Cricket Helmet",
        product_image: "https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702191.jpg?uid=R121149122&ga=GA1.1.1810294565.1709915967&semt=ais_hybrid",
        category: "Cricket Equipment",
        price: 69.99,
        description: "Lightweight helmet with a comfortable fit.",
        Specification: ["Size: Adjustable", "Material: Polycarbonate"],
        availability: true,
        rating: 4.2
    },
    {
        product_id: 4,
        product_title: "Cricket Pads",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-fx5GMgyu_fixFpXUxzGQzKbtSOPAZzO6Q&s",
        category: "Cricket Equipment",
        price: 49.99,
        description: "High-quality batting pads for extra protection.",
        Specification: ["Material: PVC", "Size: Standard"],
        availability: true,
        rating: 4.6
    },
    {
        product_id: 5,
        product_title: "Cricket Gloves",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIE66Mlj0bLeNHiMaTxpxaXlajb6UlINwsQ&s",
        category: "Cricket Equipment",
        price: 74.99,
        description: "Comfortable and durable gloves for better grip.",
        Specification: ["Material: Leather", "Size: M/L"],
        availability: true,
        rating: 4.8
    },
    {
        product_id: 6,
        product_title: "Cricket Training Set",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzZcyqGr-I-LEDLH8BKYkCTwqi8flBQBooQ&s",
        category: "Cricket Equipment",
        price: 79.99,
        description: "All-in-one training set for budding cricketers.",
        Specification: ["Includes: Bat, Ball, and Stumps", "Material: Mixed"],
        availability: true,
        rating: 4.9
    },
    
    // Second Category: Cricket Gear (2 items)
    {
        product_id: 7,
        product_title: "Cricket Shoes",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sOoAC7OOqtx6T-gXcKT2Wah2g3UwSnasAQ&s",
        category: "Cricket Gear",
        price: 89.99,
        description: "High-performance shoes for optimal grip on the field.",
        Specification: ["Material: Synthetic", "Size: 10"],
        availability: true,
        rating: 4.4
    },
    {
        product_id: 8,
        product_title: "Cricket Bag",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHtdqk5aa9VSIdJzenp58iV108wCE8kMWJw&s",
        category: "Cricket Gear",
        price: 39.99,
        description: "Spacious bag to carry all your cricket gear.",
        Specification: ["Material: Nylon", "Size: Standard"],
        availability: true,
        rating: 4.3
    },

    // Third Category: Computers (2 items)
    {
        product_id: 9,
        product_title: "Gaming Laptop",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2GWTOHXGEpDzybXGQq08glWO_RMWrtrAAw&s",
        category: "Computers",
        price: 999.99,
        description: "High-performance laptop for gaming and multitasking.",
        Specification: ["Processor: Intel i7", "RAM: 16GB", "Storage: 512GB SSD"],
        availability: true,
        rating: 4.7
    },
    {
        product_id: 10,
        product_title: "Gaming Monitor",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPZQvOR6ZRVrCu730AP-6C8M8wTicFsNVBQ&s",
        category: "Computers",
        price: 299.99,
        description: "Ultra HD gaming monitor for an immersive experience.",
        Specification: ["Resolution: 3840 x 2160", "Size: 27 inches"],
        availability: true,
        rating: 4.8
    },

    // Fourth Category: Phones (4 items)
    {
        product_id: 11,
        product_title: "Smartphone X Pro",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAhQJB2YYb8lJpXekzlcGqTpu9PguyFuGow&s",
        category: "Phones",
        price: 799.99,
        description: "The latest smartphone with amazing features.",
        Specification: ["Display: 6.7 inches", "Camera: 108MP"],
        availability: true,
        rating: 4.8
    },
    {
        product_id: 12,
        product_title: "Galaxy Z Flip",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPn2KgcaRnF6RGhEZ7gzopsFrpxzMqnY8Qg&s",
        category: "Phones",
        price: 999.99,
        description: "Foldable smartphone with a unique design.",
        Specification: ["Display: 6.7 inches", "Camera: 12MP", "Battery: 3300 mAh"],
        availability: true,
        rating: 4.5
    },
    {
        product_id: 13,
        product_title: "iPhone 13 Pro",
        product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjpbZwaa_jrPC9iKbpbVwqP9_9hsTbnB55Hg&s",
        category: "Phones",
        price: 1099.99,
        description: "The latest iPhone with powerful performance.",
        Specification: ["Display: 6.1 inches", "Camera: Triple 12MP", "Battery: 3095 mAh"],
        availability: true,
        rating: 4.9
    },

];

const Details = () => {
    const { id } = useParams();
    const product = gadgetsData.find(item => item.product_id === parseInt(id));

    const { addToCart } = useCart(); 
    const { addToWishlist, wishlistItems } = useWishlist();
    
    const [isWishlisted, setIsWishlisted] = useState(
        wishlistItems.some(item => item.product_id === product?.product_id)
    );

    if (!product) {
        return <h2>There is no data found.</h2>;
    }

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.product_title} added to cart!`); // Show success toast
    };

    const handleAddToWishlist = () => {
        if (!isWishlisted) {
            addToWishlist(product);
            setIsWishlisted(true);
            toast.info(`${product.product_title} added to wishlist!  `,
               
            ); 
        }
    };

    return (
       <div className='mb-72'>
       <div>
       <div className='bg-purple-500 w-full h-[400px] p-6 mt-[-500px] z-10'>
            <h2 className='text-3xl font-bold text-white text-center'> Details</h2>
            <p className='text-white text-center'>Explore the latest gadgets that will take your experience to the next level.
            From smart devices to the coolest accessories, we have it all!</p>
        </div>
       </div>
         <div className="container mx-auto border lg:w-[700px] w-[300px] shadow-md md:w-[600px] relative -my-56 bg-white rounded-lg p-4">
            <div className="flex flex-col md:flex-row">
                <img src={product.product_image} alt={product.product_title} className="w-full md:w-1/2 rounded-lg" />
                <div className="md:ml-4">
                    <h2 className="text-2xl font-bold">{product.product_title}</h2>
                    <p className="text-lg text-gray-700">Price: ${product.price.toFixed(2)}</p>
                    <button className='btn rounded-full mt-2 bg-green-300 bg-opacity-50 border-green-700 '> In Stock</button>
                    <p className="mt-2">{product.description}</p>
                    <h3 className="mt-4 font-semibold">Specifications :</h3>
                    <ul className="list-disc ml-5">
                        {product.Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                    <p className="mt-2">Rating: {product.rating} ⭐</p>
                    <div className="mt-4 flex space-x-4">
                        <button 
                            onClick={handleAddToCart} 
                            className="bg-purple-500 text-white px-4 py-2 font-bold rounded-full flex items-center"
                        >
                            🛒 Add to Cart
                        </button>
                        <button 
                            onClick={handleAddToWishlist} 
                            className={`px-4 py-2 rounded-full flex items-center ${isWishlisted ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 text-white'}`}
                            disabled={isWishlisted}
                        >
                            ♥ {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer position='top-center' />
       </div>
    );
};

export default Details;
