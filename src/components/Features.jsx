import React from 'react';

const Features = () => {
    return (
        <div className="bg-gray-100 py-10">
            <section className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Platform?</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover the unique features and benefits that make our platform the best choice for your needs. Experience innovation, reliability, and excellence.
                </p>
                <button className="mt-4 px-6 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600">
                    Learn More
                </button>
            </section>

            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <div className="text-5xl mb-4">🚀</div>
                    <h5 className="text-xl font-semibold text-gray-800">Fast Performance</h5>
                    <p className="text-gray-600 mt-2">
                        Experience lightning-fast speeds and seamless performance for all your tasks.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <div className="text-5xl mb-4">🔒</div>
                    <h5 className="text-xl font-semibold text-gray-800">Top-notch Security</h5>
                    <p className="text-gray-600 mt-2">
                        Your data is safe with our advanced security measures.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <div className="text-5xl mb-4">🌍</div>
                    <h5 className="text-xl font-semibold text-gray-800">Global Reach</h5>
                    <p className="text-gray-600 mt-2">
                        Connect and collaborate with users worldwide effortlessly.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <div className="text-5xl mb-4">📊</div>
                    <h5 className="text-xl font-semibold text-gray-800">Analytics</h5>
                    <p className="text-gray-600 mt-2">
                        Gain insights with our powerful analytics tools.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="./src/assets/img1.jpg"
                        alt="Emily Carter"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-center">
                        <h5 className="text-xl font-bold text-gray-800">Emily Carter</h5>
                        <p className="text-gray-600 mt-2">
                            "This platform has revolutionized the way we work. Highly recommended!"
                        </p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="./src/assets/img2.jpg" 
                        alt="James Smith"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-center">
                        <h5 className="text-xl font-bold text-gray-800">James Smith</h5>
                        <p className="text-gray-600 mt-2">
                            "Unmatched performance and reliability. A game-changer for our team."
                        </p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="./src/assets/img3.jpg"
                        alt="Sophia Brown"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-center">
                        <h5 className="text-xl font-bold text-gray-800">Sophia Brown</h5>
                        <p className="text-gray-600 mt-2">
                            "The user-friendly interface and features are simply outstanding."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
