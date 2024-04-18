

const Plans = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold text-center mb-6">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Monthly Plan</h3>
                    <p className="text-gray-600 mb-4">Get access to all our features on a monthly basis.</p>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-700 font-semibold">Price: $19.99/month</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Subscribe</button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Yearly Plan</h3>
                    <p className="text-gray-600 mb-4">Save big with our yearly subscription. Get access to all features for a whole year.</p>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-700 font-semibold">Price: $199.99/year</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
