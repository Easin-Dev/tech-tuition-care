import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        await dbConnect();
        const { email, password } = await req.json();

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
        }

        // OTP তৈরি করে ইমেল করা
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        user.verificationCode = verificationCode;
        await user.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Login Verification Code',
            html: `<p>Your login verification code is: <strong>${verificationCode}</strong></p>`,
        };
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Verification code sent to your email.' }, { status: 200 });
    } catch (error) {
        console.error('Login Error:', error);
        return NextResponse.json({ message: 'An error occurred during login.' }, { status: 500 });
    }
}