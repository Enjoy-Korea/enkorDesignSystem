import React from "react";

import type { IconProps } from "../types";

export const LundryDryerIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={19} height={19} x={2.5} y={2.5} stroke="#515151" strokeWidth={2} rx={2} /><circle cx={5.667} cy={5.667} r={0.792} fill="#515151" stroke={strokeColor} /><circle cx={12} cy={12} r={5.278} strokeWidth={2} stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={1.5} d="M15 12a3 3 0 0 0-3-3M9 12a3 3 0 0 0 3 3" stroke={strokeColor} /></svg>;