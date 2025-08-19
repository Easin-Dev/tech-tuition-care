'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SignUpPage = () => {
    // ফর্ম ডেটা স্টোর করার জন্য স্টেট
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    // ইনপুট ফিল্ডের ভ্যালু আপডেট করার জন্য হ্যান্ডলার
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // ফর্ম সাবমিট করার জন্য হ্যান্ডলার
    const handleSubmit = (e) => {
        e.preventDefault();
        // ফর্মের ডেটা কনসোলে লগ করা
        console.log('Form Data:', formData);
        // এখানে আপনি আপনার API বা অন্য কোনো ডেটা প্রসেসিং লজিক যোগ করতে পারেন
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Image Section (Left Side) */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[#2D4CB1]">
                    <img
                        src="https://i.ibb.co.com/L5hY6vj/Gemini-Generated-Image-4b4w8c4b4w8c4b4w.jpg"
                        alt="Student signing up"
                        className="rounded-xl shadow-lg transform -rotate-3 scale-95 transition-transform duration-500 ease-in-out hover:rotate-0 hover:scale-100"
                    />
                </div>

                {/* Form Section (Right Side) */}
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                    <div className="text-center md:text-left">
                        <h2 className="mt-6 text-3xl font-bold text-[#1B2C59]">
                            Join Tech Tuition Care
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Start your polytechnic journey with us.
                        </p>
                    </div>

                    <div className="mt-8 space-y-4">
                        <button className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D4CB1] transition-colors cursor-pointer">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.613 4.48-4.996 7.643-9.98 7.643-6.103 0-11.08-4.97-11.08-11.08s4.977-11.08 11.08-11.08c2.81 0 5.378 1.036 7.375 2.723L37.765 14C34.634 11.396 29.834 10 24 10c-10.45 0-18.91 8.46-18.91 18.92s8.46 18.91 18.91 18.91c9.93 0 17.65-7.398 18.91-18.156L43.611 20.083z" />
                                    <path fill="#4CAF50" d="M5.09 28.92c0 10.46 8.46 18.91 18.91 18.91 9.93 0 17.65-7.398 18.91-18.156L43.611 20.083H42V20H24v8h11.303c-1.613 4.48-4.996 7.643-9.98 7.643-6.103 0-11.08-4.97-11.08-11.08s4.977-11.08 11.08-11.08c2.81 0 5.378 1.036 7.375 2.723L37.765 14C34.634 11.396 29.834 10 24 10c-10.45 0-18.91 8.46-18.91 18.92z" />
                                    <path fill="#1976D2" d="M5.09 28.92c0-2.82 0.5-5.54 1.48-8.08H5.09v-8.03c1.94-3.56 5.27-6.31 9.32-7.35l4.31 8.03c-1.12.63-2.11 1.42-2.93 2.37-2.61 2.92-4.14 6.7-4.14 10.74 0 4.04 1.53 7.82 4.14 10.74l-4.31 8.03c-4.05-1.04-7.38-3.79-9.32-7.35z" />
                                    <path fill="#E53935" d="M24 10c-4.49 0-8.52 1.83-11.45 4.79l-4.31-8.03c-2.73 2.77-4.32 6.55-4.32 10.74s1.59 7.97 4.32 10.74l4.31-8.03c-2.93-2.96-4.79-7.01-4.79-11.45 0-4.44 1.86-8.49 4.79-11.45z" />
                                </svg>
                            </span>
                            Sign Up with Google
                        </button>
                        <button className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-white bg-[#3B5998] hover:bg-[#324B83] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D4CB1] transition-colors cursor-pointer">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.99 1.01H1.01C.45 1.01 0 1.46 0 2.02v20.01c0 .55.45 1.01 1.01 1.01h10.36v-9.3h-3.13v-3.62h3.13v-2.77c0-3.1 1.89-4.8 4.67-4.8 1.33 0 2.47.1 2.81.14v3.25h-1.92c-1.51 0-1.8.72-1.8 1.77v2.33h3.58l-.55 3.62h-3.03v9.3h5.45c.55 0 1.01-.45 1.01-1.01V2.02c0-.56-.46-1.01-1.01-1.01z" />
                                </svg>
                            </span>
                            Sign Up with Facebook
                        </button>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="w-full border-t border-gray-300" />
                        <div className="px-4 text-sm text-gray-500">Or </div>
                        <div className="w-full border-t border-gray-300" />
                    </div>

                    <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] focus:z-10 sm:text-sm"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] focus:z-10 sm:text-sm"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] focus:z-10 sm:text-sm"
                                    placeholder="Create a password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#A00034] hover:bg-[#8E24AA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A00034] transition-colors cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="font-medium text-[#2D4CB1] hover:text-[#1B2C59] transition-colors">
                            Login here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
