'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const VerifyOTPPage = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    useEffect(() => {
        if (!email) {
            setError('No email provided. Please go back to login.');
        }
    }, [email]);

    const handleResend = async () => {
        setIsLoading(true);
        setError(null);
        // Resend code functionality for login.
        // This will call the login API again to send a new OTP.
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password: 'dummy-password' }), // Password is required by login API, but value doesn't matter here
        });

        const data = await res.json();
        if (res.ok) {
            // Success
        } else {
            setError(data.message || 'Failed to resend code.');
        }
        setIsLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        // NextAuth-এর CredentialsProvider ব্যবহার করে OTP ভেরিফাই করা।
        const result = await signIn('otp-verification', {
            redirect: false,
            email,
            code,
        });

        if (result?.error) {
            setError(result.error);
        } else {
            router.push('/dashboard'); // ভেরিফিকেশন সফল হলে ড্যাশবোর্ডে রিডাইরেক্ট করুন
        }
        setIsLoading(false);
    };

    if (error && error.includes('No email provided')) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8 text-center text-gray-700">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold mb-4">{error}</p>
                    <Link href="/login" className="text-[#2D4CB1] hover:underline">Go to Login Page</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full p-8 space-y-8 bg-white rounded-3xl shadow-2xl">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-[#1B2C59]">Verify Your Login</h2>
                    <p className="mt-2 text-sm text-gray-600">A 6-digit code has been sent to <strong>{email}</strong>. Please check your inbox.</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <div>
                        <label htmlFor="code" className="block text-sm font-medium text-gray-700">Verification Code</label>
                        <input
                            id="code"
                            name="code"
                            type="text"
                            maxLength="6"
                            required
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            disabled={isLoading}
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1] focus:z-10 sm:text-sm disabled:bg-gray-200 text-center tracking-widest"
                            placeholder="______"
                        />
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
                                'Verify Login'
                            )}
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>Didn't receive the email?</p>
                    <button
                        onClick={handleResend}
                        className="font-medium text-[#2D4CB1] hover:text-[#1B2C59] transition-colors"
                        disabled={isLoading}
                    >
                        Resend Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerifyOTPPage;