import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Pencil = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props} viewBox="0 0 24 24">
            <path
                d="M21.4142 3.58579C20.6332 2.80474 19.3668 2.80474 18.5858 3.58579L10 12.1716L10 15H12.8284L21.4142 6.41421C22.1953 5.63316 22.1953 4.36683 21.4142 3.58579Z"
                stroke="currentColor"
                strokeLinecap="square"
            />
            <path
                d="M12 5H5V20H20V13"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="bevel"
            />
        </SVGWrapper>
    )
}

export default Pencil
