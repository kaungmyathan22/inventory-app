import React, { SVGProps } from "react";

function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <g clipPath="url(#clip0_1404_12671)">
        <path
          fill="#FEC84B"
          d="M9.538 1.61a.5.5 0 01.924 0l2.066 4.967a.5.5 0 00.421.307l5.363.43a.5.5 0 01.286.878l-4.086 3.5a.5.5 0 00-.161.496l1.248 5.233a.5.5 0 01-.747.543l-4.591-2.805a.5.5 0 00-.522 0l-4.59 2.804a.5.5 0 01-.748-.542l1.248-5.233a.5.5 0 00-.16-.496l-4.087-3.5a.5.5 0 01.286-.878l5.363-.43a.5.5 0 00.421-.307L9.538 1.61z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1404_12671">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Star;
