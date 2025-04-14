import ConfirmModal, { ConfirmModalProps } from './ConfirmModal'
import OkayModal, { OkayModalProps } from './OkayModal'
import DeleteModal, { DeleteModalProps } from './DeleteModal'
import ContentModal, { ContentModalProps } from './ContentModal'

import { FC } from 'react'

export type WrapperProps = ConfirmModalProps | OkayModalProps | DeleteModalProps | ContentModalProps

export type ModalType = WrapperProps['type']

const Wrapper: FC<WrapperProps> = (props) => {
    switch (props.type) {
        case 'confirm':
            return <ConfirmModal {...props as ConfirmModalProps} />
        case 'okay':
            return <OkayModal {...props as OkayModalProps} />
        case 'delete':
            return <DeleteModal {...props as DeleteModalProps} />
        case 'content':
            return <ContentModal {...props as ContentModalProps} />
        default:
            return null
    }
}

export default Wrapper
