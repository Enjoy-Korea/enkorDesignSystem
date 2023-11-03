import React from "react";

import type { IconProps } from "../types";

export const LocationIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657 13.414 20.9a1.999 1.999 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 13.121A3 3 0 1 0 9.88 8.88a3 3 0 0 0 4.242 4.242Z" stroke={strokeColor} /></svg>;