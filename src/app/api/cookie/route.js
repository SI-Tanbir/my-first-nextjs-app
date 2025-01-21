import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.json({ message: "Cookie set successfully!" });

    // Set a cookie 
    response.cookies.set("user", "John Doe", {
        httpOnly: true, // Accessible only on the server
     
        maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
}
