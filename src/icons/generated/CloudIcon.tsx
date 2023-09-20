import React from "react";
import type { IconProps } from "../types";
export const CloudIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.172 17.828a4 4 0 0 1 1.948-6.731 5.002 5.002 0 1 1 9.78-2.096A5 5 0 1 1 16 19H7a4 4 0 0 1-2.828-1.172Z" stroke={strokeColor} /></svg>;