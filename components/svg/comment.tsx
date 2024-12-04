import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Comment = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path
                d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V13C21 14.1046 20.1046 15 19 15H14L9 20V15H5C3.89543 15 3 14.1046 3 13V5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SVGWrapper>
    )
}

export default Comment
