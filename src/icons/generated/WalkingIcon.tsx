import React from "react";
import type { IconProps } from "../types";
export const WalkingIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 8a8.227 8.227 0 0 1-.761 3.444 9.002 9.002 0 0 1-2.168 2.92 10.14 10.14 0 0 1-3.244 1.95A10.972 10.972 0 0 1 3 17M17 22a7.001 7.001 0 0 0-7-7M20 14c-1.857 0-3.637-.632-4.95-1.757C13.737 11.117 13 9.59 13 8" stroke={strokeColor} /><circle cx={15} cy={4} r={2} strokeWidth={2} stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={2} d="M10 8c0 2-1.5 4-3 4.5" stroke={strokeColor} /></svg>;