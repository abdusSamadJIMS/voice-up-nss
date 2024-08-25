// 'use client'
import React, { useEffect, useState } from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { MdOutlineForum } from 'react-icons/md'
import { RiCameraLensLine, RiTeamLine } from 'react-icons/ri'
import NavItem from './NavItem'

const NavItems = () => {
    // const [selectedId, setSelectedId] = useState<null | string>(null)
    // const [element, setElement] = useState<HTMLElement | null>(null)
    // useEffect(() => {
    //     let handleScroll: () => void
    //     if (typeof document !== "undefined" && selectedId) {
    //         setElement(document.getElementById(selectedId))
    //         // Listen for scroll events
    //         const sectionEls = document.querySelectorAll("section")
    //         handleScroll = () => {
    //             sectionEls.forEach(sectionEl => {
    //                 if (window.scrollY >= sectionEl.offsetTop) {
    //                     setSelectedId(sectionEl.id)
    //                 }
    //             })
    //         }
    //         if (sectionEls) {
    //             window.addEventListener("scroll", handleScroll)
    //         }

    //     }
    //     if (element) {
    //         element.scrollIntoView({ behavior: "smooth" })
    //     }
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // }, [element, selectedId])

    // useEffect(() => {
    //     if (typeof document !== "undefined" && selectedId) {
    //         setElement(document.getElementById(selectedId))
    //         if (element) {
    //             element.scrollIntoView({ behavior: "smooth" })
    //         }
    //     }
    // }, [selectedId, element])


    const navOptions = [
        {
            label: "Home",
            id: "home",
            icon: <IoHomeOutline className='text-white sm:text-3xl text-xl ' />
        },
        {
            label: "Our Vision",
            id: "visionSection",
            icon: <RiCameraLensLine className='text-white sm:text-3xl text-xl ' />
        },
        {
            label: "Our Team",
            id: "teamSection",
            icon: <RiTeamLine className='text-white sm:text-3xl text-xl' />
        },
        {
            label: "Public Forum",
            id: "publicForumSection",
            icon: <MdOutlineForum className='text-white sm:text-3xl text-xl' />
        }
    ]
    return (
        <div className=' flex-1 flex sm:flex-col justify-center sm:gap-6 gap-4 items-center'>
            {/* <Link href={"/"} className='border-2 p-1 sm:p-2 rounded-full border-orange-300 scale-105'>
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
            </Link> */}
            {
                navOptions.map((option, id) => (
                    <NavItem key={option.id + id}
                        // isSelected={option.id === selectedId}
                        option={option}
                    // setSelectedId={setSelectedId}
                    />
                ))
            }
        </div>
    )
}

export default NavItems