import React from "react";
import type { IconProps } from "../types";
export const IronIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeWidth={2} d="M3 21h18" stroke={strokeColor} /><path strokeWidth={2} d="M3 16.09A9.09 9.09 0 0 1 12.09 7h7.274C20.267 7 21 7.733 21 8.636V15a2 2 0 0 1-2 2H3.91a.91.91 0 0 1-.91-.91Z" stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={2} d="M21 9V5a2 2 0 0 0-2-2H7" stroke={strokeColor} /><circle cx={14} cy={13} r={1} fill="#515151" stroke={strokeColor} /><circle cx={17} cy={13} r={1} fill="#515151" stroke={strokeColor} /></svg>;