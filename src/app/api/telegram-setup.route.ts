import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const token = "6945888742:AAFNZ9-lRwILULyZpqY5VBN98J7MJEYHpMA"
    const webhookUrl = "https://voice-up-nss.vercel.app/api/telegram"

    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: webhookUrl })
        })
        const data = await response.json()
        console.log("webhook setup response", data)

        return NextResponse.json({ status: "success", data })
    } catch (error) {
        console.error('Error setting up webhook:', error);
        return NextResponse.json({ status: 'error', error }, { status: 500 });
    }
}