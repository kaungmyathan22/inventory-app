import { SVGProps } from "react";

function BoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 -960 960 960"
      {...props}
    >
      <path d="M120-142v-492q-14-2-27-20t-13-39v-127q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-820v127q0 21-13 39t-27 20v492q0 23-18.5 42.5T780-80H180q-24 0-42-19.5T120-142zm60-491v493h600v-493H180zm640-60v-127H140v127h680zM360-423h240v-60H360v60zM180-140v-493 493z"></path>
    </svg>
  );
}

export default BoxIcon;
