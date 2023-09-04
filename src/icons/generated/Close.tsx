import React from "react";
import type { IconProps } from "../types";
export const Close = ({
  size = 24,
  fillColor = "",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={fillColor}
    style={style}
    className={className}
    viewBox={viewBox}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 6 12 12M6 18 18 6 6 18Z"
      stroke={strokeColor}
    />
  </svg>
);
