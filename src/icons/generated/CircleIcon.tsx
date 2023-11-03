import React from "react";

import type { IconProps } from "../types";

export const CircleIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><circle cx={12} cy={12} r={7} strokeWidth={2} stroke={strokeColor} /></svg>;