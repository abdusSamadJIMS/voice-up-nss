import ForumSection from '@/components/forum/ForumSection'
import Hero from '@/components/home/Hero'
import TeamSection from '@/components/team/TeamSection'
import VisionSection from '@/components/vision/Section'
import React from 'react'

const page = () => {
    return (
        <main className=''>
            <Hero />
            <VisionSection />
            <TeamSection />
            <ForumSection />
        </main>
    )
}

export default page