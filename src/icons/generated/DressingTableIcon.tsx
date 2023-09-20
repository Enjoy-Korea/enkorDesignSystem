import React from "react";
import type { IconProps } from "../types";
export const DressingTableIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={18} height={3} x={3} y={16} stroke="#515151" strokeLinejoin="round" strokeWidth={2} rx={1} /><path strokeLinejoin="round" strokeWidth={2} d="M4 15a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1 2 2 0 0 0-2-2H6a2 2 0 0 0-2 2ZM5 22v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" stroke={strokeColor} /><path strokeLinejoin="round" strokeWidth={1.5} d="M15 9h4l1 4h-6l1-4Z" stroke={strokeColor} /><path fill="#515151" fillRule="evenodd" d="M8 8a4 4 0 1 1 7.874 1h2.043a6 6 0 1 0-2.6 4H14l.462-1.847A4 4 0 0 1 8 8Z" clipRule="evenodd" stroke={strokeColor} /><path strokeWidth={2} d="M17 13v3" stroke={strokeColor} /></svg>;