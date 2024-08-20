import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper';

const Chat = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M17 6H19C20.1046 6 21 6.89543 21 8V14C21 15.1046 20.1046 16 19 16H17V20L13 16H9C8.44772 16 7.94772 15.7761 7.58579 15.4142M7.58579 15.4142L11 12H15C16.1046 12 17 11.1046 17 10V4C17 2.89543 16.1046 2 15 2H5C3.89543 2 3 2.89543 3 4V10C3 11.1046 3.89543 12 5 12H7V16L7.58579 15.4142Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGWrapper>
  );
};

export default Chat;
