import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'teacher', 'admin'],
        default: 'student',
    },
    isActive: {
        type: Boolean,
        default: false, // User is not active until verified
    },
    verificationCode: { // New field to store the OTP
        type: String,
    },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);