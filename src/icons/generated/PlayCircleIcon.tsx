import React from "react";
import type { IconProps } from "../types";
export const PlayCircleIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11.555 9.036 3.197 2.132a1.003 1.003 0 0 1 0 1.665l-3.197 2.132A1 1 0 0 1 10 14.133V9.87a1 1 0 0 1 1.555-.834Z" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.315 15.444a9 9 0 1 0-16.63-6.888 9 9 0 0 0 16.63 6.888Z" stroke={strokeColor} /></svg>;