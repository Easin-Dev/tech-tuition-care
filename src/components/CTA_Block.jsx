'use client';

import React from 'react';

const CTASection = () => {
    const backgroundImage = "https://i.ibb.co/L5hY6vj/Gemini-Generated-Image-4b4w8c4b4w8c4b4w.jpg";

    return (
        <section
            className="py-16 md:py-24 bg-[#2D4CB1] text-white relative overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your Polytechnic journey?</h2>
                <button className="bg-[#A00034] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#8E24AA] transition-colors uppercase cursor-pointer text-lg">
                    Sign Up Today
                </button>
            </div>
        </section>
    );
};

export default CTASection;
