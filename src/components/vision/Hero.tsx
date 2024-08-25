import React from 'react'
import GradientText from '../GradientText'
import MyButton from '../ui/MyButton'
import { siteName } from '@/constant/siteConstant'
import Logo from '../ui/Logo'
// import heroBg from "../../../public/images/heroBg.jpg"

const Hero = () => {
    return (
        <div
            className={`hero min-h-[110vh] h-screen relative bg-fixed bg-center bg-no-repeat
            sm:bg-[url('/images/visionBg.jpg')]
            bg-[url('/images/visionBgMobile.jpg')]
            `}
        // style={{
        //     backgroundImage: "url(/images/heroBg.jpg)",
        // }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content h-full   w-full justify-start text-neutral-content text-center
            grid sm:grid-cols-2 grid-cols-1 
            ">
                <div className='h-full py-20 flex items-end sm:order-first order-last'>
                    <p
                        className='font-bold tracking-wide text-balance'
                    >
                        Our platform envisions a safe and supportive environment where college girls can report their problems without fear of judgment or exposure. We aim to empower young women by providing an anonymous space to voice their concerns, ensuring they are heard, respected, and protected. Through this platform, we strive to foster a community that advocates for the well-being, dignity, and security of every college girl.
                    </p>
                </div>
                <div className='h-full'>
                    <h3 className='                            sticky top-0
'>
                        <GradientText
                            className='font-extrabold
                            font-baloo
                            md:text-[9rem]
                            md:leading-[8.5rem]
                            text-8xl
                            text-right
                            py-5
                            '
                        >
                            Our
                            <br />
                            Vision
                        </GradientText>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Hero