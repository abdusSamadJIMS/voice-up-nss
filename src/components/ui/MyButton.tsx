import { cn } from '@/lib/utils'
import React from 'react'
import GradientText from '../GradientText'
import { FaLongArrowAltRight } from 'react-icons/fa'

const MyButton = ({ btnClassName, text = "submit" }: { btnClassName?: string, text?: string }) => {
    return (
        <button className={cn
            (
                'btn capitalize btn-block rounded-full backdrop-blur-sm bg-transparent outline-none btn-primary  hover:bg-gradient-to-r  focus:bg-gradient-to-r from-primary via-secondary to-accent group',
                btnClassName
            )
        }
        >
            <GradientText className={cn("sm:text-xl text-lg font-bold text-primary  group-hover:text-green-900  group-focus:text-green-900  flex justify-between items-center w-full ")}>
                <span className='justify-self-center flex-1 bg-inherit font-extrabold'>
                    {text}
                </span>
                <FaLongArrowAltRight className='text-primary 
                group-hover:text-green-900
                group-focus:text-green-900
                 -translate-x-4
                  group-focus:translate-x-0
                  group-hover:translate-x-0
                   transition-all' />
            </GradientText>
        </button>
    )
}

export default MyButton