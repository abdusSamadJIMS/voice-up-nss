import React from 'react'
import GradientText from '../GradientText'
import MyButton from '../ui/MyButton'
import { siteName } from '@/constant/siteConstant'
import Logo from '../ui/Logo'
import { TeamCards } from './TeamCards'
// import heroBg from "../../../public/images/heroBg.jpg"

const Hero = () => {
    return (
        <div
            className={`hero min-h-[110vh] h-screen relative bg-fixed bg-center bg-no-repeat
            sm:bg-[url('/images/teamBg.jpg')]
            bg-[url('/images/heroBgMobile.jpg')]
            `}
        // style={{
        //     backgroundImage: "url(/images/heroBg.jpg)",
        // }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content h-full   w-full justify-start text-neutral-content text-center
            ">
                <div className='h-full mx-auto  w-full  py-5'>
                    <h3 className='sticky top-0'>
                        <GradientText
                            className='font-extrabold
                            font-baloo
                            text-[9rem]
                            leading-[8.5rem]
                            text-left
                            py-5
                            '
                        >
                            Our
                            Team
                        </GradientText>
                    </h3>
                    <TeamCards />
                </div>
            </div>
        </div>
    )
}

export default Hero