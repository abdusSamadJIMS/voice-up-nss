'use client'
import React, { useEffect, useState } from 'react'
import GradientText from './GradientText'
import NavItems from './NavItems'
import UserButton from './UserButton'

const SideNavbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {


            setVisible(false)
        } else {

            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })




    return (
        <div className={`
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
                        ${!visible ? 'max-sm:translate-y-20' : ''}
                        transition-all

        `}>
            <div className=''>
                <UserButton />
            </div>
            <NavItems />
            <div className='max-sm:w-full max-sm:hidden  text-neutral-content flex flex-col justify-center items-center'>
                <div className='max-sm:self-end'>

                    <h2 className='sm:text-sm text-right text-xs font-light'>Initiative By</h2>
                    <GradientText className='sm:text-sm text-4xl font-baloo font-extrabold 
                to-green-600  via-white from-orange-500 bg-gradient-to-br
                text-right
                '>
                        NSS CELL, <br /> JIMS,<br /> VASANT KUNJ
                    </GradientText>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar