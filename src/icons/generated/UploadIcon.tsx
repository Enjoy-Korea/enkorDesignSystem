import React from "react";

import type { IconProps } from "../types";

export const UploadIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5m-4-4-4-4m0 0L8 8m4-4v12" stroke={strokeColor} /></svg>;