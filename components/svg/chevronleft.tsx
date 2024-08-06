import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper';

const Chevronleft = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M15 19L8 12L15 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </SVGWrapper>
  );
};

export default Chevronleft;
