import React from "react";

import type { IconProps } from "../types";

export const LiftIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.105 21V3h15.79v18M7.263 21V9h9.474v12M2 21h10m10 0H12m0 0V9m-1.579-3h3.158" stroke={strokeColor} /></svg>;