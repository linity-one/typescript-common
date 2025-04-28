import { FC, forwardRef, HTMLAttributes } from 'react'
import { cva, VariantProps } from 'cva'
import { cn } from '../../lib/cn'

export const CardVariants = cva('group/card p-xl bg-white shadow-400 gap-xs', {
    variants: {
        x_span: {
            2: 'col-span-2',
            3: 'col-span-3',
            4: 'col-span-4',
            5: 'col-span-5',
            6: 'col-span-6',
            8: 'col-span-8',
        },
        y_span: {
            1: 'grid-rows-1',
            2: 'row-span-2',
            3: 'row-span-3',
            4: 'row-span-4',
            5: 'row-span-5',
            6: 'row-span-6',
            7: 'row-span-7',
            8: 'row-span-8',
            9: 'row-span-9',
            10: 'row-span-10',
            11: 'row-span-11',
            12: 'row-span-12',
            13: 'row-span-13',
            14: 'row-span-14',
            15: 'row-span-15',
            16: 'row-span-16',
            17: 'row-span-17',
            18: 'row-span-18',
            full: 'row-span-full',
        },
        start: {
            1: 'col-start-1',
            2: 'col-start-2',
            3: 'col-start-3',
            4: 'col-start-4',
            5: 'col-start-5',
            6: 'col-start-6',
        },
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
            grid: 'grid',
            vertical: 'flex flex-col',
            horizontal: 'flex flex-row',
        },
    },
    compoundVariants: [
        { flow: 'grid', x_span: 2, class: 'grid-cols-1' },
        { flow: 'grid', x_span: 3, class: 'grid-cols-2' },
        { flow: 'grid', x_span: 4, class: 'grid-cols-3' },
        { flow: 'grid', x_span: 5, class: 'grid-cols-4' },
        { flow: 'grid', x_span: 6, class: 'grid-cols-5' },
        { flow: 'grid', x_span: 8, class: 'grid-cols-7' },
    ],
    defaultVariants: {
        variant: 'standard',
        hover: 'static',
        flow: 'vertical',
        x_span: 8,
        y_span: 4,
    },
})

interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof CardVariants> {}

const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(
    ({ variant, start, x_span, y_span, hover, flow, className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    CardVariants({ variant, hover, flow, start, x_span, y_span }),
                    className,
                )}
            >
                {children}
            </div>
        )
    },
)

Card.displayName = 'Card'

export default Card
