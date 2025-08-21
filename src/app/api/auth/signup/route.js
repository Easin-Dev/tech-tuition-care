import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        await dbConnect();
        const { name, email, password } = await req.json();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            if (existingUser.isActive) {
                return NextResponse.json({ message: 'User already exists and is verified. Please login.' }, { status: 409 });
            }
            // If user exists but is not active, resend code
            const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
            existingUser.verificationCode = verificationCode;
            await existingUser.save();
            const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS, }, });
            const mailOptions = { from: process.env.EMAIL_USER, to: email, subject: 'Resend Verification Code', html: `<p>Your new verification code is: <strong>${verificationCode}</strong></p>`, };
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ message: 'A new verification code has been sent.' }, { status: 200 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            verificationCode,
            isActive: false,
        });
        await newUser.save();

        const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS, }, });
        const mailOptions = { from: process.env.EMAIL_USER, to: email, subject: 'Verify Your Account', html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`, };
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'User registered. Please check your email for the verification code.' }, { status: 201 });
    } catch (error) {
        console.error('Signup Error:', error);
        return NextResponse.json({ message: 'Something went wrong during signup.' }, { status: 500 });
    }
}