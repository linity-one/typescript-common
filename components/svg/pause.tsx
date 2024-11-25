import SVGWrapper, { ExpandedSvgProps } from "./SVGWrapper";

const Pause = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M10 9V15M14 9V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="1.41421"
        strokeLinecap="square"
      />
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="1.41421"
        strokeLinecap="square"
      />
    </SVGWrapper>
  );
};

export default Pause;
