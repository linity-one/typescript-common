import {FC, ReactNode} from 'react'
import {cva,VariantProps} from "cva";
import {cn} from "@/common/lib/cn"


const CardVariants = cva(
    'shadow-xl rounded-xl px-8 py-4 w-full',
    {
        variants: {
            variant: {
                clean: 'bg-white text-gunmetal',
                highlight: 'bg-cloud',
            },
            size: {
                unsized: '',
                standard: 'h-50',
            }
        },
        compoundVariants: [
        ],
        defaultVariants: {
            variant: 'clean',
            size: 'standard',
        }
    })

interface CardProps extends VariantProps<typeof CardVariants>{
    children?:ReactNode
}

const Card: FC<CardProps> = ({children,variant, size}) => {
    return(
        <div className={cn(CardVariants({variant,size}))}>
            {children}
        </div>
    )
}

export default Card