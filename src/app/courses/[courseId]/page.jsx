'use client';

import React from 'react';
import Link from 'next/link';

// ডাইনামিক কোর্সের ডেটা ইম্পোর্ট করা হয়েছে
import coursesData from '../../../data/homeCourses.json';

// এই পেজটি URL থেকে courseId নিয়ে নির্দিষ্ট কোর্সের বিস্তারিত তথ্য দেখাবে
const CourseDetailsPage = ({ params }) => {
    const { courseId } = params;

    // courseId এর উপর ভিত্তি করে courses.json থেকে নির্দিষ্ট কোর্সটি খুঁজে বের করা
    const course = coursesData.courses.find(c => c.code === courseId);

    // যদি কোর্স খুঁজে না পাওয়া যায়, তবে একটি এরর মেসেজ দেখানো
    if (!course) {
        return (
            <div className="min-h-screen bg-gray-100 py-12 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-red-600">404 - Course Not Found</h1>
                    <p className="mt-4 text-lg text-gray-600">The course you are looking for does not exist.</p>
                    <Link href="/courses">
                        <button className="mt-6 bg-[#A00034] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#8E24AA] transition-colors cursor-pointer">
                            Browse All Courses
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12">
                    {/* Course Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1B2C59]">{course.title}</h1>
                        <p className="mt-2 text-lg text-gray-600">{course.department} | {course.semester}</p>
                    </div>

                    {/* Course Image */}
                    <img src={course.image} alt={course.title} className="w-full h-auto rounded-xl shadow-lg mb-8" />

                    {/* Course Details Grid */}
                    <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                        {/* Course Description and Modules (Left Column) */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-[#2D4CB1] mb-4">About this Course</h2>
                            <p className="text-gray-700 mb-8">{course.description}</p>

                            <h2 className="text-3xl font-bold text-[#2D4CB1] mb-4">Course Modules</h2>
                            <div className="space-y-4">
                                {course.modules.map((module, index) => (
                                    <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                        <h3 className="text-xl font-bold text-[#1B2C59]">{module.title}</h3>
                                        <p className="mt-2 text-gray-600">{module.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar with CTA (Right Column) */}
                        <div className="lg:col-span-1 mt-8 lg:mt-0">
                            <div className="bg-gray-50 rounded-xl p-6 shadow-md border-t-4 border-b-4 border-[#2D4CB1]">
                                <h3 className="text-2xl font-bold text-[#1B2C59] mb-4">Course Details</h3>
                                <div className="space-y-4 text-gray-700">
                                    <p><strong>Course Code:</strong> {course.code}</p>
                                    <p><strong>Instructor:</strong> John Doe</p>
                                    <p><strong>Duration:</strong> 12 Weeks</p>
                                    <p><strong>Lessons:</strong> 45 Videos</p>
                                    <button className="w-full py-3 px-4 rounded-full bg-[#A00034] text-white font-semibold hover:bg-[#8E24AA] transition-colors cursor-pointer">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;
