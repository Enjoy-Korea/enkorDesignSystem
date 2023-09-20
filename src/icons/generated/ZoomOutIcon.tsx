import React from "react";
import type { IconProps } from "../types";
export const ZoomOutIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10H7m14 11-6-6 6 6Zm-4-11a7.001 7.001 0 0 1-11.95 4.95A7 7 0 1 1 17 10Z" stroke={strokeColor} /></svg>;