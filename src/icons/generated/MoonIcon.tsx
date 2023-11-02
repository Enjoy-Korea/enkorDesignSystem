import React from "react";

import type { IconProps } from "../types";

export const MoonIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.195 15.822a9 9 0 0 0 5.16-.468A9.003 9.003 0 0 1 12 21 9.003 9.003 0 0 1 8.646 3.646a9 9 0 0 0 6.549 12.176Z" stroke={strokeColor} /></svg>;