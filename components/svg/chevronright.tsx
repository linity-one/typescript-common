import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper';

const ChevronRight = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </SVGWrapper>
  );
};

export default ChevronRight;
