import SVGWrapper, { ExpandedSvgProps } from "./SVGWrapper";

const Alert = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M5 13L9 17L19 7"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </SVGWrapper>
  );
};

export default Alert;
