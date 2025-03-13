import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Picture = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path
                d="M13.9072 12L16.8 16.3651L16.4302 16.8H7.50597L7.19995 16.3472L8.85464 13.4363H9.1365L11.4184 14.2632L13.9072 12Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M7.19995 9.00001C7.19995 8.00568 8.00562 7.20001 8.99995 7.20001C9.9934 7.20104 10.8 8.00521 10.8 9.00001C10.8 9.99434 9.99428 10.8 8.99995 10.8C8.00562 10.8 7.19995 9.99434 7.19995 9.00001Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M4.39996 19.6L4.39996 4.40001L19.6 4.4L19.6 19.6L4.39996 19.6Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </SVGWrapper>
    )
}

export default Picture
