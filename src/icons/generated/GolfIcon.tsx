import React from "react";
import type { IconProps } from "../types";
export const GolfIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><circle cx={15} cy={16} r={6} strokeWidth={2} stroke={strokeColor} /><circle cx={12} cy={17} r={1} fill="#515151" stroke={strokeColor} /><circle cx={14} cy={19} r={1} fill="#515151" stroke={strokeColor} /><circle cx={16} cy={17} r={1} fill="#515151" stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={2} d="M3 2v20M3 11l8.738-3.574c.828-.34.828-1.513 0-1.852L3 2" stroke={strokeColor} /></svg>;