import { useEffect, useState } from "react";

export default function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (typeof document !== "undefined") {
            const token = document.cookie
                .split('; ')
                .find(row => row.startsWith("token="))
                ?.split("=")[1]

            if (token) {
                setIsLoggedIn(true)
            } else {
                false
            }
        }


    }, [])

    return isLoggedIn
}