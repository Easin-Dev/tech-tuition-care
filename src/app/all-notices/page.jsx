'use client';

import React from 'react';

const NoticesPage = () => {
    const notices = [
        {
            id: 1,
            title: '1st Semester Final Exam Schedule',
            date: 'October 26, 2024',
            content: 'The final examination schedule for the 1st semester has been published. Please check the details by clicking the "Read More" button below.',
            type: 'text',
            link: '#',
        },
        {
            id: 2,
            title: 'New Video Lessons for Digital Electronics',
            date: 'October 25, 2024',
            content: 'New video lessons for the Digital Electronics course have been uploaded. Students are requested to complete the new modules before the upcoming quiz.',
            type: 'image',
            imageSrc: 'https://placehold.co/800x400/2D4CB1/FFFFFF?text=New+Video+Lessons',
            link: '#',
        },
        {
            id: 3,
            title: 'Admission Notice for Fall 2024',
            date: 'October 20, 2024',
            content: 'Admission is now open for the Fall 2024 semester. New students can sign up to browse courses and start their journey.',
            type: 'text',
            link: '#',
        },
        {
            id: 4,
            title: 'Live Class on Structural Mechanics',
            date: 'October 18, 2024',
            content: 'Join our live class on Structural Mechanics this Friday at 8 PM. An expert instructor will be available for a Q&A session.',
            type: 'text',
            link: '#',
        },
        {
            id: 5,
            title: 'New Study Materials for Civil Engineering',
            date: 'October 15, 2024',
            content: 'Downloadable notes, handouts, and formula sheets for various Civil Engineering courses are now available in the resource section.',
            type: 'image',
            imageSrc: 'https://placehold.co/800x400/2E7D32/FFFFFF?text=New+Study+Materials',
            link: '#',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1B2C59]">
                        Notices & Updates
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Stay informed about important announcements and platform news.
                    </p>
                </div>

                <div className="space-y-8">
                    {notices.map((notice) => (
                        <div key={notice.id} className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-[#2D4CB1]">{notice.title}</h3>
                                <span className="text-sm text-gray-500 mt-2 md:mt-0">{notice.date}</span>
                            </div>
                            {notice.type === 'image' && (
                                <img src={notice.imageSrc} alt={notice.title} className="w-full rounded-md object-cover mb-4" />
                            )}
                            <p className="text-gray-700">{notice.content}</p>
                            <div className="mt-4">
                                <a href={notice.link} className="text-[#A00034] font-semibold hover:underline">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoticesPage;
