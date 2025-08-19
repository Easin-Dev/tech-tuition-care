'use client';

import React, { useState, useEffect } from 'react';

// এটি একটি একক এবং স্বাধীন Counters/Achievements কম্পোনেন্ট।
// এই কম্পোনেন্টটি আপনার Next.js অ্যাপের যেকোনো পেজে ব্যবহার করা যাবে।
// এখানে সকল ডেটা ডাইনামিক রাখা হয়েছে এবং কাউন্টার অ্যানিমেশন যুক্ত করা হয়েছে।

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

    return <span className="text-3xl md:text-4xl font-bold">{count}+</span>;
};

const CountersSection = () => {
    const stats = [
        { count: 1200, label: 'Active Students', icon: '👨‍🎓' },
        { count: 5, label: 'Departments', icon: '🎓' },
        { count: 80, label: 'Courses', icon: '📚' },
        { count: 1500, label: 'Video Lessons', icon: '🎥' },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B2C59] mb-2">Our Achievements</h2>
                    <p className="text-lg text-gray-600">Numbers speak for themselves. See our impact so far.</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border-b-4 border-[#2D4CB1] transform hover:-translate-y-2 transition-transform duration-300">
                            <span className="text-5xl mb-3 text-[#2E7D32]">{stat.icon}</span>
                            <Counter end={stat.count} duration={2000} />
                            <p className="text-base text-gray-600 font-medium mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountersSection;
