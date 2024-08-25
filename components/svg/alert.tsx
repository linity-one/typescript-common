import SVGWrapper, { ExpandedSvgProps } from "./SVGWrapper";

const Alert = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M12 10V12M12 16H12.01M5.07177 20H18.9282C20.4678 20 21.43 18.3333 20.6602 17L13.732 5C12.9622 3.66667 11.0377 3.66667 10.2679 5L3.33972 17C2.56992 18.3333 3.53217 20 5.07177 20Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </SVGWrapper>
  );
};

export default Alert;
