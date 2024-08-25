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
                bg-[url('/images/teamBg.jpg')]
            `
            }
        // style={{
        //     backgroundImage: "url(/images/heroBg.jpg)",
        // }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content h-full   w-full justify-start text-neutral-content text-center
            ">
                <div className='h-full mx-auto  w-full  py-5 flex flex-col justify-between'>
                    <h3 className='sticky top-0'>
                        <GradientText
                            className='font-extrabold
                            font-baloo
                            md:text-[9rem]
                            md:leading-[8.5rem]
                            text-8xl
                            text-left
                            py-5
                            '
                        >
                            Our
                            Team
                        </GradientText>
                    </h3>
                    <div>
                        <TeamCards />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero