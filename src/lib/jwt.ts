import jwt from "jsonwebtoken"
const secret = process.env.JWT_SECRET || "secret"

export const signToken = (payload: any) => {
    return jwt.sign(payload, secret, { expiresIn: "1h" })
}

export function verifyToken(token: string | undefined) {
    if (!token) return null;

    try {
        // Replace 'your-secret-key' with the actual secret key used for signing
        return jwt.verify(token, secret);
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}