import React, { FC } from 'react'
import { ModalBaseProps } from './BaseModal'
import Card from '../../ui/Card'
import Button from '../../ui/Button'
import { XIcon } from '../../ui/Icons'

export interface ConfirmModalProps extends ModalBaseProps {
    type: 'confirm'
    content: React.ReactNode
    onConfirm?: () => void
    onCancel?: () => void
    confirmText?: string
    cancelText?: string
}

const ConfirmModal: FC<ConfirmModalProps> = ({
    title,
    content,
    close_fn,
    onConfirm,
    onCancel,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
}) => {
    const handleConfirm = () => {
        if (onConfirm) onConfirm()
        close_fn()
    }

    const handleCancel = () => {
        if (onCancel) onCancel()
        close_fn()
    }

    return (
        <Card className="w-full overflow-hidden">
            <div className="flex justify-between items-center p-xl">
                <h3 className="text-h3 font-bold">{title}</h3>
                <Button variant="tertiary" size="sm" onClick={close_fn} aria-label="Close">
                    <XIcon size={'default'} />
                </Button>
            </div>
            {content}

            <div className="flex justify-end gap-md">
                <Button variant="secondary" size="md" onClick={handleCancel}>
                    {cancelText}
                </Button>
                <Button variant="primary" size="md" onClick={handleConfirm}>
                    {confirmText}
                </Button>
            </div>
        </Card>
    )
}

export default ConfirmModal
