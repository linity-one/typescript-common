import SVGWrapper, { ExpandedSvgProps } from "./SVGWrapper";

const ChevronDown = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M19 8L12 15L5 8"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </SVGWrapper>
  );
};

export default ChevronDown;
