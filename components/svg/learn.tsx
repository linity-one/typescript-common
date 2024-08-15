import SVGWrapper, { ExpandedSvgProps } from "./SVGWrapper";

const Chat = ({ ...props }: ExpandedSvgProps) => {
  return (
    <SVGWrapper {...props}>
      <path
        d="M12 13.9445L21 8.94446L12 3.94446L3 8.94446L12 13.9445ZM12 13.9445L18.1591 10.5227C18.7017 11.891 19 13.3829 19 14.9444C19 15.6457 18.9398 16.333 18.8244 17.0013C16.2143 17.2551 13.849 18.3451 12 20C10.151 18.3451 7.78571 17.2551 5.17562 17.0013C5.06017 16.333 5 15.6457 5 14.9443C5 13.3828 5.29824 11.891 5.84088 10.5227L12 13.9445ZM8 19.9444L8 12.4445L12 10.2222"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGWrapper>
  );
};

export default Chat;

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 13.9445L21 8.94446L12 3.94446L3 8.94446L12 13.9445ZM12 13.9445L18.1591 10.5227C18.7017 11.891 19 13.3829 19 14.9444C19 15.6457 18.9398 16.333 18.8244 17.0013C16.2143 17.2551 13.849 18.3451 12 20C10.151 18.3451 7.78571 17.2551 5.17562 17.0013C5.06017 16.333 5 15.6457 5 14.9443C5 13.3828 5.29824 11.891 5.84088 10.5227L12 13.9445ZM8 19.9444L8 12.4445L12 10.2222"
    stroke="#28333A"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>;
