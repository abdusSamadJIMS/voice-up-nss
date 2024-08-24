import React from 'react'
import GradientText from './GradientText'
import { FaRegUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import { IoHomeOutline } from 'react-icons/io5'
import { RiCameraLensLine, RiTeamLine } from 'react-icons/ri'
import { MdOutlineForum } from 'react-icons/md'

const SideNavbar = () => {
    return (
        <div className='fixed right-3 top-0 h-screen  z-20 
        flex
        flex-col
justify-between
items-center
py-10
        '>
            <div className=''>
                <FaRegUserCircle
                    className='text-4xl 
                    text-white rounded-full
                    border border-orange-300
                    '
                />
            </div>
            <div className='  flex-1 flex flex-col justify-center gap-6 items-center'>
                <Link href={"/"} className='border-2 p-2 rounded-full border-orange-300'>
                    <IoHomeOutline className='text-white text-3xl scale-105' />
                </Link>
                <Link href={"/"}>
                    <RiCameraLensLine className='text-white text-3xl' />
                </Link>
                <Link href={"/"}>
                    <RiTeamLine className='text-white text-3xl' />
                </Link>
                <Link href={"/"}>
                    <MdOutlineForum className='text-white text-3xl' />
                </Link>
            </div>
            <div className='  text-neutral-content flex flex-col justify-center items-center'>
                <h2 className='text-xl font-light'>Initiative By</h2>
                <GradientText className='text-7xl font-baloo font-extrabold 
                to-green-600  via-white from-orange-500 bg-gradient-to-br
                '>
                    NSS
                </GradientText>
            </div>
        </div>
    )
}

export default SideNavbar