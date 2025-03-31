import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import { cva, VariantProps } from 'cva'
import { cn } from '@/common/lib/cn'
import LoadingAnimation from './LoadingAnimation'
import { Button as HeadlessButton } from '@headlessui/react'

export const ButtonVariants = cva(
    'font-button font-semi-bold flex flex-row items-center justify-center transition-color duration-300',
    {
        variants: {
            variant: {
                primary: '',
                secondary: '',
                tertiary: 'after:absolute relative after:transition-all after:duration-300',
                quaternary: '',
                delete: 'border border-error text-error hover:bg-error hover:text-white',
                placeholder: '',
                tag_ish: '',
            },
            size: {
                sm: 'px-md py-xxs text-subtext  rounded-sm gap-1',
                md: 'px-ld py-xs text-text rounded-md gap-1',
                lg: 'px-xl py-sm text-h3 rounded-md gap-1.5',
            },
            theme: {
                dark: '',
                light: '',
            },
        },
        compoundVariants: [
            {
                variant: 'primary',
                theme: 'dark',
                className: 'bg-primary-950 text-primary-100 hover:text-accent shadow-400',
            },
            {
                variant: 'primary',
                theme: 'light',
                className: 'bg-primary-100 hover:bg-accent-primary text-gunmetal shadow-light-400',
            },
            {
                variant: 'secondary',
                theme: 'dark',
                className: 'border border-primary-950 text-primary-950 hover:bg-primary-50',
            },
            {
                variant: 'secondary',
                theme: 'light',
                className: 'border border-primary-100 text-primary-100 hover:bg-primary-900',
            },
            {
                variant: 'tertiary',
                theme: 'dark',
                className: 'text-primary-950 after:bg-primary-950',
            },
            {
                variant: 'tertiary',
                theme: 'light',
                className: 'text-primary-100 after:bg-primary-100',
            },
            {
                variant: 'tertiary',
                size: 'sm',
                className:
                    'after:h-px after:right-[30px] after:left-[30px] after:bottom-0.75 hover:after:left-ld hover:after:right-ld',
            },
            {
                variant: 'tertiary',
                size: 'md',
                className:
                    'text-primary-950 after:h-0.25 after:left-ld after:right-ld after:bg-primary-950  after:bottom-1 hover:after:left-md hover:after:right-md',
            },
            {
                variant: 'tertiary',
                size: 'lg',
                className:
                    'text-primary-950 after:h-0.25 after:left-xl after:right-xl after:bg-primary-950 after:bottom-0.25 hover:after:left-ld hover:after:right-ld',
            },
            {
                variant: 'quaternary',
                theme: 'dark',
                className:
                    'bg-primary-100 hover:bg-primary-300 text-primary-700 hover:text-primary-950',
            },
            {
                variant: 'quaternary',
                theme: 'light',
                className: 'bg-primary-700 hover:bg-primary-600 text-primary-100 hover:text-white',
            },
        ],
        defaultVariants: {
            variant: 'primary',
            size: 'md',
            theme: 'dark',
        },
    },
)

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof ButtonVariants> {
    loading?: boolean
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ loading, children, className, variant, theme, size, ...props }, ref) => {
        return (
            <HeadlessButton
                ref={ref}
                className={cn(ButtonVariants({ variant, size, theme }), className)}
                {...props}
            >
                <LoadingAnimation
                    className={loading ? 'absolute' : 'hidden'}
                    size={size == 'sm' ? 'small' : size == 'md' ? 'default' : 'large'}
                />
                {children}
            </HeadlessButton>
        )
    },
)

Button.displayName = 'Button'

export default Button
