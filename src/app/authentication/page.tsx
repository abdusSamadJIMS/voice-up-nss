import Hero from '@/components/authentication/Hero'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <main className='min-h-screen'>
            <Suspense>
                <Hero />
            </Suspense>
        </main>
    )
}

export default page