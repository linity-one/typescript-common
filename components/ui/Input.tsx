import { FC } from 'react'
import {cva,VariantProps} from "cva";


const InputVariants = cva(
    '',
    {
        variants: {
            variant: {
                primary: '',
                secondary: '',
            }
        },
        compoundVariants: [
        ],
        defaultVariants: {
            variant: 'primary',
        }
    })

interface InputProps extends VariantProps<typeof InputVariants>{

}

const Input: FC<InputProps> = ({}) => {
    return <div>Input</div>
}

export default Input