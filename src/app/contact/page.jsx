'use client';

import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form Data:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1B2C59]">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        We'd love to hear from you. Fill out the form below or contact us directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                    {/* Contact Info Section */}
                    <div className="lg:col-span-1 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-[#2D4CB1] mb-4">Our Contact Details</h2>
                        <div className="space-y-6 text-lg text-gray-700">
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl text-[#A00034]">📍</span>
                                <p>123 Polytechnic Road, Dhaka, Bangladesh</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl text-[#A00034]">📞</span>
                                <p>+880 123 456 7890</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl text-[#A00034]">✉️</span>
                                <p>info@techtuition.care</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold text-[#2D4CB1] mb-4">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] sm:text-sm"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#A00034] hover:bg-[#8E24AA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A00034] transition-colors cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
