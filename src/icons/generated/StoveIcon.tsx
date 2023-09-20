import React from "react";
import type { IconProps } from "../types";
export const StoveIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={19} height={19} x={2.5} y={2.5} stroke="#515151" strokeWidth={2} rx={2} /><circle cx={8} cy={8} r={2.25} strokeWidth={2} stroke={strokeColor} /><circle cx={16} cy={8} r={2.25} strokeWidth={2} stroke={strokeColor} /><circle cx={8} cy={16} r={2.25} strokeWidth={2} stroke={strokeColor} /><circle cx={14.56} cy={17} r={1} fill="#515151" stroke={strokeColor} /><circle cx={18} cy={17} r={1} fill="#515151" stroke={strokeColor} /></svg>;