import React from "react";
import type { IconProps } from "../types";
export const UserAddIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3-3Zm0 3v3-3Zm0 0h3-3Zm0 0h-3 3Zm-5-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0v0ZM3 20a6 6 0 1 1 12 0v1H3v-1Z" stroke={strokeColor} /></svg>;