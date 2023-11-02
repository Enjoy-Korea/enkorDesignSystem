import React from "react";

import type { IconProps } from "../types";

export const UserRemoveIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12h-6m-2-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 7a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6Z" stroke={strokeColor} /></svg>;