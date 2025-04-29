'use client'
// ModalContainer.tsx
import React, { useEffect } from 'react'
import Wrapper, { WrapperProps as ModalData } from './modal_contents/Wrapper'

import ModalService from './ModalService'

const ModalContainer: React.FC = () => {
    const [modal, setModal] = React.useState<{ data: ModalData; key: string } | null>(null)

    useEffect(() => {
        ModalService.register_callback(setModal)

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && modal) {
                ModalService.close_modal(modal.key)
            }
        }

        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [modal])

    const handleOutsideClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget && modal) {
            ModalService.close_modal(modal.key)
        }
    }

    return modal ? (
        <div
            className={
                'absolute inset-0 bg-gunmetal/50 z-50 grid grid-cols-8 items-center justify-center'
            }
            onClick={handleOutsideClick}
        >
            <Wrapper {...modal.data} close_fn={() => ModalService.close_modal(modal.key)} />
        </div>
    ) : null
}

export default ModalContainer

export function create_modal(data: ModalData) {
    return ModalService.create_modal(data)
}

export function update_modal(id: string, data: ModalData) {
    return ModalService.update_modal(id, data)
}

export function close_modal(id: string) {
    return ModalService.close_modal(id)
}
