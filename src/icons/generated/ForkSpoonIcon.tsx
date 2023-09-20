import React from "react";
import type { IconProps } from "../types";
export const ForkSpoonIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 2v20M4 2.5v5C4 10 7 10 7 10s3 0 3-2.5v-5M17 10v12M20 6c0 2.209-1.343 4-3 4s-3-1.791-3-4 1.343-4 3-4 3 1.791 3 4Z" stroke={strokeColor} /></svg>;