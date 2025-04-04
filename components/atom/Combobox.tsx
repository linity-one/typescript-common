import { Field, Combobox as HeadlessCombobox, Label } from '@headlessui/react'
import { useEffect, useRef, useState } from 'react'
import { InputWrapperVariants } from '../ui/InputWrapper'
import { VariantProps } from 'cva'
import { cn } from '../../lib/cn'
import { CheckIcon } from '../ui/Icons'
import { InputVariants } from '../ui/Input'

export interface AutocompleteFunctions<X> {
    autocompleteFunction: (input: string) => Promise<X[]>
    renderFunction: (elm: X) => string
}

interface ComboboxProps<X> extends VariantProps<typeof InputWrapperVariants> {
    autocompleteFunctions: AutocompleteFunctions<X>
    className?: string
    placeholderText?: string
    name?: string
    label?: string | JSX.Element
    subtext?: string
    value?: X | null
    onChange?: (value: X | null) => void
}

const Combobox = <X,>({
    label,
    subtext,
    name,
    className,
    variant,
    placeholderText,
    autocompleteFunctions,
    value = null,
    onChange = () => {},
}: ComboboxProps<X>) => {
    const [query, setQuery] = useState('')
    const [dropdownItems, setDropdownItems] = useState<X[]>([])
    const [selectedItem, setSelectedItem] = useState<X | null>(value)
    const [mounted, setMounted] = useState(false)

    // Set mounted flag once
    useEffect(() => {
        setMounted(true)
    }, [])

    // Sync state if the incoming value changes.
    useEffect(() => {
        setSelectedItem(value)
    }, [value])

    useEffect(() => {
        if (query === '') {
            setDropdownItems([])
        } else {
            autocompleteFunctions
                .autocompleteFunction(query)
                .then((results) => setDropdownItems(results))
        }
    }, [query, autocompleteFunctions])

    const inputRef = useRef<HTMLInputElement>(null)

    // Call toast in an effect after mount, so that state updates in the toast system
    // happen outside the render of other components.

    // Handle selection for a single item.
    const handleSelectionChange = (item: X) => {
        setSelectedItem(item)
        setQuery('')
        inputRef.current?.blur()
        onChange(item)
    }

    // When user presses Enter, select the first dropdown item if available.
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && dropdownItems.length > 0) {
            event.preventDefault()
            handleSelectionChange(dropdownItems[0])
        }
    }

    return (
        <Field id={name} className={className}>
            <HeadlessCombobox name={name} value={selectedItem} onChange={handleSelectionChange}>
                <div className={InputWrapperVariants({ variant, className: 'min-h-17' })}>
                    <HeadlessCombobox.Input
                        ref={inputRef}
                        className={InputVariants({
                            className: 'data-[open]:rounded-b-none data-[open]:focus:ring-0',
                        })}
                        placeholder={placeholderText}
                        onChange={(event) => setQuery(event.target.value)}
                        onKeyDown={handleKeyDown}
                        value={
                            query ||
                            (selectedItem ? autocompleteFunctions.renderFunction(selectedItem) : '')
                        }
                    />
                    <Label className="order-1 text-text text-primary-600 peer-focus:text-primary-950 data-[open]:text-primary-950">
                        {label}
                    </Label>
                    <HeadlessCombobox.Options
                        anchor="bottom"
                        className={cn(
                            'w-[var(--input-width)] bg-white [--anchor-gap:var(--spacing-1)] focus:outline-none',
                            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0',
                        )}
                    >
                        {dropdownItems.map((val, idx) => (
                            <HeadlessCombobox.Option
                                key={idx}
                                value={val}
                                className="group flex items-center justify-between cursor-default border-b border-l border-r border-primary-400 px-2 py-1 last:rounded-b-md text-text text-primary-950 select-none data-[focus]:bg-primary-100"
                            >
                                <span className={cn('text-primary-950 text-text')}>
                                    {autocompleteFunctions.renderFunction(val)}
                                </span>
                                <CheckIcon
                                    className="invisible group-data-[selected]:visible"
                                    size="default"
                                    aria-hidden="true"
                                />
                            </HeadlessCombobox.Option>
                        ))}
                    </HeadlessCombobox.Options>
                </div>
            </HeadlessCombobox>
        </Field>
    )
}

export default Combobox
