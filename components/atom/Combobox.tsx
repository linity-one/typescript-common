import { Field, Combobox as HeadlessCombobox, Label, Description } from '@headlessui/react'
import { useEffect, useRef, useState } from 'react'
import { InputWrapperVariants } from '../ui/InputWrapper'
import { VariantProps } from 'cva'
import { cn } from '../../lib/cn'
import { CheckIcon } from '../ui/Icons'
import { InputVariants } from '../ui/Input'
import InputSubtext from '../ui/InputSubtext'

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
    subtext?: string | JSX.Element
    value?: X | null
    onChange?: (value: X | null) => void
    errors?: boolean
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
    errors = false,
}: ComboboxProps<X>) => {
    const [query, setQuery] = useState('')
    const [dropdownItems, setDropdownItems] = useState<X[]>([])
    const [selectedItem, setSelectedItem] = useState<X | null>(value)
    const [mounted, setMounted] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setSelectedItem(value)
    }, [value])

    useEffect(() => {
        const fetchItems = async () => {
            if (query.trim()) {
                const results = await autocompleteFunctions.autocompleteFunction(query)
                setDropdownItems(results)
            } else {
                setDropdownItems([])
            }
        }

        const debounce = setTimeout(fetchItems, 300)
        return () => clearTimeout(debounce)
    }, [query, autocompleteFunctions])

    const handleSelectionChange = (item: X) => {
        setSelectedItem(item)
        setQuery('')
        inputRef.current?.blur()
        onChange(item)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && dropdownItems.length > 0) {
            event.preventDefault()
            handleSelectionChange(dropdownItems[0])
        }
    }

    return (
        <Field id={name} className={className}>
            <HeadlessCombobox
                name={name}
                value={selectedItem}
                onChange={handleSelectionChange}
                disabled={errors}
            >
                {({ open }) => (
                    <div className="relative">
                        <div className={InputWrapperVariants({ variant, className: 'min-h-8' })}>
                            <HeadlessCombobox.Input
                                ref={inputRef}
                                className={InputVariants({
                                    className: cn(
                                        'data-open:rounded-b-none data-open:focus:ring-0',
                                        errors && 'border-error',
                                    ),
                                })}
                                placeholder={placeholderText}
                                onChange={(event) => {
                                    const val = event.target.value
                                    setQuery(val)
                                    if (val === '') {
                                        setSelectedItem(null)
                                        onChange(null)
                                    }
                                }}
                                onKeyDown={handleKeyDown}
                                displayValue={(item: X) =>
                                    item ? autocompleteFunctions.renderFunction(item) : ''
                                }
                            />
                            <Label className="order-1 text-text text-primary-600 peer-focus:text-primary-950 data-open:text-primary-950">
                                {label}
                            </Label>

                            {mounted && dropdownItems.length > 0 && (
                                <HeadlessCombobox.Options
                                    anchor="bottom"
                                    className={cn(
                                        'w-(--input-width) bg-white [--anchor-gap:var(--spacing-1)]',
                                        'border border-primary-400 rounded-b-md shadow-lg',
                                        'transform transition-all duration-100 ease-in-out',
                                        open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95',
                                    )}
                                    static
                                >
                                    {dropdownItems.map((val, idx) => (
                                        <HeadlessCombobox.Option
                                            key={idx}
                                            value={val}
                                            className={({ focus }) =>
                                                cn(
                                                    'group flex items-center justify-between',
                                                    'px-3 py-2 text-sm cursor-default',
                                                    'border-b border-l border-r border-primary-400',
                                                    'last:rounded-b-md',
                                                    focus ? 'bg-primary-50' : 'bg-white',
                                                )
                                            }
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span className="truncate">
                                                        {autocompleteFunctions.renderFunction(val)}
                                                    </span>
                                                    {selected && (
                                                        <CheckIcon
                                                            size="small"
                                                            className="text-primary-600"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </>
                                            )}
                                        </HeadlessCombobox.Option>
                                    ))}
                                </HeadlessCombobox.Options>
                            )}
                        </div>

                        {subtext && (
                            <Description
                                className={cn('mt-1', errors ? 'text-error' : 'text-primary-600')}
                            >
                                <InputSubtext>{subtext}</InputSubtext>
                            </Description>
                        )}
                    </div>
                )}
            </HeadlessCombobox>
        </Field>
    )
}

export default Combobox
