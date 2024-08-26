import SVGWrapper, {ExpandedSvgProps} from "./SVGWrapper";

const Success = ({...props}: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <circle cx="12" cy="12" r="8" stroke="currentColor"/>
            <path
                d="M8.5 11.5L11 14L15.5 9.5"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="bevel"
            />
        </SVGWrapper>
    );
};

export default Success;