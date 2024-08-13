import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper';

const Heart = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M4.31802 4.95401C2.56066 6.71137 2.56066 9.56061 4.31802 11.318L12.0001 19L19.682 11.318C21.4393 9.56061 21.4393 6.71136 19.682 4.95401C17.9246 3.19665 15.0754 3.19665 13.318 4.95401L12.0001 6.27208L10.682 4.95401C8.92462 3.19665 6.07538 3.19665 4.31802 4.95401Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGWrapper>
  );
};

export default Heart;
