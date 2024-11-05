import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold text-purple-600">404</h1>
        <p className="text-2xl mt-4">Oops! Page not found.</p>
        <Link to="/" className="mt-6 px-4 py-2 bg-purple-500 text-white rounded">
            Go Back Home
        </Link>
    </div>
);

export default NotFound;
