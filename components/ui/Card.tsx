import { FC, forwardRef, HTMLAttributes } from 'react'
import { cva, VariantProps } from 'cva'
import { cn } from '../../lib/cn'

export const CardVariants = cva('group/card p-xl bg-white shadow-400  flex gap-1', {
    variants: {
        variant: {
            standard: 'rounded-xl',
            sharp: 'rounded-none',
        },
        hover: {
            static: '',
            shadow_increase: 'transition-shadow duration-300 hover:shadow-600',
            liftoff:
                'transition-all duration-300 hover:shadow-800 hover:-translate-y-0.25 hover:scale-[1.005]',
        },
        flow: {
            vertical: 'flex-col',
            horizontal: 'flex-row',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        variant: 'standard',
        hover: 'static',
        flow: 'vertical',
    },
})

interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardVariants> {}

const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
    ({ variant, hover, flow, className, children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn(CardVariants({ variant, hover, flow }), className)}>
                {children}
            </div>
        )
    },
)

Card.displayName = 'Card'

export default Card
