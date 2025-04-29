import React, { FC } from 'react'

export interface BlankModalProps {
    type: 'blank'
    content: React.ReactNode
    close_fn?: () => void
}

const BlankModal: FC<BlankModalProps> = ({ content }) => {
    return <>{content}</>
}

export default BlankModal 