import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper';

const Plus = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M12 4V20M20 12L4 12"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </SVGWrapper>
  );
};

export default Plus;
