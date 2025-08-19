'use client';

import React from 'react';

// এটি একটি একক এবং স্বাধীন WhyChooseUs কম্পোনেন্ট।
// এই কম্পোনেন্টটি আপনার Next.js অ্যাপের যেকোনো পেজে ব্যবহার করা যাবে।

const WhyChooseUs = () => {
    const features = [
        { icon: '🎥', headline: 'Semester-wise video classes', description: 'Structured lessons arranged by department & semester.' },
        { icon: '📝', headline: 'Notes & resources included', description: 'Downloadable notes, handouts, and formula sheets.' },
        { icon: '📱', headline: 'Mobile friendly learning', description: 'Responsive UI; optimized playback for low bandwidth.' },
        { icon: '🎯', headline: 'Exam focused coaching', description: 'MCQ practice, model tests, and past paper solutions.' },
        { icon: '🏫', headline: 'Offline support classes', description: 'In-person sessions for extra guidance and problem-solving.' },
    ];

    return (
        <section className="py-16 md:py-24 bg-[#F9FAFB] text-[#1B2C59] rounded-t-4xl">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Students Choose Tech Tuition Care</h2>
                    <p className="text-lg text-gray-600">Blending online flexibility with offline support to make Polytechnic learning easier, structured, and effective.</p>
                </div>
                {/* Desktop layout: 3 cards, then 2 cards */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-3 gap-8 mb-8">
                        {features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="text-5xl mb-4 text-[#2E7D32]">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.headline}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {features.slice(3, 5).map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="text-5xl mb-4 text-[#2E7D32]">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.headline}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tablet and Mobile layout */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="text-5xl mb-4 text-[#2E7D32]">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.headline}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
