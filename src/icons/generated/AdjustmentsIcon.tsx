import React from "react";
import type { IconProps } from "../types";
export const AdjustmentsIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 0 0 0 4m0-4a2 2 0 0 1 0 4m0 0v10m-6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m12 14a2 2 0 0 0 0-4m0 4a2 2 0 0 1 0-4m0 4v2m0-6V4" stroke={strokeColor} /></svg>;