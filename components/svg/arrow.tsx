import { SVGProps } from 'react';

const Arrow = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.5586 3H4.27247V6.8408H14.4439L3 18.2847L5.71528 21L17.1592 9.55608V19.7275H21V5.44141L18.5586 3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow;
