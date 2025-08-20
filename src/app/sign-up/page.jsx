'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [alertMessage, setAlertMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    // ইমেল ভ্যালিডেশন ফাংশন
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setEmailError(null);
        setAlertMessage(null);

        // ইমেল ভ্যালিডেশন চেক
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                await signIn('credentials', {
                    email,
                    password,
                    redirect: false,
                });
                setAlertMessage('Signup successful! Redirecting to homepage...');
                setIsSuccess(true);
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            } else {
                setError(data.message || 'Signup failed');
                setAlertMessage(data.message || 'Signup failed');
                setIsSuccess(false);
            }
        } catch (err) {
            setError('An unexpected error occurred.');
            setAlertMessage('An unexpected error occurred.');
            setIsSuccess(false);
        } finally {
            setIsLoading(false);
        }
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
                        <button onClick={() => signIn('google')} disabled={isLoading} className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D4CB1] transition-colors cursor-pointer disabled:cursor-not-allowed">Sign Up with Google</button>
                        <button onClick={() => signIn('facebook')} disabled={isLoading} className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-white bg-[#3B5998] hover:bg-[#324B83] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D4CB1] transition-colors cursor-pointer disabled:cursor-not-allowed">Sign Up with Facebook</button>
                    </div>

                    <div className="mt-6 flex items-center justify-between"><div className="w-full border-t border-gray-300" /><div className="px-2 text-sm text-gray-500">Or continue with</div><div className="w-full border-t border-gray-300" /></div>

                    <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        <div className="rounded-md shadow-sm space-y-4">
                            <div><label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label><input id="name" name="name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} disabled={isLoading} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] focus:z-10 sm:text-sm disabled:bg-gray-200" placeholder="Enter your full name" /></div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(null); }} disabled={isLoading} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] focus:z-10 sm:text-sm disabled:bg-gray-200" placeholder="Enter your email" />
                                {emailError && <p className="mt-1 text-red-500 text-sm">{emailError}</p>}
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
            {alertMessage && (
                <div className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-xl text-white ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`}>
                    {alertMessage}
                </div>
            )}
        </div>
    );
};

export default SignUpPage;
