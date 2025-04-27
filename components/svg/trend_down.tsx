import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const TrendDown = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props} viewBox="0 0 24 24">
            <path
                d="M1.5 5L9.28448 13L13.6293 9L22.5 19M22.5 19V12.3676M22.5 19H15.2586"
                stroke="currentColor"
            />
        </SVGWrapper>
    )
}

export default TrendDown
