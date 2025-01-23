import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Write = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path
                d="M20.4142 3.58579C19.6332 2.80474 18.3668 2.80474 17.5858 3.58579L9 12.1716L9 15H11.8284L20.4142 6.41421C21.1953 5.63316 21.1953 4.36683 20.4142 3.58579Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="miter"
            />
            <path
                d="M11 5H4V20H19V13"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="bevel"
            />
        </SVGWrapper>
    )
}

export default Write
