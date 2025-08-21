'use client';

import React from 'react';
import Link from 'next/link';

// এটি আপনার Important Links পেজের কন্টেন্ট।
// এখানে আপনি ব্যবহারকারীর জন্য গুরুত্বপূর্ণ কিছু লিংক দেখাতে পারেন।
const ImportantLinksPage = () => {
    // ডেমো ডেটা।
    const links = [
        { title: 'Student Dashboard', href: '/student-dashboard', description: 'Access your academic dashboard.' },
        { title: 'Course Catalog', href: '/courses', description: 'Browse all available courses.' },
        { title: 'Academic Calendar', href: '/calendar', description: 'View important dates and deadlines.' },
        { title: 'Support Center', href: '/support', description: 'Get help with your queries.' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1B2C59]">Important Links</h2>

            {links.map((link, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-[#2D4CB1] mb-1">
                        <Link href={link.href} className="hover:underline">{link.title}</Link>
                    </h3>
                    <p className="text-gray-700">{link.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ImportantLinksPage;
