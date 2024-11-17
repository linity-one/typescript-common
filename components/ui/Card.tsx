import {FC, forwardRef, HTMLAttributes} from 'react'
import {cva,VariantProps} from "cva";
import {cn} from "../../lib/cn";


const CardVariants = cva(
    'group/card mb-6 p-6 bg-white shadow-400 rounded-xl',
    {
        variants: {
            variant: {
                static: '',
                hover_shadow_increase: 'transition-shadow duration-300 hover:shadow-600',
                hover_liftoff:'transition-all duration-300 hover:shadow-600 translate-y-1',
            }
        },
        compoundVariants: [
        ],
        defaultVariants: {
            variant: 'static',
        }
    })

interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardVariants> {

}

const Card: FC<CardProps> = forwardRef<HTMLDivElement,CardProps>(
    ({variant ,className,children,...props},ref) => {

    return <div ref={ref} className={cn(CardVariants({variant}),className)}>
        {children}
    </div>
})

Card.displayName = 'Card'

export default Card