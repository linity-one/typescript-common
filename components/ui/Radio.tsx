import { FC, forwardRef, InputHTMLAttributes } from 'react'
import { Radio as HeadlessRadio } from '@headlessui/react'
import { cva, VariantProps } from 'cva'
import { cn } from '../../lib/cn'

export const RadioVariants = cva(
  'flex items-center justify-center rounded-full border-2 transition-colors duration-200',
  {
    variants: {
      size: {
        md: 'tablet:h-4 tablet:w-4 h-2 w-2',
      },
      checked: {
        true: 'bg-white border-gunmetal',
        false: 'bg-transparent',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'md',
      checked: false,
      disabled: false,
    },
  }
)

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'size'>,
    VariantProps<typeof RadioVariants> {
  value: string | number | readonly string[] | undefined
  checked?: boolean
  disabled?: boolean
}

const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  ({ size, checked, disabled, className, children, ...props }, ref) => {
    return (
      <HeadlessRadio
        ref={ref}
        className={cn(
          RadioVariants({ size, checked, disabled, className }),
          'relative after:block after:w-1 after:h-1 after:border-2 tablet:after:w-3 tablet:after:h-3 tablet:after:border-8 after:border-gunmetal after:rounded-full after:bg-accent after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:transition-opacity duration-200',
          checked ? 'after:opacity-100' : 'after:opacity-0'
        )}
        {...props}
      >
        {children}
      </HeadlessRadio>
    )
  }
)

export default Radio
