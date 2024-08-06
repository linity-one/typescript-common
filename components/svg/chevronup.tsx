import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper';

const ChevronUp = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M5 16L12 9L19 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </SVGWrapper>
  );
};

export default ChevronUp;
