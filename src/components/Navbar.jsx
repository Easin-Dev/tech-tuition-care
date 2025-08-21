'use client';

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react'; // NextAuth থেকে signOut এবং useSession import করা হয়েছে

const Navbar = () => {
    // মোবাইল মেনু খোলা না বন্ধ, তা ট্র্যাক করার জন্য useState ব্যবহার করা হয়েছে।
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // প্রোফাইল কার্ড খোলা না বন্ধ, তা ট্র্যাক করার জন্য useState ব্যবহার করা হয়েছে।
    const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);

    // useSession হুক ব্যবহার করে ব্যবহারকারীর সেশন ডেটা লোড করা হচ্ছে
    const { data: session } = useSession();

    // প্রোফাইল কার্ডের রেফারেন্স তৈরি করা হয়েছে যাতে এটিতে ক্লিক না হলে বন্ধ করা যায়
    const profileCardRef = useRef(null);
    const profileImageRef = useRef(null);

    // বাইরে ক্লিক করলে প্রোফাইল কার্ড বন্ধ করার জন্য useEffect ব্যবহার করা হয়েছে
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                profileCardRef.current &&
                !profileCardRef.current.contains(event.target) &&
                profileImageRef.current &&
                !profileImageRef.current.contains(event.target)
            ) {
                setIsProfileCardOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

    // ইউজার লোগআউট হ্যান্ডেল করার জন্য ফাংশন
    const handleLogout = () => {
        signOut();
        setIsProfileCardOpen(false);
    };


    console.log('Session:', session);

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
                            href="/all_departments"
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
                        href="/about-us"
                        className="text-white hover:text-yellow-300 transition-colors uppercase font-medium"
                    >
                        About Us
                    </a>
                    <a
                        href="/all-notices"
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
                        href="/all-faq"
                        className="text-white hover:text-yellow-300 transition-colors uppercase font-medium"
                    >
                        FAQ
                    </a>
                </div>

                {/* লগইন করা ব্যবহারকারীর জন্য প্রোফাইল বাটন */}
                <div className="hidden md:flex items-center space-x-4 relative">
                    {session ? (
                        <>
                            <div
                                ref={profileImageRef}
                                onClick={() => setIsProfileCardOpen(!isProfileCardOpen)}
                                className="flex items-center space-x-2 cursor-pointer"
                            >
                                <img
                                    src={session.user.image || "https://i.ibb.co.com/hFyJCCzW/Gemini-Generated-Image-f10zqhf10zqhf10z.png"}
                                    alt="User Profile"
                                    className="h-10 w-10 rounded-full border-2 border-white"
                                />
                                <span className="font-semibold">{session.user.name}</span>
                            </div>
                            {isProfileCardOpen && (
                                <div ref={profileCardRef} className="absolute top-full right-0 mt-2 w-72 bg-white text-stone-900 rounded-md shadow-lg z-50 overflow-hidden">
                                    <div className="flex flex-col items-center p-4 border-b border-gray-200">
                                        <img
                                            src={session.user.image || "https://i.ibb.co.com/hFyJCCzW/Gemini-Generated-Image-f10zqhf10zqhf10z.png"}
                                            alt="User Profile"
                                            className="h-16 w-16 rounded-full"
                                        />
                                        <h3 className="mt-2 text-lg font-bold">{session.user.name}</h3>
                                        <p className="text-sm text-gray-500">Student ID: N/A</p>
                                    </div>
                                    <div className="flex flex-col p-2 space-y-1">
                                        <a href="/profile" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                                            <svg className="w-5 h-5 text-[#2D4CB1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A9.96 9.96 0 0112 15c2.348 0 4.502.87 6.129 2.304m-12.258 0A8.001 8.001 0 1012 2a8.001 8.001 0 00-7.258 15.804zM12 12a4 4 0 100-8 4 4 0 000 8z"></path></svg>
                                            <span>Profile</span>
                                        </a>
                                        <a href="/dashboard" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                                            <svg className="w-5 h-5 text-[#2D4CB1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-4v4m-4-4v4m-2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                            <span>Dashboard</span>
                                        </a>
                                        <button onClick={handleLogout} className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-red-500 hover:bg-red-100 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        // সাইন আপ বাটন - যখন ব্যবহারকারী লগইন করা থাকবে না
                        <>
                            <Link href={"/login"} className="text-white font-semibold px-4 py-2 rounded-full hover:text-yellow-300 transition-colors uppercase cursor-pointer">
                                🔑 Login
                            </Link>
                            <Link href={"/sign-up"} className="bg-[#A00034] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#8E24AA] transition-colors uppercase cursor-pointer">
                                🆕 Sign Up
                            </Link>
                        </>
                    )}
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
                                    href="/all_departments"
                                    className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                                >
                                    Departments
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
                                href="/all-courses"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                Courses
                            </a>
                            <a
                                href="/about-us"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                About Us
                            </a>
                            <a
                                href="/all-notices"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                Notices
                            </a>
                            <a
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                Contact
                            </a>
                            <a
                                href="/all-faq"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-xl hover:text-yellow-300 transition-colors uppercase font-medium"
                            >
                                FAQ
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
                        {session ? (
                            <>
                                <div className="mt-8 text-center flex flex-col space-y-4">
                                    <h3 className="text-xl font-bold">{session.user.name}</h3>
                                    <button onClick={handleLogout} className="bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-500 transition-colors uppercase cursor-pointer">
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <Link href={"/sign-up"} className="mt-8 bg-[#A00034] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#8E24AA] transition-colors uppercase cursor-pointer">
                                🆕 Sign Up
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
