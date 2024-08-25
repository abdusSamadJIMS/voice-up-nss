import { isAuthenticated } from '@/lib/actions'
import React from 'react'

const page = async () => {
    const isAuth = await isAuthenticated()
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <pre className='border'>
                {JSON.stringify(isAuth, null, 2)}
            </pre>
        </div>
    )
}

export default page