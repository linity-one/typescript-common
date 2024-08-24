import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper';

const Logout = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M13 16L17 12M17 12L13 8M17 12L3 12M8 16V17C8 18.6569 9.34315 20 11 20H18C19.6569 20 21 18.6569 21 17V7C21 5.34315 19.6569 4 18 4H11C9.34315 4 8 5.34315 8 7V8"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </SVGWrapper>
  );
};

export default Logout;
