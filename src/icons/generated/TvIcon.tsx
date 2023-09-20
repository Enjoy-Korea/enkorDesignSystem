import React from "react";
import type { IconProps } from "../types";
export const TvIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={18} height={13} x={3} y={4} stroke="#515151" strokeLinejoin="round" strokeWidth={2} rx={2} /><path strokeLinecap="round" strokeWidth={2} d="M19 21H5M9 21v-4M15 21v-4" stroke={strokeColor} /></svg>;