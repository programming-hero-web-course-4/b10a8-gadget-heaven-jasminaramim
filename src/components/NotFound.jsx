

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="mt-4 text-2xl">Oops! Page Not Found</p>
            <p className="mt-2 text-lg">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-gray-200 transition">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
