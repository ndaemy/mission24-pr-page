import type { FC } from "react";

import type { StyledSvgProps } from "./types";

const BlackTicket: FC<StyledSvgProps> = ({ color }) => {
  return (
    <svg
      width="140"
      height="210"
      viewBox="0 0 140 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_354_456)">
        <ellipse cx="140.5" cy="259.5" rx="183.5" ry="168.5" fill={color} />
        <rect x="56.5" y="11.5" width="27" height="3" rx="1.5" stroke={color} />
      </g>
      <rect x="1" y="1" width="138" height="208" rx="9" stroke={color} strokeWidth="2" />
      <defs>
        <clipPath id="clip0_354_456">
          <rect width="140" height="210" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BlackTicket;
