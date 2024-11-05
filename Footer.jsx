import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="   bg-gray-200 text-neutral-content mt-10 p-6">
                <div className='text-center'>
                    <h2 className='font-bold text-3xl '> Gadget Heaven</h2>
                    <p></p>
                </div>
                <div className='flex justify-between  mt-10 mx-auto'>
                    <nav className=''>
                        <h6 className="font-bold text-2xl">Services</h6>
                        <div>
                            <a className="text-gray-500 ">Branding</a><br />

                            <a className="text-gray-500 ">Design</a>
                            <br />

                            <a className="text-gray-500 ">Marketing</a>
                            <br />

                            <a className="text-gray-500 ">Advertisement</a>
                        </div>
                    </nav>
                    <nav>
                        <h6 className="font-bold text-2xl">Company</h6>
                        <br />
                        <a className="text-gray-500 ">About us</a>
                        <br />
                        <a className="text-gray-500 ">Contact</a>
                        <br />
                        <a className="text-gray-500 ">Jobs</a>
                       
                    </nav>
                    <nav>
                        <h6 className="font-bold text-2xl">Legal</h6>
                        <a className="text-gray-500 ">Terms of use</a><br />

                        <a className="text-gray-500 ">Privacy policy</a>
                        <br />
                        <a className="text-gray-500 ">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;