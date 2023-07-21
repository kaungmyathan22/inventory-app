import { SVGProps } from "react";

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <g>
        <path
          stroke="#FCFCFD"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21.871 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
        ></path>
      </g>
    </svg>
  );
}

export default SearchIcon;
