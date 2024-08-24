import React from 'react'
import GradientText from '../GradientText'
import MyButton from '../ui/MyButton'
import { siteName } from '@/constant/siteConstant'
import Logo from '../ui/Logo'

const Hero = () => {
    return (
        <div
            className="hero min-h-screen h-screen relative bg-fixed bg-center bg-no-repeat"
            style={{
                backgroundImage: "url(/images/heroBg.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  w-full justify-start text-neutral-content text-center">
                <div className="max-w-lg ">
                    <h1 className="mb-5 text-5xl font-extralight">{siteName}</h1>
                    <GradientText className='mb-5 text-5xl font-extrabold font-baloo
                    from-orange-400 via-white to-violet-400 bg-gradient-to-tl text-pretty tracking-wide
                    '>
                        Empowering College Girls to Speak Up Anonymously <br /> Your Voice, Your Safety, Our Platform.
                    </GradientText>
                    <MyButton />
                </div>
            </div>

            <Logo />
        </div>
    )
}

export default Hero