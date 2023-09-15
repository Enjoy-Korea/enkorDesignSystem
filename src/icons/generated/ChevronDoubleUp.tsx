import React from "react";
import type { IconProps } from "../types";
export const ChevronDoubleUp = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 11 7-7 7 7M5 19l7-7 7 7" stroke={strokeColor} /></svg>;