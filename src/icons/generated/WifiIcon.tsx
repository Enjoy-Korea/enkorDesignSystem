import React from "react";
import type { IconProps } from "../types";
export const WifiIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 0 1 7.778 0M12 20h.01m-7.08-7.07c3.904-3.906 10.236-3.906 14.141 0M1.394 9.392c5.857-5.857 15.355-5.857 21.213 0" stroke={strokeColor} /></svg>;