'use client'
import { toast, toast as sonnerToast } from 'sonner'
import { AlertIcon, ErrorIcon, InformationIcon, SuccessIcon, XIcon } from '@/common/ui/Icons'
import LoadingAnimation from '@/common/ui/LoadingAnimation'
import { useEffect, useState } from 'react'
import { Button } from '@headlessui/react'

export const aiToast = (message: string, callback_action?: () => void) => {
    const Container = callback_action ? Button : 'div'
    sonnerToast.custom((t) => (
        <Container
            onClick={callback_action}
            className="flex flex-row bg-primary-950 p-2 gap-2 items-center rounded-md border border-primary-950"
        >
            <InformationIcon size="default" className="text-primary-950" />
            <span className="text-primary-100 text-text flex-grow overflow-hidden">{message}</span>
            <Button
                className={callback_action ? 'text-accent' : 'text-primary-950'}
                onClick={(e) => {
                    e.stopPropagation() // So it doesn’t also call onClick
                    sonnerToast.dismiss(t)
                }}
            >
                <XIcon size="default" />
            </Button>
        </Container>
    ))
}

export const infoToast = (message: string) => {
    sonnerToast.custom((t) => (
        <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-primary-950">
            <InformationIcon size="default" className="text-primary-950" />
            <span className="text-primary-950 text-text flex-grow whitespace-nowrap overflow-hidden">
                {message}
            </span>
            <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
                <XIcon size="default" />
            </div>
        </div>
    ))
}

export const successToast = (message: string) => {
    sonnerToast.custom((t) => (
        <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-success">
            <SuccessIcon size="default" className="text-success" />
            <span className="text-primary-950 text-text flex-grow whitespace-nowrap overflow-hidden">
                {message}
            </span>
            <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
                <XIcon size="default" />
            </div>
        </div>
    ))
}

export const alertToast = (message: string) => {
    sonnerToast.custom((t) => (
        <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-warning">
            <AlertIcon size="default" className="text-warning" />
            <span className="text-primary-950 text-text flex-grow ">{message}</span>
            <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
                <XIcon size="default" />
            </div>
        </div>
    ))
}

export const errorToast = (message: string) => {
    sonnerToast.custom((t) => (
        <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-error">
            <ErrorIcon size="default" className=" text-error" />
            <span className="text-primary-950 text-text flex-grow ">{message}</span>
            <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
                <XIcon size="default" />
            </div>
        </div>
    ))
}

// Modified loadingToast function with countdown
const loadingToast = (message: string, seconds?: number) => {
    const id = sonnerToast.custom((t) => (
        <LoadingToastContent message={message} seconds={seconds} toastId={t} />
    ))
    return id
}

// LoadingToastContent component to handle countdown
interface LoadingToastContentProps {
    message: string
    seconds?: number
    toastId: any // Adjust type according to your toast library
}

const LoadingToastContent: React.FC<LoadingToastContentProps> = ({ message, seconds, toastId }) => {
    const [remainingSeconds, setRemainingSeconds] = useState<number | undefined>(seconds)

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (remainingSeconds !== undefined && remainingSeconds > 0) {
            interval = setInterval(() => {
                setRemainingSeconds((prev) => (prev ? prev - 1 : 0))
            }, 1000)
        }
        return () => {
            if (interval) clearInterval(interval)
        }
    }, [remainingSeconds])

    return (
        <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-primary-950">
            <LoadingAnimation size="default" />
            <span className="text-primary-950 text-text flex-grow whitespace-nowrap overflow-hidden">
                {message}
                {remainingSeconds !== undefined &&
                    remainingSeconds >= 0 &&
                    ` (${remainingSeconds}s)`}
            </span>
            <div className="text-primary-950" onClick={() => toast.dismiss(toastId)}>
                <XIcon size="default" />
            </div>
        </div>
    )
}

// Promise Toast
export const promiseToast = <T,>(
    promise: Promise<T>,
    messages: { pending: string; success: string; error: string },
    seconds?: number,
): Promise<T> => {
    // Display the loading toast with optional countdown
    const toastId = loadingToast(messages.pending, seconds)

    // Handle promise resolution and rejection
    return promise
        .then((result) => {
            sonnerToast.custom(
                (t) => (
                    <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-success">
                        <SuccessIcon size="default" className="text-success" />
                        <span className="text-primary-950 text-text flex-grow whitespace-nowrap overflow-hidden">
                            {messages.success}
                        </span>
                        <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
                            <XIcon size="default" />
                        </div>
                    </div>
                ),
                { id: toastId },
            )
            return result
        })
        .catch((error) => {
            sonnerToast.custom(
                (t) => (
                    <div className="flex flex-row bg-white p-2 gap-2 items-center rounded-md border border-error">
                        <ErrorIcon size="default" className=" text-error" />
                        <span className="text-primary-950 text-text flex-grow ">
                            {messages.error}
                        </span>
                        <div className="text-primary-950" onClick={() => toast.dismiss(t)}>
                            <XIcon size="default" />
                        </div>
                    </div>
                ),
                { id: toastId },
            )
            throw error
        })
}
