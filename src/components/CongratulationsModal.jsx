import React from 'react';

const CongratulationsModal = ({ onClose }) => {
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg">
                <img className='items-center text-center' src="https://raw.githubusercontent.com/ProgrammingHero1/B10-A8-gadget-heaven/refs/heads/main/assets/Group.png" alt="" />
                <h2 className="text-xl font-bold">Congratulations!</h2>
                <p>Your purchase was successful!</p>
                <button 
                    className="mt-4 bg-purple-500 w-full text-white px-4 py-2 rounded-full"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CongratulationsModal;
