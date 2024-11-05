
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriesSidebar = ({ categories, selectedCategory }) => {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    navigate(`/home/${category}`);
  };

  return (
    <div className="bg-gray-200 p-4 w-3/3 rounded">
      <h2 className="font-bold mb-2">Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category} className="mb-1">
            <button 
              onClick={() => handleCategorySelect(category)} 
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
