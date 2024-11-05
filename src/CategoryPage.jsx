
import { useParams } from 'react-router-dom';
;
import CategoriesSidebar from './components/CategoriesSidebar';
import GadgetsDisplay from './components/GadgetsDisplay';
import Banner from './components/Banner';
;

const CategoryPage = () => {
    const { category } = useParams(); 
    const categories = ["All", "Cricket Equipment", "Computers", "Phones", "Smart Watches"];

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
            product_image: "https://images.unsplash.com/photo-1620052829703-65de1f1c788e",
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
            product_image: "https://images.unsplash.com/photo-1587450389751-2c4a66e8e8de",
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
            product_image: "https://images.unsplash.com/photo-1576091601617-4a5d2dc546a8",
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
            product_image: "https://images.unsplash.com/photo-1514963788024-b2674d4f4da8",
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
            product_image: "https://images.unsplash.com/photo-1612922028393-cd7b41f4980c",
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
            product_image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
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
            product_image: "https://images.unsplash.com/photo-1541442583148-7f059a6ab6e6",
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
            product_image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
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
            product_image: "https://images.unsplash.com/photo-1611670820244-1e7763b6f2b4",
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
            product_image: "https://images.unsplash.com/photo-1632949175000-23a5bcf96268",
            category: "Phones",
            price: 1099.99,
            description: "The latest iPhone with powerful performance.",
            Specification: ["Display: 6.1 inches", "Camera: Triple 12MP", "Battery: 3095 mAh"],
            availability: true,
            rating: 4.9
        },
        {
            product_id: 14,
            product_title: "Google Pixel 6",
            product_image: "https://images.unsplash.com/photo-1635210130695-6325fbcdf161",
            category: "Phones",
            price: 599.99,
            description: "Smartphone with the best camera features.",
            Specification: ["Display: 6.4 inches", "Camera: 50MP", "Battery: 4614 mAh"],
            availability: true,
            rating: 4.7
        }
    ];
    return (
        <div >
                <div><Banner></Banner></div>
            
            <div className='container mx-auto p-4'>
            <div className="flex  mt-6">
                <div className='w-2/4 lg:w-1/4 mt-4 mr-4'>
                <CategoriesSidebar 
                categories={categories} 
                selectedCategory={category} 
                onCategorySelect={() => {}} 
            />
                </div>
            <div className="w-3/4">
            <GadgetsDisplay 
                gadgetsData={gadgetsData} 
                selectedCategory={category} 
            />
            </div>
        </div>
            </div>
        </div>
    );
};

export default CategoryPage;
