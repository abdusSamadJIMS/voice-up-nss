
import { cn } from '@/lib/utils'
import Link from 'next/link';
import React, { } from 'react'

type TOption = {
    label: string;
    id: string;
    icon: React.JSX.Element;
}

const NavItem = ({
    // isSelected = false,
    option,
    //   setSelectedId
}: {
    // isSelected: boolean,
    option: TOption,
    // setSelectedId: Dispatch<SetStateAction<string | null>>
}) => {

    // const handleClick = () => {
    //     setSelectedId(option.id)
    // }
    return (
        <Link
            href={`#${option.id}`}
            // onClick={handleClick}
            className={cn('transition-all p-1 sm:p-2 rounded-full border border-transparent hover:border-2 hover:border-orange-300 hover:scale-105',
                // isSelected && "border-2 border-orange-300 scale-105",
                // !isSelected && "hover:border-primary"
            )}>
            {
                option.icon
            }
        </Link>
    )
}

export default NavItem