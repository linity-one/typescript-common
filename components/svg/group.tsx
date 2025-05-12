import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Group = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path
                d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM6.5 11.5a2 2 0 100-4 2 2 0 000 4zM17.5 11.5a2 2 0 100-4 2 2 0 000 4z"
                fill="currentColor"
            />
            <path
                d="M12 12.75c-2.76 0-5 1.92-5 4.25v1h10v-1c0-2.33-2.24-4.25-5-4.25zM6.5 12.25c-1.94 0-3.5 1.3-3.5 2.75v1h3v-1c0-1.02.37-1.96 1-2.75-.16 0-.33-.03-.5 0zM17.5 12.25c-.17-.03-.34 0-.5 0 .63.79 1 1.73 1 2.75v1h3v-1c0-1.45-1.56-2.75-3.5-2.75z"
                fill="currentColor"
            />
        </SVGWrapper>
    )
}

export default Group
