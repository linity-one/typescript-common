import { FC, forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

import { Textarea as HeadlessTextArea } from '@headlessui/react'
import { cva, VariantProps } from 'cva'
import { cn } from '../../lib/cn'

const TextAreaVariants = cva(
    'peer order-2  h-20 rounded-md border-primary-400 py-1 px-2 text-text text-primary-950 placeholder:text-primary-600 ' +
        'focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-offset-0 focus:ring-primary-600 ' +
        'invalid:outline-none invalid:ring-offset-0 invalid:ring-alert invalid:border-alert invalid:ring-0 ' +
        'invalid:focus:outline-none invalid:focus:ring-offset-0 invalid:focus:ring-alert invalid:focus:border-alert invalid:focus:ring-1 ' +
        'disabled:bg-primary-200 text-primary-600',
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

interface TeaxtareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        VariantProps<typeof TextAreaVariants> {}

const Textarea = forwardRef<HTMLTextAreaElement, TeaxtareaProps>(
    ({ variant, className, children, ...props }, ref) => {
        return (
            <HeadlessTextArea
                ref={ref}
                className={cn(TextAreaVariants({ variant, className }))}
                {...props}
            >
                {children}
            </HeadlessTextArea>
        )
    },
)

Textarea.displayName = 'Input'

export default Textarea
