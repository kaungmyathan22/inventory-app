import { SVGProps } from "react";

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <g>
        <path
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.67"
          d="M10 4.167v11.666M4.167 10h11.666"
        ></path>
      </g>
    </svg>
  );
}

export default PlusIcon;
