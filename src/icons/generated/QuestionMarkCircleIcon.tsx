import React from "react";

import type { IconProps } from "../types";

export const QuestionMarkCircleIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.566 9.5c0-1 .51-2.13 1.99-2.5 2-.5 3.603 1.223 3.444 3-.223 2.5-3.434 2.5-3.434 2.5s-.01.947-.01 1.5m0 3h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke={strokeColor} /></svg>;