import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const TrendUp = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props} viewBox="0 0 24 24">
            <g clipPath="url(#clip0_38166_43)">
                <path
                    d="M1.5 19L9.28448 11L13.6293 15L22.5 5M22.5 5V11.6324M22.5 5H15.2586"
                    stroke="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_38166_43">
                    <rect width="24" height="24" transform="matrix(1 0 0 -1 0 24)" />
                </clipPath>
            </defs>
        </SVGWrapper>
    )
}

export default TrendUp
