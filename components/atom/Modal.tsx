import { FC, ReactNode } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XIcon } from '../ui/Icons'
import { CardVariants } from '../ui/Card'
import { VariantProps } from 'cva'
import { cn } from '../../lib/cn'

interface ModalProps {
    variant: VariantProps<typeof CardVariants>['variant']
    isOpen: boolean
    close: () => void
    className?: string
    children: ReactNode
    title?: string
    backdrop: boolean
}

const Modal: FC<ModalProps> = ({
    variant,
    title,
    isOpen,
    close,
    className,
    children,
    backdrop,
}) => {
    return (
        <Dialog open={isOpen} onClose={() => close()}>
            {backdrop && <DialogBackdrop className="fixed inset-0 bg-primary-950/60" />}
            <div className="fixed flex inset-0 w-screen items-center justify-center p-8">
                <DialogPanel
                    className={cn(
                        CardVariants({ variant, hover: 'static', flow: 'vertical' }),
                        'min-w-60 ',
                        className,
                    )}
                >
                    <div className="flex flex-row justify-between">
                        {title && <DialogTitle as="h3">{title}</DialogTitle>}
                        <div onClick={() => close()}>
                            {' '}
                            <XIcon className="hover:scale-125" size="large" />
                        </div>
                    </div>
                    <div>{children}</div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default Modal
