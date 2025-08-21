import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/User';

export async function POST(req) {
    try {
        await dbConnect();
        const { email, code } = await req.json();

        if (!email || !code) {
            return NextResponse.json({ message: 'Email and code are required.' }, { status: 400 });
        }

        const user = await User.findOne({ email, verificationCode: code });

        if (!user) {
            return NextResponse.json({ message: 'Invalid verification code.' }, { status: 400 });
        }

        // Verify the user and clear the code
        user.isActive = true;
        user.verificationCode = null;
        await user.save();

        return NextResponse.json({ message: 'Email verified successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Verification Error:', error);
        return NextResponse.json({ message: 'Something went wrong during verification.' }, { status: 500 });
    }
}