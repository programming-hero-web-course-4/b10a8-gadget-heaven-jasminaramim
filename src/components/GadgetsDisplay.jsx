import React from 'react';
import { Link } from 'react-router-dom';

const GadgetsDisplay = ({ gadgetsData, selectedCategory }) => {
  const filteredGadgets = selectedCategory === 'All' 
      ? gadgetsData 
      : gadgetsData.filter(gadget => gadget.category === selectedCategory);

  return (
    <div>
        <div className="w-4/4 p-4">
      <h2 className="text-2xl font-bold mb-4">{selectedCategory} Gadgets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredGadgets.length > 0 ? (
          filteredGadgets.map(gadget => (
            <div key={gadget.product_id} className="border rounded p-4">
              <img src={gadget.product_image} alt={gadget.product_title} className="w-full h-40 object-cover mb-2" />
              <h3 className="font-semibold">{gadget.product_title}</h3>
              <p>${gadget.price.toFixed(2)}</p>
              <Link to={`/details/${gadget.product_id}`} className="text-purple-500 btn border border-purple-500 bg-purple-500 bg-opacity-20 rounded-full mt-2">View Details</Link>
            </div>
          ))
        ) : (
          <p>No gadgets found in this category.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default GadgetsDisplay;
