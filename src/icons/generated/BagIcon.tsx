import React from "react";
import type { IconProps } from "../types";
export const BagIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={16} height={11.935} x={4} y={8.064} stroke="#515151" strokeWidth={2} rx={1} /><path strokeLinecap="round" strokeWidth={2} d="M7.8 9.194v-3.54C7.8 4.188 9.59 3 11.8 3c2.209 0 4 1.188 4 2.654v3.54" stroke={strokeColor} /></svg>;