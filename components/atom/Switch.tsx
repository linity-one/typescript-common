import { Switch as HeadlessSwitch } from '@headlessui/react'
import { useState } from 'react'
import { FC } from 'react'
import { cva, VariantProps } from 'cva'

const SwitchVariants = cva(
    'order-2 group block bg-primary-400 h-3 w-5 items-center rounded-full data-[checked]:bg-primary-950 p-[1px] overflow-visible',
    {
        variants: {
            size: {
                md: '',
                lg: '',
            },
        },
        compoundVariants: [],
        defaultVariants: {
            size: 'md',
        },
    },
)

interface SwitchProps extends VariantProps<typeof SwitchVariants> {
    name?: string
    value?: string
    off_callback?: () => Promise<void>
    on_callback?: () => Promise<void>
}

const Switch: FC<SwitchProps> = ({ size, name, value, off_callback, on_callback }) => {
    const [enabled, setEnabled] = useState(false)

    const onChangeHandler = (val: boolean) => {
        if (val) {
            on_callback
                ? on_callback().then(
                      () => setEnabled(val),
                      () => {},
                  )
                : setEnabled(val)
        } else {
            off_callback
                ? off_callback().then(
                      () => setEnabled(val),
                      () => {},
                  )
                : setEnabled(val)
        }
    }

    return (
        <HeadlessSwitch
            name={name}
            value={value}
            checked={enabled}
            onChange={onChangeHandler}
            className={SwitchVariants({ size })}
        >
            <span className="block size-2.5 rounded-full bg-primary-100 transition translate-x-[2px] group-data-[checked]:translate-x-[16px] group-data-[checked]:bg-accent" />
        </HeadlessSwitch>
    )
}

export default Switch
