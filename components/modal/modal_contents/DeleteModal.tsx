import React, { FC } from 'react'
import { ModalBaseProps } from './BaseModal'
import Card from '../../ui/Card'
import Button from '../../ui/Button'
import { XIcon } from '../../ui/Icons'

export interface DeleteModalProps extends ModalBaseProps {
    type: 'delete'
    content: React.ReactNode
    onDelete?: () => void
    onCancel?: () => void
    deleteText?: string
    cancelText?: string
}

const DeleteModal: FC<DeleteModalProps> = ({
    title,
    content,
    close_fn,
    onDelete,
    onCancel,
    deleteText = 'Delete',
    cancelText = 'Cancel',
}) => {
    const handleDelete = () => {
        if (onDelete) onDelete()
        close_fn()
    }

    const handleCancel = () => {
        if (onCancel) onCancel()
        close_fn()
    }

    return (
        <Card className="w-full overflow-hidden">
            <div className="flex justify-between items-center">
                <h3 className="text-h3 font-bold">{title}</h3>
                <Button variant="tertiary" size="sm" onClick={close_fn} aria-label="Close">
                    <XIcon size={'default'} />
                </Button>
            </div>
            {content}
            <div className="flex justify-center gap-md">
                <Button variant="secondary" size="md" onClick={handleCancel}>
                    {cancelText}
                </Button>
                <Button variant="delete" size="md" onClick={handleDelete}>
                    {deleteText}
                </Button>
            </div>
        </Card>
    )
}

export default DeleteModal
