'use client';

import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1B2C59]">
                        About Tech Tuition Care
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Our mission is to empower polytechnic students for a brighter future.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* About Video Section */}
                    <div className="lg:col-span-1 rounded-xl shadow-lg overflow-hidden">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* About Text Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold text-[#2D4CB1] mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Tech Tuition Care was founded with a clear vision: to revolutionize polytechnic education in Bangladesh. We believe that every student deserves access to high-quality, structured, and practical-oriented learning resources that are tailored to their academic curriculum. Our mission is to provide an affordable and accessible platform that helps students not just pass their exams, but also build a strong foundation for their careers.
                        </p>
                        <h2 className="text-3xl font-bold text-[#2D4CB1] mb-4">Our Story</h2>
                        <p className="text-lg text-gray-700">
                            Starting as a small group of passionate educators, we identified a significant gap in online resources for polytechnic students. We saw the need for a platform that combines the flexibility of online learning with the structured approach of traditional coaching centers. With this in mind, we brought together a team of experienced instructors and technical experts to create a learning environment that is both effective and engaging.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
