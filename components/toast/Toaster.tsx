import { FC } from 'react'
import { Toaster as SonnerToaster } from 'sonner'
import LoadingAnimation from '../ui/LoadingAnimation'

interface ToasterProps {}

const Toaster: FC<ToasterProps> = ({}) => {
    return (
        <SonnerToaster
            position="top-right"
            style={{
                width: '400px',
            }}
            toastOptions={{
                style: {
                    width: '400px',
                },
                unstyled: true,
                duration: 3000,
            }}
        />
    )
}

export default Toaster
