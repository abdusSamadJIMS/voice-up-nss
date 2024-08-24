import React from 'react'
import logoImg from "@/../public/images/logo.png"
import Image from 'next/image'
import { siteName } from '@/constant/siteConstant'
import { cn } from '@/lib/utils'


const Logo = () => {
    return (
        <div className='absolute top-5 left-5'>
            <div className={cn("size-14 relative")}>
                <Image
                    src={logoImg}
                    alt={siteName}
                    fill
                    className='object-contain'
                />
            </div>
        </div>
    )
}

export default Logo