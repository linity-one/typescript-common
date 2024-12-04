import { FC, forwardRef, HTMLAttributes } from 'react'
import { cva, VariantProps } from 'cva'
import { Description } from '@headlessui/react'

const InputSubtextVariants = cva('block order-3 text-subtext transition-colors duration-300', {
    variants: {
        variant: {
            standard:
                'peer-invalid:hidden peer-disabled:hidden text-primary-600 peer-focus:text-primary-950',
            error: 'hidden peer-invalid:block text-error',
        },
        theme: {
            dark: '',
            light: '',
        },
    },
    compoundVariants: [
        {
            variant: 'error',
            theme: 'dark',
            className: 'text-error',
        },
    ],
    defaultVariants: {
        variant: 'standard',
    },
})

interface InputSubtextProps
    extends HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof InputSubtextVariants> {}

const InputSubtext: FC<InputSubtextProps> = forwardRef<HTMLSpanElement, InputSubtextProps>(
    ({ variant, theme, className, children, ...props }, ref) => {
        return (
            <Description
                as="span"
                className={InputSubtextVariants({ variant, theme, className })}
                ref={ref}
                {...props}
            >
                {children}
            </Description>
        )
    },
)

InputSubtext.displayName = 'InputSubtext'

export default InputSubtext
