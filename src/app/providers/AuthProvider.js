'use client';

import { SessionProvider } from 'next-auth/react';

// এই AuthProvider কম্পোনেন্টটি আপনার অ্যাপ্লিকেশনের জন্য একটি ক্লায়েন্ট সাইড সেশন প্রোভাইডার হিসেবে কাজ করবে।
// এটিকে আপনার root layout ফাইলে import করে ব্যবহার করলে, আপনার অন্যান্য ক্লায়েন্ট কম্পোনেন্টগুলো
// useSession হুক ব্যবহার করে সেশন ডেটা অ্যাক্সেস করতে পারবে।

export default function AuthProvider({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
