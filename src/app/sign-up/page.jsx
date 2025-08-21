'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false); // New state for modal visibility
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        setShowModal(false); // Ensure modal is hidden on new submission

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        // Check for 409 status code from the API
        if (response.status === 409) {
            setError(data.message || 'User already exists. Please login.');
            setShowModal(true); // Show the pop-up modal
        } else if (response.ok) {
            router.push(`/verify-otp?email=${email}`);
        } else {
            setError(data.message || 'Signup failed');
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[#2D4CB1]">
                    <img src="https://i.ibb.co.com/hFyJCCzW/Gemini-Generated-Image-f10zqhf10zqhf10z.png" alt="Tech Tuition Care Logo" className="rounded-xl shadow-lg transform -rotate-3 scale-95 transition-transform duration-500 ease-in-out hover:rotate-0 hover:scale-100" />
                </div>
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                    <div className="text-center md:text-left">
                        <h2 className="mt-6 text-3xl font-bold text-[#1B2C59]">Join Tech Tuition Care</h2>
                        <p className="mt-2 text-sm text-gray-600">Start your polytechnic journey with us.</p>
                    </div>

                    <div className="mt-8 space-y-4">
                        <button onClick={() => signIn('google')} className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D4CB1] transition-colors cursor-pointer">Sign Up with Google</button>
                        <button onClick={() => signIn('facebook')} className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-white bg-[#3B5998] hover:bg-[#324B83] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D4CB1] transition-colors cursor-pointer">Sign Up with Facebook</button>
                    </div>

                    <div className="mt-6 flex items-center justify-between"><div className="w-full border-t border-gray-300" /><div className="px-2 text-sm text-gray-500">Or continue with</div><div className="w-full border-t border-gray-300" /></div>

                    <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                        {error && !showModal && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <div className="rounded-md shadow-sm space-y-4">
                            <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label><input id="name" name="name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] focus:z-10 sm:text-sm disabled:bg-gray-200" placeholder="Enter your full name" /></div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] focus:z-10 sm:text-sm disabled:bg-gray-200" placeholder="Enter your email" />
                            </div>
                            <div><label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label><input id="password" name="password" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] focus:z-10 sm:text-sm disabled:bg-gray-200" placeholder="Create a password" /></div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#A00034] hover:bg-[#8E24AA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A00034] transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-600">Already have an account?{' '}<Link href="/login" className="font-medium text-[#2D4CB1] hover:text-[#1B2C59] transition-colors">Login here</Link></div>
                </div>
            </div>

            {/* The modal pop-up */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm mx-4">
                        <h3 className="text-xl font-bold text-[#1B2C59] mb-4">User Already Exists</h3>
                        <p className="text-gray-700 mb-6">It looks like you already have an account with this email. Please log in to continue.</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                            >
                                Cancel
                            </button>
                            <Link href="/login" passHref>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-sm font-medium text-white bg-[#A00034] rounded-md hover:bg-[#8E24AA] transition-colors"
                                >
                                    Go to Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignUpPage;
