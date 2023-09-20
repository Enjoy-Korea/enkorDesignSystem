import React from "react";
import type { IconProps } from "../types";
export const WardrobeIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={16} height={19} x={4} y={2} stroke="#515151" strokeLinejoin="round" strokeWidth={2} rx={2} /><path strokeLinejoin="round" strokeWidth={2} d="M4 4a2 2 0 0 1 2-2h6v12H4V4ZM4 14h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5ZM12 2h6a2 2 0 0 1 2 2v10h-8V2Z" stroke={strokeColor} /><circle cx={9} cy={8} r={1} fill="#515151" stroke={strokeColor} /><circle cx={15} cy={8} r={1} fill="#515151" stroke={strokeColor} /><circle cx={12} cy={17} r={1} fill="#515151" stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={2} d="M7 22v1M17 22v1" stroke={strokeColor} /></svg>;