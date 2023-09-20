import React from "react";
import type { IconProps } from "../types";
export const CameraIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.586 7.586A2 2 0 0 0 3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 13.93 4h-3.86a2 2 0 0 0-1.664.89l-.812 1.22A2 2 0 0 1 5.93 7H5a2 2 0 0 0-1.414.586Z" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 15.121A3 3 0 1 0 9.88 10.88a3 3 0 0 0 4.242 4.242Z" stroke={strokeColor} /></svg>;