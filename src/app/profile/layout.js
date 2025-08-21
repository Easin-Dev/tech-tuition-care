// app/profile/layout.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// এখানে আপনার NextAuth সেশন ডেটা ইম্পোর্ট করা যাবে
// import { useSession } from 'next-auth/react';

// সাইডবারের জন্য ডাইনামিক ডেটা
const sidebarItems = [
    { id: 'personal', name: 'Personal Information', icon: '👤', href: '/profile' },
    { id: 'address', name: 'Address', icon: '📍', href: '/profile/address' },
    { id: 'education', name: 'Education', icon: '🎓', href: '/profile/education' },
    { id: 'important_links', name: 'Important Links', icon: '🔗', href: '/profile/importantLink' },
];

export default function ProfileLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto rounded-3xl shadow-xl bg-white overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* বাম দিকের সাইডবার নেভিগেশন */}
                    <div className="w-full md:w-1/4 bg-white p-4 border-b md:border-b-0 md:border-r border-gray-200">
                        <h2 className="text-2xl font-bold text-[#1B2C59] mb-6 hidden md:block">My profile</h2>
                        <nav className="flex flex-col space-y-2">
                            {sidebarItems.map(item => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-colors duration-200 ${typeof window !== 'undefined' && window.location.pathname === item.href
                                            ? 'bg-[#EBF1FF] text-[#2D4CB1] font-semibold shadow'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* ডান দিকের কন্টেন্ট সেকশন */}
                    <main className="w-full md:w-3/4 p-6 md:p-12">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
