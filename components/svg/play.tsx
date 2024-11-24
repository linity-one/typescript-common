import SVGWrapper, { ExpandedSvgProps } from "./SVGWrapper";

const Play = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path
                d="M10 16V8L16 12L10 16Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="bevel"
            />
            <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </SVGWrapper>
    );
};

export default Play;
