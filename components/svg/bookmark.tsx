import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Bookmark = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path
                d="M5 5C5 3.89543 5.89543 3 7 3L17 3C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21L5 5Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="miter"
            />
        </SVGWrapper>
    )
}

export default Bookmark
