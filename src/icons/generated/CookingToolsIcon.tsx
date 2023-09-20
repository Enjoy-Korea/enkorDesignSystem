import React from "react";
import type { IconProps } from "../types";
export const CookingToolsIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="square" strokeWidth={2} d="M4 3v18M17 4v17" stroke={strokeColor} /><path strokeWidth={2} d="M4 3.238C4 3.107 4.107 3 4.238 3A4.762 4.762 0 0 1 9 7.762V15H4V3.238ZM21 6.692C21 8.732 19.21 15 17 15s-4-6.268-4-8.308C13 4.653 14.79 3 17 3s4 1.653 4 3.692Z" stroke={strokeColor} /></svg>;