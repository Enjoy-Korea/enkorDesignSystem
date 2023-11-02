import React from "react";

import type { IconProps } from "../types";

export const AlignIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path fill="#515151" d="M11.622 4.436a.5.5 0 0 1 .756 0l4.102 4.737a.5.5 0 0 1-.378.827H7.898a.5.5 0 0 1-.378-.827l4.102-4.737ZM12.378 19.564a.5.5 0 0 1-.756 0L7.52 14.827A.5.5 0 0 1 7.898 14h8.204a.5.5 0 0 1 .378.827l-4.102 4.737Z" stroke={strokeColor} /></svg>;