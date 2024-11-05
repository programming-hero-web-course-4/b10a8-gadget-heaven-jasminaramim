import React from 'react';

const AboutUs = () => {
    return (
        <div className=' '>
            <div className=" p-8 lg:h-[580px] h-[700px] w-full mb-40 lg:mb-20 bg-purple-500 bg-opacity-80 mx-auto mt-8 shadow-lg  rounded-lg">
                <h1 className="text-3xl text-center font-bold text-white">About Us</h1>
                <p className="mt-4 text-2xl text-white">
                    Welcome to GadgetHub! We are a platform dedicated to bringing you the latest and most innovative gadgets.
                    From smart devices to accessories, we strive to provide top-notch products to enhance your tech experience.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    Our team of experts curates only the best products that meet our high standards of quality, performance, and innovation.
                    We believe that technology should make life easier, more exciting, and more efficient.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    Whether you are a tech enthusiast or simply looking for the perfect gadget, GadgetHub is your one-stop shop.
                </p>
                <h2 className="mt-8 text-2xl font-bold text-black-900">Contact Us</h2>
                <p className="mt-2 text-gray-600">
                    <span className='font-bold'> Email:</span> support@gadgethub.com
                </p>
                <p className="text-gray-600">
                    <span className='font-bold'> Phone:</span> (123) 456-7890
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
