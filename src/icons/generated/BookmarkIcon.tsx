import React from "react";
import type { IconProps } from "../types";
export const BookmarkIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 3.586A2 2 0 0 0 5 5v16l7-3.5 7 3.5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-1.414.586Z" stroke={strokeColor} /></svg>;