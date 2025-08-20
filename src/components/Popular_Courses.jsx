'use client';

import Link from 'next/link';
import React from 'react';

const PopularCourses = () => {
    const popularCourses = [
        {
            title: 'Basic Electrical Circuits',
            description: 'Essential concepts of circuits, Ohm\'s Law, and Kirchhoff\'s Law.',
            image: 'https://placehold.co/400x250/2D4CB1/FFFFFF?text=Basic+Circuits'
        },
        {
            title: 'Programming in C',
            description: 'Master the fundamentals of C programming for computer technology.',
            image: 'https://placehold.co/400x250/2E7D32/FFFFFF?text=Programming+in+C'
        },
        {
            title: 'Engineering Drawing',
            description: 'Learn to create and interpret technical drawings and plans.',
            image: 'https://placehold.co/400x250/A00034/FFFFFF?text=Engineering+Drawing'
        },
        {
            title: 'Power System Analysis',
            description: 'Study the generation, transmission, and distribution of electricity.',
            image: 'https://placehold.co/400x250/8E24AA/FFFFFF?text=Power+System'
        },
        {
            title: 'Structural Mechanics',
            description: 'Understand how forces and loads affect physical structures.',
            image: 'https://placehold.co/400x250/1B2C59/FFFFFF?text=Structural+Mechanics'
        },
        {
            title: 'Fluid Mechanics',
            description: 'A structured curriculum designed to build your skills from the ground up.',
            image: 'https://placehold.co/400x250/2D4CB1/FFFFFF?text=Fluid+Mechanics'
        },
        {
            title: 'Microcontroller & PLC',
            description: 'Learn to program and interface microcontrollers and PLCs.',
            image: 'https://placehold.co/400x250/2E7D32/FFFFFF?text=Microcontroller'
        },
        {
            title: 'Web Development Basics',
            description: 'Learn to build modern, responsive websites from scratch.',
            image: 'https://placehold.co/400x250/A00034/FFFFFF?text=Web+Development'
        },
        {
            title: 'Digital Electronics',
            description: 'Explore the world of digital circuits, logic gates, and boolean algebra.',
            image: 'https://placehold.co/400x250/8E24AA/FFFFFF?text=Digital+Electronics'
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-[#F9FAFB]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B2C59] mb-2">Popular Courses</h2>
                    <p className="text-lg text-gray-600">Students love these courses! Explore our most popular video lessons and start learning today.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {popularCourses.map((course, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer">
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-2xl" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#1B2C59] mb-2">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                                <button className="bg-[#A00034] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#8E24AA] transition-colors uppercase text-sm">
                                    View Course
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href={"/courses"} className="bg-[#A00034] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#8E24AA] transition-colors uppercase cursor-pointer">
                        See All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;
