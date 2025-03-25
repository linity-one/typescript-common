import { VariantProps } from 'cva'
import { InputWrapperVariants } from '../ui/InputWrapper'

export interface AutocompleteFunctions<X> {
    autocompleteFunction: (input: string) => Promise<X[]>
    renderFunction: (elm: X) => string
}

interface ComboboxProps<X> extends VariantProps<typeof InputWrapperVariants> {
    autocompleteFunctions: AutocompleteFunctions<X>
    className?: string
    placeholderText?: string
    name?: string
    label?: string
    subtext?: string
    value?: X[]
    onChange?: (value: X[]) => void
}

const Combobox = <X,>({ autocompleteFunctions }: ComboboxProps<X>) => {
    return <div>Combobox</div>
}

export default Combobox
