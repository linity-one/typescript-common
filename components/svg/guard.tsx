import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Guard = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props} viewBox="0 0 24 24">
            <path
                d="M10.0265 12.8784L11.5 14.5L15.0265 10.5M5 6.3V14.5333C5 17.0667 8.37039 20.4867 12 21.5C15.6296 20.4867 19 17.0667 19 14.5333V6.3C16.6667 6.3 12 3.89333 12 2.5C12 3.89333 7.33335 6.3 5 6.3Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="bevel"
            />
        </SVGWrapper>
    )
}

export default Guard
