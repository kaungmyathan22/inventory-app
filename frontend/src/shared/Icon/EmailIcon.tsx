import React, { SVGProps } from "react";

function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g>
        <path
          stroke="#939DD4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.333"
          d="M14.667 4c0-.733-.6-1.333-1.334-1.333H2.667c-.734 0-1.334.6-1.334 1.333m13.334 0v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333V4m13.334 0L8 8.667 1.333 4"
        ></path>
      </g>
    </svg>
  );
}

export default EmailIcon;
