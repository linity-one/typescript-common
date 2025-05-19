import { FC } from 'react'
import SVGWrapper, { SvgVariantsProps } from './SVGWrapper'

const ThreeDots: FC<SvgVariantsProps & { className?: string }> = ({ size, className }) => {
    return (
        <SVGWrapper size={size} className={className}>
            <path
                d="M5 10.8496C5.63513 10.8496 6.15039 11.3649 6.15039 12C6.15039 12.6351 5.63513 13.1504 5 13.1504C4.36487 13.1504 3.84961 12.6351 3.84961 12C3.84961 11.3649 4.36487 10.8496 5 10.8496ZM12 10.8496C12.6351 10.8496 13.1504 11.3649 13.1504 12C13.1504 12.6351 12.6351 13.1504 12 13.1504C11.3649 13.1504 10.8496 12.6351 10.8496 12C10.8496 11.3649 11.3649 10.8496 12 10.8496ZM19 10.8496C19.6351 10.8496 20.1504 11.3649 20.1504 12C20.1504 12.6351 19.6351 13.1504 19 13.1504C18.3649 13.1504 17.8496 12.6351 17.8496 12C17.8496 11.3649 18.3649 10.8496 19 10.8496Z"
                stroke="currentColor"
            />
        </SVGWrapper>
    )
}

export default ThreeDots
