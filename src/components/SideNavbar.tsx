import React from 'react'
import GradientText from './GradientText'
import { FaRegUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import { IoHomeOutline } from 'react-icons/io5'
import { RiCameraLensLine, RiTeamLine } from 'react-icons/ri'
import { MdOutlineForum } from 'react-icons/md'

const SideNavbar = () => {
    return (
        <div className='
                        max-sm:border
                        fixed 
                        sm:right-3
                        sm:top-0
                        max-sm:bottom-5
                        max-sm:left-[5%]
                        max-sm:w-[90%]
                        max-sm:mx-auto
                        sm:h-screen
                        max-sm:h-14
                        z-20 
                        flex
                        sm:flex-col
                        justify-between
                        items-center
                        sm:py-10
                        max-sm:px-5
                        max-sm:flex-wrap
                        max-sm:rounded-full
                        max-sm:backdrop-blur-sm
        '>
            <div className=''>
                <Link
                    href={""} className=''>

                    <FaRegUserCircle
                        className='sm:text-4xl text-2xl
                    text-white rounded-full
                    border border-orange-300
                    '
                    />
                </Link>
            </div>
            <div className=' flex-1 flex sm:flex-col justify-center sm:gap-6 gap-4 items-center'>
                <Link href={"/"} className='border-2 p-1 sm:p-2 rounded-full border-orange-300 scale-105'>
                    <IoHomeOutline className='text-white sm:text-3xl text-xl ' />
                </Link>
                <Link href={"/"}>
                    <RiCameraLensLine className='text-white sm:text-3xl text-xl' />
                </Link>
                <Link href={"/"}>
                    <RiTeamLine className='text-white sm:text-3xl text-xl' />
                </Link>
                <Link href={"/"}>
                    <MdOutlineForum className='text-white sm:text-3xl text-xl' />
                </Link>
            </div>
            <div className='max-sm:w-full max-sm:hidden  text-neutral-content flex flex-col justify-center items-center'>
                <div className='max-sm:self-end'>

                    <h2 className='sm:text-xl text-xs font-light'>Initiative By</h2>
                    <GradientText className='sm:text-7xl text-4xl font-baloo font-extrabold 
                to-green-600  via-white from-orange-500 bg-gradient-to-br
                '>
                        NSS
                    </GradientText>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar