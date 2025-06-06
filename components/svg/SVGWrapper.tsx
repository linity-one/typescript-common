import React from 'react'
import { cva, VariantProps } from 'cva'
import { cn } from '../../lib/cn'

export const svgVariants = cva(
    'transition-all duration-300', // Base classes for transition
    {
        variants: {
            size: {
                small: 'min-w-2.5 w-2.5 min-h-2.5 h-2.5 stroke-[1.7px]',
                default: 'min-w-3 w-3 min-h-3 h-3 stroke-2',
                large: 'min-w-4 w-4 min-h-4 h-4 stroke-[2.4px]',
                xl: 'min-w-10 w-10 min-h-10 h-10 stroke-3',
            },
            animations: {
                none: '',
            },
        },
        defaultVariants: {
            size: 'default',
            animations: 'none',
        },
    },
)

export type SvgVariantsProps = VariantProps<typeof svgVariants>

export interface ExpandedSvgProps extends React.SVGProps<SVGSVGElement>, SvgVariantsProps {}

const SVGWrapper: React.FC<ExpandedSvgProps> = ({
    size,
    animations,
    className,
    children,
    ...props
}) => {
    return (
        <svg
            className={cn(svgVariants({ size, animations }), className)}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2.3"
            {...props}
        >
            {React.Children.map(children, (child) => child)}
        </svg>
    )
}

export default SVGWrapper
