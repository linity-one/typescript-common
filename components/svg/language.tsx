import { SVGProps } from 'react'
import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Language = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path
                d="M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SVGWrapper>
    )
}

export default Language
