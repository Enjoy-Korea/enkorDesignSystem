import React from "react";

import type { IconProps } from "../types";

export const TerraceIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9h2V5L3 2v7h16Zm0 0v13M3 22h1.636M21 22h-8m-8.364-8v4m0 4v-4m0 4H10m-5.364-4H10v4m0 0h3m-3-7h3m3 0h-3m0 0v7" stroke={strokeColor} /></svg>;