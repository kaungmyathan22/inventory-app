import { SVGProps } from "react";

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <path
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18 6L6 18M6 6l12 12"
        ></path>
      </g>
    </svg>
  );
}

export default CloseIcon;
