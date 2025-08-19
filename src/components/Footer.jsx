'use client';

import React from 'react';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Support', href: '/support' },
    ];

    const socialLinks = [
        { icon: 'f', href: '#' },
        { icon: 'i', href: '#' },
        { icon: 't', href: '#' },
        { icon: 'y', href: '#' },
    ];

    return (
        <footer className="bg-[#1B2C59] text-white py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-300">123 Polytechnic Road, Dhaka, Bangladesh</p>
                        <p className="text-gray-300 mt-2">Email: info@techtuition.care</p>
                        <p className="text-gray-300 mt-2">Phone: +880 123 456 7890</p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} className="text-white hover:text-gray-400 transition-colors">
                                    <span className="text-2xl">{link.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>&copy; 2025 Tech Tuition Care. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
