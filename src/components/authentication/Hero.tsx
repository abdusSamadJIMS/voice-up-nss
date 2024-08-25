import React from 'react'
import GradientText from '../GradientText'
import MyButton from '../ui/MyButton'
import { siteName } from '@/constant/siteConstant'
import Logo from '../ui/Logo'
import HeroContent from './HeroContent'
// import heroBg from "../../../public/images/heroBg.jpg"

const Hero = () => {
    return (
        <div className="hero bg-primary min-h-screen">
            <Logo />
            <HeroContent />
        </div>
    )
}

export default Hero