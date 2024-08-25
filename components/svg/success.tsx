import SVGWrapper, { ExpandedSvgProps } from "./SVGWrapper";

const Success = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M9.70711 11.2929L9 10.5858L7.58579 12L8.29289 12.7071L10.2929 14.7071H11.7071L15.7071 10.7071L16.4142 10L15 8.58579L14.2929 9.29289L11 12.5858L9.70711 11.2929ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </SVGWrapper>
  );
};

export default Success;
