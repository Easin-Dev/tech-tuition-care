'use client';

import React from 'react';
import Link from 'next/link';

const CoursesPage = () => {
    // ডাইনামিক কোর্সের ডেটা। আপনার প্রয়োজন অনুযায়ী পরিবর্তন করতে পারেন।
    const courses = [
        {
            title: 'Basic Electrical Circuits',
            code: '66711',
            department: 'Electrical Engineering',
            semester: '1st Semester',
            description: 'This course covers the fundamental principles of electrical circuits, including Ohm’s Law, Kirchhoff’s Laws, and analysis of series and parallel circuits.',
            image: 'https://placehold.co/400x250/2D4CB1/FFFFFF?text=Basic+Circuits'
        },
        {
            title: 'Programming in C',
            code: '66623',
            department: 'Computer Technology',
            semester: '2nd Semester',
            description: 'An introductory course to C programming, focusing on core concepts like data types, control structures, and functions.',
            image: 'https://placehold.co/400x250/2E7D32/FFFFFF?text=C+Programming'
        },
        {
            title: 'Engineering Drawing',
            code: '66411',
            department: 'Civil Engineering',
            semester: '1st Semester',
            description: 'Learn the principles of technical drawing, including orthographic projection and drafting standards.',
            image: 'https://placehold.co/400x250/A00034/FFFFFF?text=Eng+Drawing'
        },
        {
            title: 'Digital Electronics',
            code: '66821',
            department: 'Electronics Engineering',
            semester: '2nd Semester',
            description: 'This course explores the world of digital circuits, logic gates, and Boolean algebra, essential for electronics.',
            image: 'https://placehold.co/400x250/8E24AA/FFFFFF?text=Digital+Electronics'
        },
        {
            title: 'Fluid Mechanics',
            code: '66921',
            department: 'Mechanical Engineering',
            semester: '2nd Semester',
            description: 'Study the properties and behavior of fluids at rest and in motion, crucial for mechanical engineering applications.',
            image: 'https://placehold.co/400x250/1B2C59/FFFFFF?text=Fluid+Mechanics'
        },
        {
            title: 'Structural Mechanics',
            code: '66421',
            department: 'Civil Engineering',
            semester: '2nd Semester',
            description: 'Analysis of forces and stresses in structures, covering topics like beams, columns, and trusses.',
            image: 'https://placehold.co/400x250/2D4CB1/FFFFFF?text=Structural+Mechanics'
        },
        {
            title: 'Data Structure',
            code: '66621',
            department: 'Computer Technology',
            semester: '2nd Semester',
            description: 'Learn to organize and manage data efficiently using arrays, linked lists, stacks, and queues.',
            image: 'https://placehold.co/400x250/2E7D32/FFFFFF?text=Data+Structure'
        },
        {
            title: 'Automobile Engineering',
            code: '66942',
            department: 'Mechanical Engineering',
            semester: '4th Semester',
            description: 'An introduction to vehicle systems, including engines, transmissions, and suspension.',
            image: 'https://placehold.co/400x250/A00034/FFFFFF?text=Automobile+Eng'
        },
        {
            title: 'Microprocessors',
            code: '66822',
            department: 'Electronics Engineering',
            semester: '2nd Semester',
            description: 'Study the architecture and programming of microprocessors and microcontrollers.',
            image: 'https://placehold.co/400x250/8E24AA/FFFFFF?text=Microprocessors'
        },
        {
            title: 'Power System Analysis',
            code: '66732',
            department: 'Electrical Engineering',
            semester: '3rd Semester',
            description: 'A study of power generation, transmission, and distribution systems.',
            image: 'https://placehold.co/400x250/1B2C59/FFFFFF?text=Power+System+Analysis'
        },
        {
            title: 'Web Development Basics',
            code: '66632',
            department: 'Computer Technology',
            semester: '3rd Semester',
            description: 'Building modern web applications using HTML, CSS, and JavaScript.',
            image: 'https://placehold.co/400x250/2D4CB1/FFFFFF?text=Web+Development'
        },
        {
            title: 'Construction Management',
            code: '66441',
            department: 'Civil Engineering',
            semester: '4th Semester',
            description: 'Planning, scheduling, and managing construction projects from start to finish.',
            image: 'https://placehold.co/400x250/2E7D32/FFFFFF?text=Construction+Mgmt'
        },
        {
            title: 'Industrial Electronics',
            code: '66851',
            department: 'Electronics Engineering',
            semester: '5th Semester',
            description: 'Control of electrical power using electronic switches and devices.',
            image: 'https://placehold.co/400x250/A00034/FFFFFF?text=Industrial+Electronics'
        },
        {
            title: 'Refrigeration & AC',
            code: '66952',
            department: 'Mechanical Engineering',
            semester: '5th Semester',
            description: 'Principles and systems of cooling, refrigeration, and climate control technologies.',
            image: 'https://placehold.co/400x250/8E24AA/FFFFFF?text=Refrigeration'
        },
        {
            title: 'Urban Planning',
            code: '67031',
            department: 'Architecture Technology',
            semester: '3rd Semester',
            description: 'Designing and planning urban spaces for sustainable development and growth.',
            image: 'https://placehold.co/400x250/1B2C59/FFFFFF?text=Urban+Planning'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1B2C59]">
                        All Courses
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Browse our extensive catalog of courses organized by department and semester.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#2D4CB1]">{course.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{course.department} | {course.semester}</p>
                                <p className="mt-4 text-gray-600">{course.description}</p>
                                <div className="mt-6">
                                    <Link href={`/courses/${course.code.toLowerCase()}`}>
                                        <button className="w-full py-2 px-4 rounded-md bg-[#A00034] text-white font-semibold hover:bg-[#8E24AA] transition-colors">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
