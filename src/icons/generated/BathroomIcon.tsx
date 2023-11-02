import React from "react";

import type { IconProps } from "../types";

export const BathroomIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeWidth={2} d="M19.2 12.818h.488a1 1 0 0 1 .964 1.265l-1.25 4.546a1 1 0 0 1-.964.735H17.4m1.8-6.546H4.312a1 1 0 0 0-.964 1.265l1.25 4.546a1 1 0 0 0 .964.735H6.6m12.6-6.546V4a1 1 0 0 0-1-1h-3.4a1 1 0 0 0-1 1v1.727m0 0h2.7m-2.7 0h-2.7M6.6 19.364 5.7 21m.9-1.636h10.8m0 0L18.3 21" stroke={strokeColor} /></svg>;