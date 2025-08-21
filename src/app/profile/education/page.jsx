'use client';

import React from 'react';

// এটি আপনার Education পেজের কন্টেন্ট।
// এখানে আপনি ব্যবহারকারীর শিক্ষাগত যোগ্যতা সংক্রান্ত ডেটা লোড এবং প্রদর্শন করতে পারেন।
const EducationPage = () => {
    // ডেমো ডেটা। আপনি এখানে API থেকে ডেটা নিয়ে ব্যবহার করতে পারেন।
    const educationHistory = [
        { degree: 'Bachelor of Science in Computer Science', institution: 'Example University', year: '2023', details: 'Graduated with Honors.' },
        { degree: 'Higher Secondary School Certificate', institution: 'Example College', year: '2019', details: 'Science Group.' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1B2C59]">Education</h2>

            {educationHistory.map((edu, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-[#2D4CB1] mb-1">{edu.degree}</h3>
                    <p className="text-gray-700"><strong>Institution:</strong> {edu.institution}</p>
                    <p className="text-gray-700"><strong>Year:</strong> {edu.year}</p>
                    <p className="text-gray-700"><strong>Details:</strong> {edu.details}</p>
                </div>
            ))}
        </div>
    );
};

export default EducationPage;
