import dbConnect from '../../../lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await dbConnect();
        return NextResponse.json({
            message: "Successfully connected to MongoDB!",
            status: 'connected'
        }, { status: 200 });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        return NextResponse.json({
            message: "Failed to connect to MongoDB.",
            status: 'error',
            error: error.message
        }, { status: 500 });
    }
}
