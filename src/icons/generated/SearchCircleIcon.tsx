import React from "react";

import type { IconProps } from "../types";

export const SearchCircleIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 16 2.879-2.879m0 0a3 3 0 1 0 4.278-4.208 3 3 0 0 0-4.278 4.208ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke={strokeColor} /></svg>;