import React, { useState } from 'react';

const CarDetailsForm = () => {
    const [carDetails, setCarDetails] = useState({
        carNumber: '',
        model: '',
        date:'',
        year: '',
        serviceNo: '',
        chassisNo: '',
        kmDriven: '',
        complaints: ''
    });

    const handleChange = (e) => {
        setCarDetails({
            ...carDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Car Details Submitted:', carDetails);
        // Here you can handle the form submission, e.g., send the data to an API.
    };

    return (
        <div className="flex justify-center items-center min-h-screen mt-2 w-auto">
            <div className="bg-white p-5 rounded-lg shadow-lg w-96">
                <h1 className="text-3xl text-center font-semibold text-indigo-600 mb-6">Car Service Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="carNumber" className="block text-gray-700 font-medium mb-2">Car Number</label>
                        <input
                            type="text"
                            id="carNumber"
                            name="carNumber"
                            value={carDetails.carNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            minLength='10' maxLength='10'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="model" className="block text-gray-700 font-medium mb-2">Model</label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={carDetails.model}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            minLength='5' maxLength='15'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Year</label>
                        <input
                            type="number"
                            id="year"
                            name="year"
                            value={carDetails.year}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required min='2010' max='2050'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="serviceNo" className="block text-gray-700 font-medium mb-2">Service No</label>
                        <input
                            type="text"
                            id="serviceNo"
                            name="serviceNo"
                            value={carDetails.serviceNo}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            minLength='10' maxLength='10'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="chassisNo" className="block text-gray-700 font-medium mb-2">Chassis No</label>
                        <input
                            type="text"
                            id="chassisNo"
                            name="chassisNo"
                            value={carDetails.chassisNo}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Date" className="block text-gray-700 font-medium mb-2">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={carDetails.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            min='500' max='5000'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="kmDriven" className="block text-gray-700 font-medium mb-2">Kilometers Driven</label>
                        <input
                            type="number"
                            id="kmDriven"
                            name="kmDriven"
                            value={carDetails.kmDriven}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                            min='500' max='5000'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="complaints" className="block text-gray-700 font-medium mb-2">Any Complaints</label>
                        <textarea
                            id="complaints"
                            name="complaints"
                            value={carDetails.complaints}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows="4"
                            maxLength='200'
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CarDetailsForm;
