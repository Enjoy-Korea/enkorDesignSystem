import React from "react";
import type { IconProps } from "../types";
export const ArrowsExpandIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20h-4M4 8V4v4Zm0-4h4-4Zm0 0 5 5-5-5Zm16 4V4v4Zm0-4h-4 4Zm0 0-5 5 5-5ZM4 16v4-4Zm0 4h4-4Zm0 0 5-5-5 5Zm16 0-5-5 5 5Zm0 0v-4 4Z" stroke={strokeColor} /></svg>;