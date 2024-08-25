"use server"
import prisma from "@/db/prisma"
import bcrypt from "bcryptjs"
import { signToken, verifyToken } from "./jwt"
import { cookies } from "next/headers"
export async function registerUser(formData: FormData) {
    try {
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        const hashedPassword = await bcrypt.hash(password, 10)
        const data = await fetch("https://randomuser.me/api/").then(res => res.json())

        const name = `${data.results[0].name.first} ${data.results[0].name.last}`
        console.log(name);



        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                fakeName: name
            },
            select: { email: true, fakeName: true, emailIsValid: true }
        })

        return {
            success: true,
            user
        }
    } catch (error) {
        console.error(error)
        throw new Error("Failed to register user")
    }

}

export async function loginUser(formData: FormData) {
    try {
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error("Invalid Credentials")
        }

        const token = signToken({ userId: user.id })


        cookies().set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60
        })

        return { success: true, user }
    } catch (error) {
        console.log("Error: ", error);
        throw new Error("Something went wrong")
    }
}


export async function logoutUser() {
    cookies().set("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: -1
    })
}

export async function isAuthenticated() {
    const token = cookies().get("token")?.value

    if (!token) {
        return false
    }

    try {
        const decodedToken = verifyToken(token)
        return true
    } catch (error) {
        return false
    }
    return false
}