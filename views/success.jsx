import React from 'react';

const Success = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-blue-50">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                <h1 className="text-green-600 mb-5 text-3xl">Thank you!</h1>
                <p className="text-gray-800 mb-8 text-lg">Your payment was successful.</p>
                <button 
                    className="bg-green-600 text-white py-3 px-6 text-lg rounded-lg transition duration-300 ease-in-out hover:bg-green-700"
                    onClick={() => window.location.href = '/'}
                >
                    Go to Home
                </button>
            </div>
            <script>
                {setTimeout(() => {
                    window.location.href = '/';
                }, 10000)}
            </script>
        </div>
    );
};

export default Success;

