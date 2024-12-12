import React from 'react'
import { cva, VariantProps } from 'cva'
import { cn } from '../../lib/cn'

export const svgVariants = cva(
    'transition-all duration-300', // Base classes for transition
    {
        variants: {
            size: {
                small: 'min-w-2 w-2 min-h-2 h-2 stroke-[1.5px]',
                default: 'min-w-3 w-3 min-h-3 h-3 stroke-2',
                large: 'min-w-5 w-5 min-h-5 h-5 stroke-3',
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
