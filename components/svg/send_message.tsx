import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const SendMessage = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props} viewBox="0 0 24 24">
            <path
                d="M11.3078 12.7638L16.1539 7.91761M11.3078 12.7638L16 22.0714L22 1.92856L2 8.57142L11.3078 12.7638Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="bevel"
            />
        </SVGWrapper>
    )
}

export default SendMessage
