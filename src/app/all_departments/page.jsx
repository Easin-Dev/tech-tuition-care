'use client';

import React, { useState } from 'react';

const DepartmentsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    // বিস্তারিত সেমিস্টার ডেটা সহ ডাইনামিক ডিপার্টমেন্ট ডেটা
    const departmentsData = {
        'Computer Technology': {
            image: 'https://placehold.co/400x300/2D4CB1/FFFFFF?text=💻+Computer',
            semesters: [
                {
                    name: '1st Semester',
                    courses: [
                        { title: 'Computer Application', code: '66611', details: 'Introduction to computer, operating systems, and basic software applications.' },
                        { title: 'Digital Electronics', code: '66612', details: 'Fundamental concepts of digital circuits, logic gates, and Boolean algebra.' },
                        { title: 'Basic Programming', code: '66613', details: 'Introduction to programming principles using C language.' },
                    ],
                },
                {
                    name: '2nd Semester',
                    courses: [
                        { title: 'Data Structure', code: '66621', details: 'Organizing and managing data efficiently using various data structures.' },
                        { title: 'Operating Systems', code: '66622', details: 'Core concepts of operating systems like processes, memory, and file management.' },
                        { title: 'Object-Oriented Programming', code: '66623', details: 'Principles of OOP using languages like C++ or Java.' },
                    ],
                },
                {
                    name: '3rd Semester',
                    courses: [
                        { title: 'Database Management System', code: '66631', details: 'Designing, implementing, and managing databases with SQL.' },
                        { title: 'Web Development', code: '66632', details: 'Building modern web applications using HTML, CSS, and JavaScript.' },
                        { title: 'Networking Fundamentals', code: '66633', details: 'Basic concepts of computer networks and network devices.' },
                    ],
                },
                {
                    name: '4th Semester',
                    courses: [
                        { title: 'Software Engineering', code: '66641', details: 'Systematic approach to software development, from design to maintenance.' },
                        { title: 'Advanced Web Development', code: '66642', details: 'Frameworks like React or Vue and backend technologies like Node.js.' },
                        { title: 'Cyber Security', code: '66643', details: 'Protecting systems, networks, and data from digital attacks.' },
                    ],
                },
                {
                    name: '5th Semester',
                    courses: [
                        { title: 'Mobile Application Development', code: '66651', details: 'Developing apps for Android and iOS using frameworks like React Native.' },
                        { title: 'Cloud Computing', code: '66652', details: 'Introduction to cloud services, deployment models, and virtualization.' },
                        { title: 'Internet of Things (IoT)', code: '66653', details: 'Interconnecting physical devices and building smart systems.' },
                    ],
                },
                {
                    name: '6th Semester',
                    courses: [
                        { title: 'Artificial Intelligence', code: '66661', details: 'Core concepts of AI, including machine learning and neural networks.' },
                        { title: 'Machine Learning', code: '66662', details: 'Algorithms for data analysis and predictive modeling.' },
                        { title: 'Network Security', code: '66663', details: 'Advanced security protocols and network protection techniques.' },
                    ],
                },
                {
                    name: '7th Semester',
                    courses: [
                        { title: 'Data Science', code: '66671', details: 'Techniques for extracting knowledge and insights from structured and unstructured data.' },
                        { title: 'Project Management', code: '66672', details: 'Managing software projects using agile and waterfall methodologies.' },
                        { title: 'Cloud Security', code: '66673', details: 'Ensuring security and privacy in cloud-based systems.' },
                    ],
                },
                {
                    name: '8th Semester',
                    courses: [
                        { title: 'Project & Thesis', code: '66681', details: 'A capstone project applying all learned skills and knowledge.' },
                        { title: 'Professional Practice', code: '66682', details: 'Ethics, professional conduct, and career preparation.' },
                        { title: 'Seminar', code: '66683', details: 'Research and presentation on a cutting-edge technology topic.' },
                    ],
                },
            ],
        },
        'Electrical Engineering': {
            image: 'https://placehold.co/400x300/2E7D32/FFFFFF?text=⚡+Electrical',
            semesters: [
                {
                    name: '1st Semester',
                    courses: [
                        { title: 'Basic Electrical Circuits', code: '66711', details: 'Ohm’s Law, Kirchhoff’s Laws, and analysis of series and parallel circuits.' },
                        { title: 'Electrical Drawing', code: '66712', details: 'Interpretation and creation of electrical circuit diagrams and layouts.' },
                    ],
                },
                {
                    name: '2nd Semester',
                    courses: [
                        { title: 'AC/DC Machines', code: '66721', details: 'Working principles and applications of motors and generators.' },
                        { title: 'Power Electronics', code: '66722', details: 'Control of electrical power using solid-state electronic devices.' },
                    ],
                },
                {
                    name: '3rd Semester',
                    courses: [
                        { title: 'Industrial Automation', code: '66731', details: 'Using PLCs and microcontrollers to automate industrial processes.' },
                        { title: 'Power System Analysis', code: '66732', details: 'Study of power generation, transmission, and distribution systems.' },
                    ],
                },
                {
                    name: '4th Semester',
                    courses: [
                        { title: 'Control Systems', code: '66741', details: 'Theory and design of open-loop and closed-loop control systems.' },
                        { title: 'Renewable Energy Systems', code: '66742', details: 'Introduction to solar, wind, and other renewable energy sources.' },
                    ],
                },
                {
                    name: '5th Semester',
                    courses: [
                        { title: 'High Voltage Engineering', code: '66751', details: 'Study of high voltage generation, measurement, and insulation systems.' },
                        { title: 'Electrical Machines-II', code: '66752', details: 'Advanced concepts of electrical machine design and performance.' },
                    ],
                },
                {
                    name: '6th Semester',
                    courses: [
                        { title: 'Electrical Design & Estimation', code: '66761', details: 'Principles of electrical system design, load calculation, and cost estimation.' },
                        { title: 'Instrumentation', code: '66762', details: 'Measurement techniques and instruments used in electrical engineering.' },
                    ],
                },
                {
                    name: '7th Semester',
                    courses: [
                        { title: 'Power Plant Engineering', code: '66771', details: 'Study of thermal, hydro, and nuclear power plants.' },
                        { title: 'Protection & Switchgear', code: '66772', details: 'Protecting power systems from faults using relays and circuit breakers.' },
                    ],
                },
                {
                    name: '8th Semester',
                    courses: [
                        { title: 'Project & Thesis', code: '66781', details: 'A capstone project applying all learned skills in a practical setting.' },
                        { title: 'Seminar', code: '66782', details: 'Research and presentation on a specialized electrical engineering topic.' },
                    ],
                },
            ],
        },
        'Civil Engineering': {
            image: 'https://placehold.co/400x300/A00034/FFFFFF?text=🏗️+Civil',
            semesters: [
                {
                    name: '1st Semester',
                    courses: [
                        { title: 'Engineering Drawing', code: '66411', details: 'Fundamentals of technical drawing and graphical communication.' },
                        { title: 'Basic Surveying', code: '66412', details: 'Principles and practices of land measurement and mapping.' },
                    ],
                },
                {
                    name: '2nd Semester',
                    courses: [
                        { title: 'Structural Mechanics', code: '66421', details: 'Analysis of forces and stresses in structures and materials.' },
                        { title: 'Concrete Technology', code: '66422', details: 'Properties, design, and applications of concrete.' },
                    ],
                },
                {
                    name: '3rd Semester',
                    courses: [
                        { title: 'Soil Mechanics', code: '66431', details: 'Study of soil properties and their behavior under different loads.' },
                        { title: 'Hydraulics', code: '66432', details: 'Principles of fluid mechanics and its applications in civil engineering.' },
                    ],
                },
                {
                    name: '4th Semester',
                    courses: [
                        { title: 'Construction Management', code: '66441', details: 'Planning, scheduling, and managing construction projects.' },
                        { title: 'Highway Engineering', code: '66442', details: 'Design, construction, and maintenance of roads and highways.' },
                    ],
                },
                {
                    name: '5th Semester',
                    courses: [
                        { title: 'Fluid Mechanics', code: '66451', details: 'Study of fluid behavior and its interaction with structures.' },
                        { title: 'Water Supply Engineering', code: '66452', details: 'Design and management of water treatment and distribution systems.' },
                    ],
                },
                {
                    name: '6th Semester',
                    courses: [
                        { title: 'Building Materials', code: '66461', details: 'Properties and applications of various materials used in construction.' },
                        { title: 'Foundation Engineering', code: '66462', details: 'Principles of foundation design and analysis.' },
                    ],
                },
                {
                    name: '7th Semester',
                    courses: [
                        { title: 'Steel Structures', code: '66471', details: 'Design and analysis of steel structures.' },
                        { title: 'Transportation Engineering', code: '66472', details: 'Planning, design, and operation of transportation systems.' },
                    ],
                },
                {
                    name: '8th Semester',
                    courses: [
                        { title: 'Project & Thesis', code: '66481', details: 'A capstone project applying all learned skills and knowledge.' },
                        { title: 'Environmental Engineering', code: '66482', details: 'Principles of environmental protection and sustainable development.' },
                    ],
                },
            ],
        },
        'Electronics Engineering': {
            image: 'https://placehold.co/400x300/8E24AA/FFFFFF?text=🔌+Electronics',
            semesters: [
                {
                    name: '1st Semester',
                    courses: [
                        { title: 'Basic Electronics', code: '66811', details: 'Fundamentals of semiconductor devices and their applications.' },
                        { title: 'Analog Circuits', code: '66812', details: 'Analysis and design of analog circuits using transistors and op-amps.' },
                    ],
                },
                {
                    name: '2nd Semester',
                    courses: [
                        { title: 'Digital Circuits', code: '66821', details: 'Design and analysis of logic circuits, flip-flops, and counters.' },
                        { title: 'Microprocessors', code: '66822', details: 'Architecture and programming of microprocessors and microcontrollers.' },
                    ],
                },
                {
                    name: '3rd Semester',
                    courses: [
                        { title: 'Communication Systems', code: '66831', details: 'Principles of analog and digital communication systems.' },
                        { title: 'Sensors and Transducers', code: '66832', details: 'Working principles and applications of various sensors.' },
                    ],
                },
                {
                    name: '4th Semester',
                    courses: [
                        { title: 'VLSI Design', code: '66841', details: 'Designing and fabricating integrated circuits.' },
                        { title: 'Embedded Systems', code: '66842', details: 'Developing firmware and hardware for embedded systems.' },
                    ],
                },
                {
                    name: '5th Semester',
                    courses: [
                        { title: 'Power Electronics', code: '66851', details: 'Control of electrical power using electronic switches.' },
                        { title: 'Robotics', code: '66852', details: 'Introduction to robotics, including kinematics and control.' },
                    ],
                },
                {
                    name: '6th Semester',
                    courses: [
                        { title: 'Data Communication', code: '66861', details: 'Principles of data transmission, networking, and protocols.' },
                        { title: 'RF Engineering', code: '66862', details: 'Design and analysis of radio frequency circuits and systems.' },
                    ],
                },
                {
                    name: '7th Semester',
                    courses: [
                        { title: 'Antennas and Propagation', code: '66871', details: 'Study of antenna theory and wave propagation.' },
                        { title: 'Optoelectronics', code: '66872', details: 'Principles of optical devices and their applications in communication.' },
                    ],
                },
                {
                    name: '8th Semester',
                    courses: [
                        { title: 'Project & Thesis', code: '66881', details: 'A final project showcasing learned skills in electronics.' },
                        { title: 'Industrial Electronics', code: '66882', details: 'Application of electronics in industrial control and automation.' },
                    ],
                },
            ],
        },
        'Mechanical Engineering': {
            image: 'https://placehold.co/400x300/1B2C59/FFFFFF?text=⚙️+Mechanical',
            semesters: [
                {
                    name: '1st Semester',
                    courses: [
                        { title: 'Engineering Mechanics', code: '66911', details: 'Analysis of forces, motion, and their effects on physical systems.' },
                        { title: 'Thermodynamics', code: '66912', details: 'Study of heat, work, and energy transfers.' },
                    ],
                },
                {
                    name: '2nd Semester',
                    courses: [
                        { title: 'Fluid Mechanics', code: '66921', details: 'Properties and behavior of fluids at rest and in motion.' },
                        { title: 'Machine Design', code: '66922', details: 'Principles of designing and analyzing mechanical components.' },
                    ],
                },
                {
                    name: '3rd Semester',
                    courses: [
                        { title: 'Heat Transfer', code: '66931', details: 'Conduction, convection, and radiation principles in engineering.' },
                        { title: 'Manufacturing Process', code: '66932', details: 'Techniques for converting raw materials into finished products.' },
                    ],
                },
                {
                    name: '4th Semester',
                    courses: [
                        { title: 'CAD/CAM', code: '66941', details: 'Using computer software for design and manufacturing.' },
                        { title: 'Automobile Engineering', code: '66942', details: 'Study of vehicle systems, engines, and performance.' },
                    ],
                },
                {
                    name: '5th Semester',
                    courses: [
                        { title: 'Power Plant Engineering', code: '66951', details: 'Design and operation of power generation plants.' },
                        { title: 'Refrigeration & Air Conditioning', code: '66952', details: 'Principles and systems of cooling and climate control.' },
                    ],
                },
                {
                    name: '6th Semester',
                    courses: [
                        { title: 'Industrial Management', code: '66961', details: 'Management of industrial resources and operations.' },
                        { title: 'Mechatronics', code: '66962', details: 'Integration of mechanical, electrical, and computer engineering.' },
                    ],
                },
                {
                    name: '7th Semester',
                    courses: [
                        { title: 'Machine Tools', code: '66971', details: 'Working principles and operation of various machine tools.' },
                        { title: 'Dynamics of Machinery', code: '66972', details: 'Analysis of forces and motion in mechanical systems.' },
                    ],
                },
                {
                    name: '8th Semester',
                    courses: [
                        { title: 'Project & Thesis', code: '66981', details: 'A capstone project applying comprehensive mechanical engineering knowledge.' },
                        { title: 'Quality Control', code: '66982', details: 'Methods for ensuring product quality and process reliability.' },
                    ],
                },
            ],
        },
        'Architecture Technology': {
            image: 'https://placehold.co/400x300/2D4CB1/FFFFFF?text=📐+Architecture',
            semesters: [
                {
                    name: '1st Semester',
                    courses: [
                        { title: 'Architectural Graphics', code: '67011', details: 'Fundamentals of architectural drawing and visual communication.' },
                        { title: 'Building Materials', code: '67012', details: 'Properties and applications of materials in architectural design.' },
                    ],
                },
                {
                    name: '2nd Semester',
                    courses: [
                        { title: 'History of Architecture', code: '67021', details: 'Studying architectural styles and movements through history.' },
                        { title: 'Structural Design', code: '67022', details: 'Basic principles of structural design for buildings.' },
                    ],
                },
                {
                    name: '3rd Semester',
                    courses: [
                        { title: 'Urban Planning', code: '67031', details: 'Designing and planning urban spaces for sustainable development.' },
                        { title: 'Interior Design', code: '67032', details: 'Principles of interior space planning and aesthetics.' },
                    ],
                },
                {
                    name: '4th Semester',
                    courses: [
                        { title: 'Landscape Architecture', code: '67041', details: 'Designing outdoor spaces and managing natural resources.' },
                        { title: 'Sustainable Design', code: '67042', details: 'Environmentally friendly design principles and practices.' },
                    ],
                },
                {
                    name: '5th Semester',
                    courses: [
                        { title: 'Construction Management', code: '67051', details: 'Managing architectural projects from conception to completion.' },
                        { title: 'Building Services', code: '67052', details: 'Designing systems for lighting, ventilation, and plumbing.' },
                    ],
                },
                {
                    name: '6th Semester',
                    courses: [
                        { title: 'Architectural Drawing', code: '67061', details: 'Advanced techniques in architectural drafting and representation.' },
                        { title: 'Project Management', code: '67062', details: 'Planning and execution of architectural projects.' },
                    ],
                },
                {
                    name: '7th Semester',
                    courses: [
                        { title: 'Acoustics & Lighting', code: '67071', details: 'Designing spaces with optimal sound and lighting conditions.' },
                        { title: 'Professional Practice', code: '67072', details: 'Ethics, legal aspects, and business practices in architecture.' },
                    ],
                },
                {
                    name: '8th Semester',
                    courses: [
                        { title: 'Project & Thesis', code: '67081', details: 'A final design project and research paper.' },
                        { title: 'Advanced Design Studio', code: '67082', details: 'Hands-on advanced architectural design projects.' },
                    ],
                },
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
                            <li key={index}>
                                <span className="font-semibold">{course.title} ({course.code}):</span> {course.details}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <section className="py-16 md:py-24 bg-gray-100">
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
                    <button className="bg-[#A00034] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#8E24AA] transition-colors uppercase cursor-pointer">
                        See All
                    </button>
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

export default DepartmentsPage;
