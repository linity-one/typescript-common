import { VariantProps } from 'cva'
import { CardVariants } from '../../ui/Card'

export interface ModalBaseProps extends VariantProps<typeof CardVariants> {
    type: string
    title: string
    close_fn?: () => void
}
