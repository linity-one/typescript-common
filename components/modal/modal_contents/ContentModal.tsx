import React, { FC } from 'react'
import { ModalBaseProps } from './BaseModal'
import Card from '../../ui/Card'

export interface ContentModalProps extends ModalBaseProps {
    type: 'content'
    content: React.ReactNode
}

const ContentModal: FC<ContentModalProps> = ({ title, content, close_fn }) => {
    return <Card className="w-full overflow-hidden">{content}</Card>
}

export default ContentModal
