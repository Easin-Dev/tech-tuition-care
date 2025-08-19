'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const DepartmentsSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    // সেমিস্টার ডেটা সহ ডাইনামিক ডিপার্টমেন্ট ডেটা
    const departmentsData = {
        'Computer Technology': {
            image: 'https://placehold.co/400x300/F9FAFB/1B2C59?text=💻',
            semesters: [
                { name: '1st Semester', courses: ['Basic Programming', 'Digital Electronics'] },
                { name: '2nd Semester', courses: ['Data Structure', 'Operating Systems'] },
                { name: '3rd Semester', courses: ['Database Management', 'Web Development'] },
                { name: '4th Semester', courses: ['Software Engineering', 'Networking'] },
                { name: '5th Semester', courses: ['Mobile Application', 'Cyber Security'] },
                { name: '6th Semester', courses: ['Cloud Computing', 'IoT'] },
                { name: '7th Semester', courses: ['Artificial Intelligence', 'Machine Learning'] },
                { name: '8th Semester', courses: ['Project & Thesis', 'Professional Practice'] },
            ],
        },
        'Electrical Engineering': {
            image: 'https://placehold.co/400x300/F9FAFB/1B2C59?text=⚡',
            semesters: [
                { name: '1st Semester', courses: ['Basic Electricity', 'Electrical Circuits'] },
                { name: '2nd Semester', courses: ['AC Machines', 'DC Machines'] },
                { name: '3rd Semester', courses: ['Power Electronics', 'Industrial Automation'] },
                { name: '4th Semester', courses: ['Power System Analysis', 'Control Systems'] },
                { name: '5th Semester', courses: ['Transmission & Distribution', 'Renewable Energy'] },
                { name: '6th Semester', courses: ['High Voltage Engineering', 'Electrical Machines-II'] },
                { name: '7th Semester', courses: ['Electrical Design', 'Instrumentation'] },
                { name: '8th Semester', courses: ['Project & Thesis', 'Seminar'] },
            ],
        },
        'Civil Engineering': {
            image: 'https://placehold.co/400x300/F9FAFB/1B2C59?text=🏗️',
            semesters: [
                { name: '1st Semester', courses: ['Engineering Drawing', 'Basic Surveying'] },
                { name: '2nd Semester', courses: ['Structural Mechanics', 'Concrete Technology'] },
                { name: '3rd Semester', courses: ['Soil Mechanics', 'Hydraulics'] },
                { name: '4th Semester', courses: ['Construction Management', 'Highway Engineering'] },
                { name: '5th Semester', courses: ['Fluid Mechanics', 'Water Supply'] },
                { name: '6th Semester', courses: ['Building Materials', 'Foundation Engineering'] },
                { name: '7th Semester', courses: ['Steel Structures', 'Transportation Engineering'] },
                { name: '8th Semester', courses: ['Project & Thesis', 'Environmental Engineering'] },
            ],
        },
        'Electronics Engineering': {
            image: 'https://placehold.co/400x300/F9FAFB/1B2C59?text=🔌',
            semesters: [
                { name: '1st Semester', courses: ['Basic Electronics', 'Analog Circuits'] },
                { name: '2nd Semester', courses: ['Digital Circuits', 'Microprocessors'] },
                { name: '3rd Semester', courses: ['Communication Systems', 'Sensors'] },
                { name: '4th Semester', courses: ['VLSI Design', 'Embedded Systems'] },
                { name: '5th Semester', courses: ['Power Electronics', 'Robotics'] },
                { name: '6th Semester', courses: ['Data Communication', 'RF Engineering'] },
                { name: '7th Semester', courses: ['Antennas', 'Optoelectronics'] },
                { name: '8th Semester', courses: ['Project & Thesis', 'Industrial Electronics'] },
            ],
        },
        'Mechanical Engineering': {
            image: 'https://placehold.co/400x300/F9FAFB/1B2C59?text=⚙️',
            semesters: [
                { name: '1st Semester', courses: ['Engineering Mechanics', 'Thermodynamics'] },
                { name: '2nd Semester', courses: ['Fluid Mechanics', 'Machine Design'] },
                { name: '3rd Semester', courses: ['Heat Transfer', 'Manufacturing Process'] },
                { name: '4th Semester', courses: ['CAD/CAM', 'Automobile Engineering'] },
                { name: '5th Semester', courses: ['Power Plant Engineering', 'Refrigeration'] },
                { name: '6th Semester', courses: ['Industrial Management', 'Mechatronics'] },
                { name: '7th Semester', courses: ['Machine Tools', 'Dynamics of Machinery'] },
                { name: '8th Semester', courses: ['Project & Thesis', 'Quality Control'] },
            ],
        },
        'Architecture Technology': {
            image: 'https://placehold.co/400x300/F9FAFB/1B2C59?text=📐',
            semesters: [
                { name: '1st Semester', courses: ['Architectural Graphics', 'Building Materials'] },
                { name: '2nd Semester', courses: ['History of Architecture', 'Structural Design'] },
                { name: '3rd Semester', courses: ['Urban Planning', 'Interior Design'] },
                { name: '4th Semester', courses: ['Landscape Architecture', 'Sustainable Design'] },
                { name: '5th Semester', courses: ['Construction Management', 'Building Services'] },
                { name: '6th Semester', courses: ['Architectural Drawing', 'Project Management'] },
                { name: '7th Semester', courses: ['Acoustics', 'Lighting Design'] },
                { name: '8th Semester', courses: ['Project & Thesis', 'Professional Practice'] },
            ],
        },
    };

    const handleCardClick = (deptName) => {
        setSelectedDepartment(departmentsData[deptName]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDepartment(null);
    };

    const SemesterDropdown = ({ semester }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center transition-colors hover:bg-gray-100"
                >
                    <span>{semester.name}</span>
                    <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                </button>
                <div className={`p-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {semester.courses.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <section className="py-16 md:py-24 bg-[#F9FAFB]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B2C59] mb-2">Departments</h2>
                    <p className="text-lg text-gray-600">Discover our core departments and the foundational courses they offer.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(departmentsData).map((deptName, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer"
                            onClick={() => handleCardClick(deptName)}
                        >
                            <img src={departmentsData[deptName].image} alt={`${deptName} icon`} className="w-full h-48 object-cover rounded-t-2xl" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#1B2C59] mb-2">{deptName}</h3>
                                <p className="text-gray-600">A structured curriculum designed to build your skills from the ground up.</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href={"/all_departments"} className="bg-[#A00034] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#8E24AA] transition-colors uppercase cursor-pointer">
                        See All
                    </Link>
                </div>
            </div>

            {/* Modal with blurred background */}
            {isModalOpen && selectedDepartment && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto relative">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
                        <h3 className="text-3xl font-bold text-[#1B2C59] mb-6">{Object.keys(departmentsData).find(key => departmentsData[key] === selectedDepartment)}</h3>
                        <div className="space-y-4">
                            {selectedDepartment.semesters.map((semester, index) => (
                                <SemesterDropdown key={index} semester={semester} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default DepartmentsSection;
