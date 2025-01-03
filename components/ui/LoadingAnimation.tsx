import React, { FC, forwardRef } from 'react'
import { cva, VariantProps } from 'cva'
import { hidden } from 'next/dist/lib/picocolors'

export const loadingAnimationVariants = cva(
    '', // Base classes for transition
    {
        variants: {
            size: {
                small: 'w-2 h-2 text-primary-950',
                default: 'w-3 h-3 text-primary-950',
                large: 'w-5 h-5 text-primary-950',
                fullscreen:
                    'z-20 text-cloud w-24 h-24 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    },
)

interface loadingAnimationProps
    extends React.SVGProps<SVGSVGElement>,
        VariantProps<typeof loadingAnimationVariants> {
    animation_time?: number
}

const LoadingAnimation: FC<loadingAnimationProps> = forwardRef<
    SVGSVGElement,
    loadingAnimationProps
>(({ animation_time = 2, className, size, ...props }, ref) => {
    const bars = []
    for (let i = 0; i < 16; i++) {
        bars.push(
            <path
                key={i}
                //d="M334.595 334.588H375.405V0.594604C368.646 0.215436 361.845 0 355 0H354.81C348.026 0 341.284 0.215436 334.595 0.594604L334.595 334.588Z"
                d="M375.405 230.361V0.594604C368.646 0.215436 361.845 0 355 0H354.81C348.026 0 341.284 0.215436 334.595 0.594604V230.361H375.405Z"
                fill="currentColor"
                opacity="0"
                style={{
                    transform: `rotate(${i * 22.5}deg)`, // 360 / 16 = 22.5 degrees
                    transformOrigin: 'center',
                    animation: `fade ${animation_time}s ${(i * animation_time) / 16}s infinite cubic-bezier(0.42, 0, 0.58, 1)`,
                }}
            />,
        )
    }

    return (
        <>
            <svg
                className={loadingAnimationVariants({ size, className })}
                {...props}
                ref={ref}
                viewBox="0 0 710 710"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {bars}
                <style>
                    {`
          @keyframes fade {
            0% { opacity: 1; }
            20% { opacity: 0.4; }
            60% { opacity: 0; }
            100% { opacity: 0; }
          }
        `}
                </style>
            </svg>
            <div
                className={
                    size == 'fullscreen'
                        ? 'z-10 bg-gunmetal opacity-50 absolute h-screen w-screen top-0 left-0'
                        : 'hidden'
                }
            />
        </>
    )
})

LoadingAnimation.displayName = 'LoadingAnimation'

export default LoadingAnimation
