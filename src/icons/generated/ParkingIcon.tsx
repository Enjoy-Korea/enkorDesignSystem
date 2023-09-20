import React from "react";
import type { IconProps } from "../types";
export const ParkingIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16.5v-4m0 0V7h3.75a2.75 2.75 0 0 1 2.75 2.75v0a2.75 2.75 0 0 1-2.75 2.75H9Z" stroke={strokeColor} /><circle cx={12} cy={12} r={9} strokeWidth={2} stroke={strokeColor} /></svg>;