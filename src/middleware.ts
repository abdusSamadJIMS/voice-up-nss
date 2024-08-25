import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value

    // console.log("token : " + token);
    console.log('====================================');
    console.log(verifyToken(token || " "))
    console.log('====================================');
    if (!token || !verifyToken(token)) {
        return NextResponse.redirect(new URL("/authentication", req.url))
    }

    return NextResponse.next()

}

export const config = {
    matcher: ["/profile/:path"]
}