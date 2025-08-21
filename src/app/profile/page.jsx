// app/profile/page.js
'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react'; // NextAuth-এর useSession হুক ইম্পোর্ট করা হয়েছে

export default function ProfilePage() {
    const { data: session, status } = useSession();

    // যদি সেশন লোড না হয়, তাহলে লোডিং স্টেট দেখাবে।
    if (status === 'loading') {
        return (
            <div className="flex justify-center items-center h-full">
                <p>Loading...</p>
            </div>
        );
    }

    // যদি কোনো সেশন না থাকে, তাহলে ব্যবহারকারীকে লগইন করতে বলা হবে।
    if (!session) {
        return (
            <div className="flex flex-col justify-center items-center h-full text-center p-8">
                <h2 className="text-2xl font-bold mb-4">You are not logged in.</h2>
                <Link href="/login" className="text-[#2D4CB1] hover:underline">
                    Please log in to view your profile.
                </Link>
            </div>
        );
    }

    const PersonalInformation = ({ user }) => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1B2C59]">Personal Information</h2>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-inner">
                <img
                    src={user.image || "https://i.ibb.co.com/hFyJCCzW/Gemini-Generated-Image-f10zqhf10zqhf10z.png"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <h3 className="mt-4 text-xl font-bold text-[#1B2C59]">{user.name}</h3>
                <p className="text-gray-500">Student ID: {user.studentId}</p>
            </div>

            <div className="space-y-4">
                <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
                    <label className="block text-sm font-medium text-gray-500">Full name</label>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{user.name}</p>
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
                    <label className="block text-sm font-medium text-gray-500">Email Address</label>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{user.email}</p>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-md shadow-sm border border-gray-200">
                    <label className="text-sm font-medium text-gray-500">Change Password</label>
                    <Link href="/change-password" className="text-[#2D4CB1] hover:underline">Change</Link>
                </div>
            </div>

            <div className="flex justify-end space-x-4">
                <button className="px-6 py-3 bg-[#A00034] text-white font-semibold rounded-full hover:bg-[#8E24AA] transition-colors">
                    Edit Profile
                </button>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold text-[#1B2C59] mb-4">Device Activity</h3>
                <div className="overflow-x-auto rounded-xl shadow-md">
                    <table className="min-w-full bg-white">
                        <thead className="bg-[#2D4CB1] text-white">
                            <tr>
                                <th className="py-3 px-6 text-left text-sm font-semibold uppercase">Serial</th>
                                <th className="py-3 px-6 text-left text-sm font-semibold uppercase">Platform</th>
                                <th className="py-3 px-6 text-left text-sm font-semibold uppercase">Date</th>
                                <th className="py-3 px-6 text-left text-sm font-semibold uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="py-4 px-6 text-sm text-gray-900">1</td>
                                <td className="py-4 px-6 text-sm text-gray-700">Windows 10</td>
                                <td className="py-4 px-6 text-sm text-gray-700">17-08-2025 04:28 PM</td>
                                <td className="py-4 px-6 text-sm">
                                    <button className="text-red-500 hover:text-red-700 font-medium">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return <PersonalInformation user={session.user} />;
}
