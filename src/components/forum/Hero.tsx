import React from 'react'
import GradientText from '../GradientText'
import MyButton from '../ui/MyButton'
import { siteName } from '@/constant/siteConstant'
import Logo from '../ui/Logo'
import ComplaintList from './ComplaintList'
// import heroBg from "../../../public/images/heroBg.jpg"

const Hero = () => {
    return (
        <div
            className={`hero min-h-[110vh] h-screen relative bg-fixed bg-center bg-no-repeat
            sm:bg-[url('/images/forumBg.jpg')]
            bg-[url('/images/heroBgMobile.jpg')]
            `}
        // style={{
        //     backgroundImage: "url(/images/heroBg.jpg)",
        // }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content h-full   w-full justify-start text-neutral-content text-center
            grid grid-cols-2
            ">
                <div className='h-full w-full '>
                    <h3 className='sticky top-0
'>
                        <GradientText
                            className='font-extrabold
                            font-baloo
                            text-[9rem]
                            leading-[6.5rem]
                            text-left
                            py-5
                            flex justify-start
                            '
                        >
                            <span>
                                Public
                                <br />
                                Forum
                            </span>
                        </GradientText>
                    </h3>
                </div>
                <div className='h-full w-full flex items-start  py-10'>
                    <div className='h-[40rem] w-full bg-black/40
                    rounded-xl
                    backdrop-blur-sm sticky top-0 
                    overflow-auto
                    '>
                        <ComplaintList />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero