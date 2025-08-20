'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// এটি একটি একক এবং স্বাধীন Hero Section কম্পোনেন্ট।
// এই কম্পোনেন্টটি আপনার Next.js অ্যাপের যেকোনো পেজে ব্যবহার করা যাবে।
// এখানে সকল ডেটা ডাইনামিক রাখা হয়েছে যাতে সহজেই পরিবর্তন করা যায়।

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return <span className="text-xl md:text-2xl font-bold">{count}+</span>;
};

const HeroSection = () => {
    // Hero Section এর ডাইনামিক ডেটা।
    const heroData = {
        headline: "Bangladesh’s First Polytechnic Online Learning Platform",
        subheadline: "Structured courses for Polytechnic students — with video lectures, notes, and practice tests.",
        stats: [
            { count: 1200, label: 'Students', icon: '👨‍🎓' },
            { count: 80, label: 'Courses', icon: '📚' },
            { count: 5, label: 'Departments', icon: '🏫' },
            { count: 1500, label: 'Videos', icon: '🎥' },
        ],
        imageUrl: 'https://i.ibb.co/L5hY6vj/Gemini-Generated-Image-4b4w8c4b4w8c4b4w.jpg',
    };

    return (
        <div className="bg-white text-[#2D4CB1] py-16 md:py-24 relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-50"> {/* Opacity 10% থেকে 20% করা হয়েছে */}
                <div className="h-full w-full bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
                {/* Left Side: Text and Buttons */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{heroData.headline}</h1>
                    <p className="text-lg md:text-xl mb-8">{heroData.subheadline}</p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link href={"/all-courses"} className="bg-[#A00034] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#8E24AA] transition-colors uppercase cursor-pointer">
                            Browse Courses
                        </Link>
                        <button className="text-[#A00034] border-2 border-[#A00034] font-semibold px-8 py-3 rounded-full hover:bg-[#A00034] hover:text-white transition-colors uppercase cursor-pointer">
                            Sign Up Free
                        </button>
                    </div>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {heroData.stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left p-4 bg-white rounded-lg shadow-md border-t-4 border-b-4 border-[#2D4CB1]">
                                <span className="text-4xl font-bold text-yellow-500">{stat.icon}</span>
                                <Counter end={stat.count} duration={2000} />
                                <p className="text-sm text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right Side: Image */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img src={heroData.imageUrl} alt="Students learning" className="rounded-lg shadow-xl max-w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
