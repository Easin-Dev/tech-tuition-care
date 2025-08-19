'use client';

import React, { useState } from 'react';

const TestimonialsCarousel = () => {
    const [isHovered, setIsHovered] = useState(false);

    const testimonials = [
        {
            quote: "Tech Tuition Care-এর ভিডিও ক্লাসগুলো খুবই গোছানো। সেমিস্টার অনুযায়ী সাজানো থাকায় আমার প্রস্তুতি অনেক সহজ হয়েছে।",
            name: "Rifat Ahmed",
            bio: "Diploma in Computer Technology",
            image: "https://placehold.co/100x100/A00034/FFFFFF?text=RA"
        },
        {
            quote: "MCQ এবং মডেল টেস্টের জন্য আমি এখন অনেক আত্মবিশ্বাসী। অফলাইন সাপোর্টের কারণে কঠিন বিষয়গুলো সহজেই সমাধান করতে পেরেছি।",
            name: "Sumi Akter",
            bio: "Diploma in Electrical Engineering",
            image: "https://placehold.co/100x100/2D4CB1/FFFFFF?text=SA"
        },
        {
            quote: "মোবাইল-ফ্রেন্ডলি হওয়ায় বাসে যাতায়াতের সময়ও আমি ক্লাস করতে পারি। অল্প ব্যান্ডউইথেও ভিডিওগুলো স্মুথলি চলে।",
            name: "Kamal Hossain",
            bio: "Diploma in Civil Engineering",
            image: "https://placehold.co/100x100/2E7D32/FFFFFF?text=KH"
        },
        {
            quote: "Downloadable notes and handouts are a game-changer! I can revise anytime without an internet connection.",
            name: "Nusrat Jahan",
            bio: "Diploma in Electronics Engineering",
            image: "https://placehold.co/100x100/8E24AA/FFFFFF?text=NJ"
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-[#F9FAFB] overflow-hidden">
            <style>
                {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
            </style>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B2C59] mb-2">Student Testimonials</h2>
                    <p className="text-lg text-gray-600">Hear from our students who are achieving their goals with us.</p>
                </div>
                <div
                    className={`flex space-x-8 lg:space-x-12 overflow-x-hidden scrollbar-hide`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className={`flex space-x-8 lg:space-x-12 animate-[scroll-left_30s_linear_infinite] ${isHovered ? 'animate-none' : ''}`}>
                        {/* Duplicate cards for infinite loop effect */}
                        {Array(2).fill(testimonials).flat().map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-80 md:w-96 p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300"
                            >
                                <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center space-x-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#2D4CB1]" />
                                    <div>
                                        <h4 className="font-semibold text-[#1B2C59]">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.bio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;
