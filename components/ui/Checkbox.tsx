import React, { FC, HTMLAttributes } from 'react'
import { cva, VariantProps } from 'cva'
import { Checkbox as HeadlessCheckbox } from '@headlessui/react'
import { toast } from 'react-toastify'
import onChange = toast.onChange
import { cn } from '../../lib/cn'

const CheckboxVariants = cva(
    'group inline-block rounded-sm border bg-none data-checked:border-none',
    {
        variants: {
            theme: {
                light: 'border-primary-300 text-gunmetal-950 data-checked:bg-accent',
                dark: 'border-primary-400 text-accent data-[checked]:bg-primary-950:',
            },
        },
        compoundVariants: [],
        defaultVariants: {
            theme: 'light',
        },
    },
)

interface CheckboxProps extends VariantProps<typeof CheckboxVariants> {
    onChange?: (checked: boolean) => void
}

const Checkbox: FC<CheckboxProps> = ({ theme, onChange, ...props }) => {
    return (
        <HeadlessCheckbox
            onChange={onChange}
            className={cn(
                CheckboxVariants({ theme }),
                'pl-[4px] pt-[5px] w-3 h-3 order-2 align-middle',
            )}
        >
            <svg
                className="opacity-0 group-data-checked:opacity-100"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2 6.40909L5.75 10.5L14 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                />
            </svg>
        </HeadlessCheckbox>
    )
}

export default Checkbox
