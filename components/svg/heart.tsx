import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Heart = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path
                d="M4.31802 5.95401C2.56066 7.71137 2.56066 10.5606 4.31802 12.318L12.0001 20L19.682 12.318C21.4393 10.5606 21.4393 7.71136 19.682 5.95401C17.9246 4.19665 15.0754 4.19665 13.318 5.95401L12.0001 7.27208L10.682 5.95401C8.92462 4.19665 6.07538 4.19665 4.31802 5.95401Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SVGWrapper>
    )
}

export default Heart
