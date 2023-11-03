import React from "react";

import type { IconProps } from "../types";

export const ArrowCircleUpIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 11 3-3m0 0 3 3m-3-3v8m0-13a9 9 0 1 1 0 18.001A9 9 0 0 1 12 3Z" stroke={strokeColor} /></svg>;