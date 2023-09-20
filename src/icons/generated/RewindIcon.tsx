import React from "react";
import type { IconProps } from "../types";
export const RewindIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.772 11.553c.069-.14.17-.26.294-.353h.001l5.333-4A1 1 0 0 1 19 8v8a1 1 0 0 1-1.6.8l-5.334-4a.999.999 0 0 1-.294-1.247ZM3.772 11.553a1 1 0 0 1 .294-.353l5.334-4A1 1 0 0 1 11 8v8a1 1 0 0 1-1.6.8l-5.334-4a1 1 0 0 1-.294-1.247Z" stroke={strokeColor} /></svg>;