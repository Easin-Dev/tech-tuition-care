'use client';

import React, { useState } from 'react';

const FAQPage = () => {
    // FAQ ডেটা স্টোর করার জন্য স্টেট
    const [faqData, setFaqData] = useState([
        {
            id: 1,
            question: 'How do I enroll in a course?',
            answer: 'To enroll, simply navigate to the "Courses" page, select your desired course, and click on the "Enroll Now" button. Follow the instructions to complete the payment and registration process.',
            isOpen: false,
        },
        {
            id: 2,
            question: 'Are the video lessons available 24/7?',
            answer: 'Yes, all our video lessons are pre-recorded and available 24/7. You can access them at any time from any device, allowing you to learn at your own pace.',
            isOpen: false,
        },
        {
            id: 3,
            question: 'Do you offer offline support?',
            answer: 'Yes, we offer both online and offline support. Our instructors are available for live Q&A sessions, and you can also get in-person guidance through our scheduled offline support classes.',
            isOpen: false,
        },
        {
            id: 4,
            question: 'What types of courses do you offer?',
            answer: 'We offer a wide range of courses for various polytechnic departments, including Computer, Electrical, Civil, and Mechanical Engineering. All our courses are structured semester-wise to align with the polytechnic curriculum.',
            isOpen: false,
        },
        {
            id: 5,
            question: 'How can I contact support?',
            answer: 'You can contact our support team through the "Contact" page on our website. We also offer 24/7 support via phone and email for immediate assistance.',
            isOpen: false,
        },
    ]);

    // ড্রপডাউন টগল করার জন্য হ্যান্ডলার
    const toggleFAQ = (id) => {
        setFaqData(faqData.map(item =>
            item.id === id ? { ...item, isOpen: !item.isOpen } : item
        ));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1B2C59]">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Find answers to the most common questions about our platform.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full text-left px-6 py-4 font-semibold text-lg flex justify-between items-center transition-colors hover:bg-gray-50"
                            >
                                <span>{faq.question}</span>
                                <span className={`transform transition-transform ${faq.isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                            </button>
                            {faq.isOpen && (
                                <div className="p-6 border-t border-gray-200">
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
