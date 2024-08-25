import SVGWrapper, { ExpandedSvgProps } from "./SVGWrapper";

const X = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M6 18L18 6M6 6L18 18"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </SVGWrapper>
  );
};

export default X;
