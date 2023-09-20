import React from "react";
import type { IconProps } from "../types";
export const DinerWareIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeWidth={2} d="M2.5 21a9 9 0 0 0 0-18" stroke={strokeColor} /><path strokeWidth={1.5} d="M2.5 17a5 5 0 1 0 0-10" stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={1.5} d="M5.108 12.699A2.7 2.7 0 0 0 3.2 9.392" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 2.5v19M14.5 3v4.333c0 2.167 3 2.167 3 2.167s3 0 3-2.167V3" stroke={strokeColor} /></svg>;