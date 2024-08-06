import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper';

const X = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M4 6L20 6M4 12L20 12M4 18H20"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </SVGWrapper>
  );
};

export default X;
