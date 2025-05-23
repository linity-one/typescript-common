import { FC, forwardRef, InputHTMLAttributes } from 'react'
import { Input as HeadlessInput } from '@headlessui/react'
import { cva, VariantProps } from 'cva'
import { cn } from '../../lib/cn'

export const InputVariants = cva(
    'peer order-2 rounded-md border-primary-400 py-1 px-2 text-text text-primary-600 focus:text-primary-950 placeholder:text-primary-600 ' +
        ' outline-1 focus:outline-1 focus:border-primary-400 focus:ring-1 focus:ring-offset-0 focus:ring-primary-600 ' +
        'invalid:outline-1 invalid:ring-offset-0 invalid:ring-alert invalid:border-alert invalid:ring-0 ' +
        'invalid:focus:outline-1 invalid:outline-1 invalid:focus:ring-offset-0 invalid:focus:ring-alert invalid:focus:border-alert invalid:focus:ring-1 ' +
        'disabled:bg-primary-200 transition-all duration-300',
    {
        variants: {
            variant: {
                primary: '',
            },
        },
        compoundVariants: [],
        defaultVariants: {
            variant: 'primary',
        },
    },
)

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof InputVariants> {}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    ({ variant, className, children, ...props }, ref) => {
        return (
            <HeadlessInput
                ref={ref}
                className={cn(InputVariants({ variant, className }))}
                {...props}
            >
                {children}
            </HeadlessInput>
        )
    },
)

Input.displayName = 'Input'

export default Input
