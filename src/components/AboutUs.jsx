
import React from 'react';

const AboutUs = () => {
    return (
        <div className="relative -mt-20 mb-20">
            <div className="relative p-8 lg:h-[580px] w-full max-w-screen-lg mx-auto bg-purple-500 bg-opacity-80 shadow-lg rounded-lg">
                <h1 className="text-5xl text-center font-bold text-white">About Us</h1>
                <p className="mt-4 text-2xl text-white">
                    Welcome to GadgetHub! We are a platform dedicated to bringing you the latest and most innovative gadgets.
                    From smart devices to accessories, we strive to provide top-notch products to enhance your tech experience.
                </p>
                <p className="mt-4 text-lg text-gray-200">
                    Our team of experts curates only the best products that meet our high standards of quality, performance, and innovation.
                    We believe that technology should make life easier, more exciting, and more efficient.
                </p>
                <p className="mt-4 text-lg text-gray-200">
                    Whether you are a tech enthusiast or simply looking for the perfect gadget, GadgetHub is your one-stop shop.
                </p>
                <div className='text-center bg-white p-4 mt-10 rounded-full shadow-2xl'>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                    <p className="mt-2 text-gray-600">
                        <span className='font-bold'>Email:</span> support@gadgethub.com
                    </p>
                    <p className="text-gray-600">
                        <span className='font-bold'>Phone:</span> (123) 456-7890
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
