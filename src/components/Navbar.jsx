'use client';

import Link from 'next/link';
import React, { useState } from 'react';

// এই নেভিগেশন কম্পোনেন্টটি আপনার Next.js অ্যাপের জন্য।
// এটি ছবির মতো একটি সম্পূর্ণ রেসপনসিভ নেভিগেশন বার তৈরি করে।
// সকল ডেটা ডাইনামিক রাখা হয়েছে যাতে সহজেই পরিবর্তন করা যায়।

const Navbar = () => {
    // মোবাইল মেনু খোলা না বন্ধ, তা ট্র্যাক করার জন্য useState ব্যবহার করা হয়েছে।
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ডাইনামিক নেভিগেশন লিংক ডেটা। ভবিষ্যতে এখানে আরও লিংক যোগ করতে পারেন।
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Notices', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
    ];

    // ডিপার্টমেন্টের জন্য ডাইনামিক ডেটা।
    const departments = [
        { name: 'Computer Engineering', href: '/departments/computer' },
        { name: 'Electrical Engineering', href: '/departments/electrical' },
        { name: 'Civil Engineering', href: '/departments/civil' },
        { name: 'Mechanical Engineering', href: '/departments/mechanical' },
    ];

    // যোগাযোগের তথ্যের জন্য ডাইনামিক ডেটা।
    const contactInfo = [
        { type: 'phone', label: 'Phone Number', value: '(650) 121-2121', icon: '📞' },
        { type: 'email', label: 'Email Us Here', value: 'example@gmail.com', icon: '✉️' },
    ];

    // সামাজিক যোগাযোগ মাধ্যমের লিংক।
    const socialLinks = [
        { icon: 'f', href: '#' },
        { icon: 'i', href: '#' },
        { icon: 't', href: '#' },
        { icon: 'y', href: '#' },
    ];

    return (
        <nav className="bg-[#2D4CB1] text-white">
            {/* ডেস্কটপ এবং ট্যাবলেটের জন্য উপরের টপ বার */}
            <div className="hidden md:block bg-[#1B2C59] text-sm">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    {/* লোগো এবং ট্যাগলাইন */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm italic text-gray-400">The Future In a Construction, Worldwide</span>
                    </div>
                    {/* যোগাযোগের তথ্য এবং সামাজিক আইকন */}
                    <div className="flex items-center space-x-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span className="text-base text-gray-300">{info.icon}</span>
                                <div>
                                    <div className="font-semibold text-gray-200">{info.label}</div>
                                    <div className="text-gray-400">{info.value}</div>
                                </div>
                            </div>
                        ))}
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ডেস্কটপ এবং ট্যাবলেটের জন্য মূল নেভিগেশন বার */}
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* লোগো সেকশন */}
                <div className="flex items-center">
                    <img src="https://i.ibb.co.com/hFyJCCzW/Gemini-Generated-Image-f10zqhf10zqhf10z.png" alt="Tech Tuition Care Logo" className="h-10" />
                </div>

                {/* মূল নেভিগেশন লিংক - মোবাইল ডিভাইসে লুকানো থাকবে */}
                <div className="hidden md:flex flex-1 justify-center space-x-8">
                    <a
                        href="/"
                        className="text-white hover:text-yellow-300 transition-colors uppercase font-medium"
                    >
                        Home
                    </a>
                    {/* Departments/Subjects এর জন্য ড্রপডাউন */}
                    <div className="relative group">
                        <a
                            href="/departments"
                            className="text-white hover:text-yellow-300 transition-colors uppercase font-medium"
                        >
                            Departments
                        </a>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-stone-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
                            {departments.map((dept, index) => (
                                <a
                                    key={index}
                                    href={dept.href}
                                    className="block px-4 py-2 hover:bg-gray-200 transition-colors rounded-md"
                                >
                                    {dept.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <a
                        href="/courses"
                        className="text-white hover:text-yellow-300 transition-colors uppercase font-medium"
                    >
                        Courses
                    </a>
                    <a
                        href="/about"
                        className="text-white hover:text-yellow-300 transition-colors uppercase font-medium"
                    >
                        About Us
                    </a>
                    <a
                        href="/blog"
                        className="text-white hover:text-yellow-300 transition-colors uppercase font-medium"
                    >
                        Notices
                    </a>
                    <a
                        href="/contact"
                        className="text-white hover:text-yellow-300 transition-colors uppercase font-medium"
                    >
                        Contact
                    </a>
                    <a
                        href="/faq"
                        className="text-white hover:text-yellow-300 transition-colors uppercase font-medium"
                    >
                        FAQ
                    </a>
                </div>

                {/* সাইন আপ বাটন - মোবাইল ডিভাইসে লুকানো থাকবে */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href={"/login"} className="text-white font-semibold px-4 py-2 rounded-full hover:text-yellow-300 transition-colors uppercase cursor-pointer">
                        🔑 Login
                    </Link>
                    <Link href={"/sign-up"} className="bg-[#A00034] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#8E24AA] transition-colors uppercase cursor-pointer">
                        🆕 Sign Up
                    </Link>
                </div>

                {/* মোবাইল মেনু বাটন - শুধুমাত্র মোবাইল ডিভাইসে দেখা যাবে */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* মোবাইল মেনু প্যানেল */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#2D4CB1] z-50 transform transition-transform ease-in-out duration-300">
                    <div className="p-4 flex flex-col items-center">
                        {/* মেনু বন্ধ করার বাটন */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-4 right-4 text-white text-3xl"
                        >
                            &times;
                        </button>

                        {/* মোবাইল মেনুর ভিতরে লোগো */}
                        <div className="my-8">
                            <img src="https://i.ibb.co.com/hFyJCCzW/Gemini-Generated-Image-f10zqhf10zqhf10z.png" alt="Tech Tuition Care Logo" className="h-12" />
                        </div>

                        {/* মোবাইল নেভিগেশন লিংক */}
                        <div className="flex flex-col items-center space-y-6">
                            <a
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                Home
                            </a>
                            {/* মোবাইল ড্রপডাউন */}
                            <div className="w-full text-center">
                                <a
                                    href="/departments"
                                    className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                                >
                                    Departments / Subjects
                                </a>
                                <div className="mt-2 flex flex-col items-center space-y-2">
                                    {departments.map((dept, index) => (
                                        <a
                                            key={index}
                                            href={dept.href}
                                            className="text-gray-300 hover:text-white transition-colors text-lg"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {dept.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <a
                                href="/courses"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                Courses
                            </a>
                            <a
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                About Us
                            </a>
                            <a
                                href="/blog"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                Notices / Blog
                            </a>
                            <a
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                Contact
                            </a>
                            <a
                                href="/faq"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                FAQ / Help
                            </a>
                        </div>

                        {/* মোবাইল মেনুর ভিতরে যোগাযোগের তথ্য */}
                        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col items-center space-y-4">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center space-x-2 text-white">
                                    <span className="text-lg">{info.icon}</span>
                                    <div>
                                        <div className="font-semibold">{info.label}</div>
                                        <div className="text-sm text-gray-400">{info.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* মোবাইল মেনুর ভিতরে CTA বাটন */}
                        <Link href={"/sign-up"} className="mt-8 bg-[#A00034] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#8E24AA] transition-colors uppercase cursor-pointer">
                            🆕 Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
