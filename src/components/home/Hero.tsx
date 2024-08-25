import React from 'react'
import GradientText from '../GradientText'
import MyButton from '../ui/MyButton'
import { siteName } from '@/constant/siteConstant'
import Logo from '../ui/Logo'
// import heroBg from "../../../public/images/heroBg.jpg"

const Hero = () => {
    return (
        <section
            id='home'
            className={`hero min-h-screen h-screen relative bg-fixed bg-center bg-no-repeat
            sm:bg-[url('/images/heroBg.jpg')]
            bg-[url('/images/heroBgMobile.jpg')]
            `}
        // style={{
        //     backgroundImage: "url(/images/heroBg.jpg)",
        // }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  w-full justify-start text-neutral-content text-center">
                <div className="max-w-lg ">
                    <h1 className="mb-5 
                     md:text-5xl
                     sm:text-3xl
                     text-2xl
                    font-extralight">{siteName}</h1>
                    <GradientText className='mb-5 
                     md:text-5xl
                     sm:text-3xl
                     text-2xl
                     font-extrabold font-baloo
                    from-orange-400 via-white to-violet-400 bg-gradient-to-tl text-pretty tracking-wide
                    '>
                        Empowering College Girls to Speak Up Anonymously <br /> Your Voice, Your Safety, Our Platform.
                    </GradientText>
                    <MyButton
                        btnClassName='max-sm:backdrop-blur-0 '
                        text='Voice Up Now'
                    />
                </div>
            </div>

            <Logo />
        </section>
    )
}

export default Hero