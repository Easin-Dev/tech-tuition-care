'use client';

import React from 'react';

// এটি আপনার Address পেজের কন্টেন্ট।
// এখানে আপনি ব্যবহারকারীর ঠিকানা সংক্রান্ত ডেটা লোড এবং প্রদর্শন করতে পারেন।
const AddressPage = () => {
    // ডেমো ডেটা। আপনি এখানে API থেকে ডেটা নিয়ে ব্যবহার করতে পারেন।
    const addresses = [
        { type: 'Primary Address', street: '123 Dhaka Street', city: 'Dhaka', country: 'Bangladesh', zip: '1200' },
        { type: 'Secondary Address', street: '456 Chittagong Avenue', city: 'Chittagong', country: 'Bangladesh', zip: '4000' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1B2C59]">Address</h2>

            {addresses.map((address, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-[#2D4CB1] mb-2">{address.type}</h3>
                    <p className="text-gray-700"><strong>Street:</strong> {address.street}</p>
                    <p className="text-gray-700"><strong>City:</strong> {address.city}</p>
                    <p className="text-gray-700"><strong>Country:</strong> {address.country}</p>
                    <p className="text-gray-700"><strong>Zip Code:</strong> {address.zip}</p>
                    <div className="mt-4 flex space-x-2">
                        <button className="px-4 py-2 text-sm font-medium text-white bg-[#A00034] rounded-md hover:bg-[#8E24AA] transition-colors">Edit</button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AddressPage;
