
import React from 'react';

const CategoriesSidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="font-bold mb-2">Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category} className="mb-1">
            <button 
              onClick={() => onCategorySelect(category)} 
              className={`w-full text-left p-2 rounded ${selectedCategory === category ? 'bg-purple-500 text-white' : 'bg-transparent'}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSidebar;

