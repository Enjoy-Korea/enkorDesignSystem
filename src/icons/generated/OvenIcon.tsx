import React from "react";

import type { IconProps } from "../types";

export const OvenIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={19} height={19} x={2.5} y={2.5} stroke="#515151" strokeWidth={2} rx={2} /><path strokeLinejoin="round" strokeWidth={2} d="M5.5 11.5h13v7h-13z" stroke={strokeColor} /><circle cx={6} cy={5.5} r={1} fill="#515151" stroke={strokeColor} /><circle cx={10} cy={5.5} r={1} fill="#515151" stroke={strokeColor} /><circle cx={14} cy={5.5} r={1} fill="#515151" stroke={strokeColor} /><path strokeWidth={2} d="M2.5 8.5h19" stroke={strokeColor} /></svg>;