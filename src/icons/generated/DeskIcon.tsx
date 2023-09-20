import React from "react";
import type { IconProps } from "../types";
export const DeskIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={19} height={4} x={2.5} y={3} stroke="#515151" strokeLinejoin="round" strokeWidth={2} rx={1} /><rect width={8} height={10} stroke="#515151" strokeLinejoin="round" strokeWidth={2} rx={1} transform="matrix(1 0 0 -1 11.5 17)" /><path strokeLinejoin="round" strokeWidth={2} d="M4.5 21V8a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13" stroke={strokeColor} /><circle cx={15.5} cy={9.5} r={1} fill="#515151" stroke={strokeColor} /><circle cx={15.5} cy={14.5} r={1} fill="#515151" stroke={strokeColor} /><path strokeWidth={2} d="M11.5 12h8" stroke={strokeColor} /></svg>;