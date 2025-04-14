import React, { FC } from 'react'
import { ModalBaseProps } from './BaseModal'
import Card from '../../ui/Card'
import Button from '../../ui/Button'
import { XIcon } from '../../ui/Icons'

export interface OkayModalProps extends ModalBaseProps {
    type: 'okay'
    content: React.ReactNode
    okayText?: string
}

const OkayModal: FC<OkayModalProps> = ({ title, content, close_fn, okayText = 'Okay' }) => {
    return (
        <Card className="w-full overflow-hidden">
            <div className="flex justify-between items-center">
                <h3 className="text-h3 font-bold">{title}</h3>
                <Button variant="tertiary" size="sm" onClick={close_fn} aria-label="Close">
                    <XIcon size={'default'} />
                </Button>
            </div>

            {content}

            <div className="flex justify-end">
                <Button variant="primary" size="md" onClick={close_fn}>
                    {okayText}
                </Button>
            </div>
        </Card>
    )
}

export default OkayModal
