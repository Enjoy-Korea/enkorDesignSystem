import React from "react";
import type { IconProps } from "../types";
export const LundryWasherIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={19} height={19} x={2.5} y={2.5} stroke="#515151" strokeWidth={2} rx={2} /><circle cx={5.667} cy={5.667} r={0.792} fill="#515151" stroke={strokeColor} /><circle cx={12} cy={12} r={5.278} strokeWidth={2} stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={2} d="M6.73 12.42c.79.263 2.878.535 4.9-.48 2.87-.94 4.217-.005 5.06.627" stroke={strokeColor} /></svg>;