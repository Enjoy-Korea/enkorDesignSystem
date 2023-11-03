import React from "react";

import type { IconProps } from "../types";

export const PlayIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinejoin="round" strokeWidth={2} d="M19.5 12.866a1 1 0 0 0 0-1.732l-12-6.928a1 1 0 0 0-1.5.866v13.856a1 1 0 0 0 1.5.866l12-6.928Z" stroke={strokeColor} /></svg>;