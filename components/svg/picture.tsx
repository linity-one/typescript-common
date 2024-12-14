import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Picture = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path
                d="M10.5933 15.699L11.3394 16.0755L11.8424 15.408L14.3095 12.1342L17.8449 18.0644H5.93991L7.94061 14.3603L10.5933 15.699Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M6.58691 8.21595C6.58691 7.29319 7.33424 6.54569 8.25694 6.54541C9.18057 6.54664 9.928 7.29392 9.928 8.21595C9.928 9.13889 9.1804 9.8865 8.25746 9.8865C7.33452 9.8865 6.58691 9.13889 6.58691 8.21595Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M2.5 21.5L2.5 2.5L21.5 2.5L21.5 21.5L2.5 21.5Z"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </SVGWrapper>
    )
}

export default Picture
