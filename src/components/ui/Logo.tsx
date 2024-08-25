import React from 'react'
import logoImg from "@/../public/images/logo.png"
import Image from 'next/image'
import { siteName } from '@/constant/siteConstant'
import { cn } from '@/lib/utils'
import Link from 'next/link'


const Logo = () => {
    return (
        <div className='absolute top-5 left-5'>
            <div className={cn("size-14 relative")}>
                <Link href={"/"}
                    title={siteName}
                >
                    <Image
                        src={logoImg}
                        alt={siteName}
                        fill
                        className='object-contain'
                    />
                </Link>
            </div>
        </div>
    )
}

export default Logo