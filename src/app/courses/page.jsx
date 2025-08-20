'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ডাইনামিক কোর্সের ডেটা ইম্পোর্ট করা হয়েছে
import coursesData from '../../data/homeCourses.json';

const CoursesPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [selectedSemester, setSelectedSemester] = useState('All');
    const [filteredCourses, setFilteredCourses] = useState([]);

    // ডাইনামিক ফিল্টার অপশন তৈরি করা
    const departments = ['All', ...new Set(coursesData.courses.map(course => course.department))];
    const semesters = ['All', ...new Set(coursesData.courses.map(course => course.semester))];

    useEffect(() => {
        let tempCourses = coursesData.courses;

        if (selectedDepartment !== 'All') {
            tempCourses = tempCourses.filter(course => course.department === selectedDepartment);
        }

        if (selectedSemester !== 'All') {
            tempCourses = tempCourses.filter(course => course.semester === selectedSemester);
        }

        setFilteredCourses(tempCourses);
    }, [selectedDepartment, selectedSemester]);

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

                {/* Filter Section */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                    {/* Department Filter */}
                    <div className="relative w-full sm:w-1/2">
                        <select
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1]"
                        >
                            <option value="All">All Departments</option>
                            {departments.map((dept, index) => (
                                <option key={index} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>

                    {/* Semester Filter */}
                    <div className="relative w-full sm:w-1/2">
                        <select
                            value={selectedSemester}
                            onChange={(e) => setSelectedSemester(e.target.value)}
                            className="block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2D4CB1] focus:border-[#2D4CB1]"
                        >
                            <option value="All">All Semesters</option>
                            {semesters.map((sem, index) => (
                                <option key={index} value={sem}>{sem}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, index) => (
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
                                        <Link href={`/courses/${course.code}`}>
                                            <button className="w-full py-2 px-4 rounded-md bg-[#A00034] text-white font-semibold hover:bg-[#8E24AA] transition-colors">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-lg text-gray-600">No courses found for the selected filters.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
