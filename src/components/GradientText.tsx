import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const GradientText = ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
        <p className={cn('bg-gradient-to-r from-primary via-secondary to-accent inline-block text-transparent bg-clip-text',
            className
        )}>
            {children}
        </p>
    )
}

export default GradientText