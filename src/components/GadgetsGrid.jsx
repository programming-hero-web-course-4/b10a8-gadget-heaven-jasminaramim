
import React from 'react';
import { Link } from 'react-router-dom';

const GadgetsGrid = ({ gadgets }) => {
    if (gadgets.length === 0) {
        return <h2 className='text-2xl mt-10 font-bold'>There is no data found for this category.</h2>;
    }

    return (
  

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gadgets.map(gadget => (
            <div key={gadget.product_id} className="border p-4 rounded shadow">
                <img src={gadget.product_image} alt={gadget.product_title} className="w-full h-32 object-cover" />
                <h3 className="font-bold">{gadget.product_title}</h3>
                <p>Price: ${gadget.price}</p>
                <Link to={`/details/${gadget.product_id}`} className="text-blue-500">Details</Link>
            </div>
        ))}
    </div>
    );
};

export default GadgetsGrid;

