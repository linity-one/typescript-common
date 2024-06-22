import {FC, ReactNode} from 'react'
import {cva,VariantProps} from "cva";
import {cn} from "@/common/lib/cn"


const CardVariants = cva(
    'shadow-xl',
    {
        variants: {
            variant: {
                clean: 'bg-white',
                highlight: 'bg-cloud',
            }
        },
        compoundVariants: [
        ],
        defaultVariants: {
            variant: 'primary',
        }
    })

interface CardProps extends VariantProps<typeof CardVariants>{
    children:ReactNode
}

const Card: FC<CardProps> = ({children,variant}) => {
    return(
        <div className={cn(CardVariants({variant}),'px-8 py-4 rounded-xl w-55')}>
            {children}
        </div>
    )
}

export default Card