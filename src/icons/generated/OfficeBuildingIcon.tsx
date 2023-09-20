import React from "react";
import type { IconProps } from "../types";
export const OfficeBuildingIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5m4 0v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5m4 0h-4M9 7h1m-1 4h1m4-4h1m-1 4h1" stroke={strokeColor} /></svg>;