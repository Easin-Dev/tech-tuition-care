import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/User';

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        // এটি OTP ভেরিফিকেশনের পরে সেশন তৈরি করবে।
        CredentialsProvider({
            id: 'otp-verification',
            name: 'OTP Verification',
            credentials: {
                email: { label: "Email", type: "email" },
                code: { label: "Verification Code", type: "text" },
            },
            authorize: async (credentials) => {
                await dbConnect();
                const user = await User.findOne({
                    email: credentials.email,
                    verificationCode: credentials.code,
                });

                if (user) {
                    // OTP সঠিক হলে, ব্যবহারকারীর সেশন তৈরি হবে।
                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        role: user.role,
                    };
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.role = token.role;
            }
            return session;
        },
    },
    events: {
        async signIn({ user, account }) {
            if (account?.provider !== 'credentials') {
                await dbConnect();
                const existingUser = await User.findOne({ email: user.email });
                if (!existingUser) {
                    await User.create({
                        email: user.email,
                        name: user.name,
                        isActive: true,
                        provider: account?.provider,
                        role: 'student',
                    });
                }
            }
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };