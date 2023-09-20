import React from "react";
import type { IconProps } from "../types";
export const EyeOffIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825c-.618.117-1.246.175-1.875.175-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 0 1 4.02 8.971m5.858.908a3 3 0 1 1 4.243 4.243M9.878 9.879l4.243 4.243M9.878 9.879l4.242 4.241m.001.002 3.291 3.29M9.88 9.88 6.59 6.59m0 0L3 3m3.59 3.59A9.953 9.953 0 0 1 12 5c4.478 0 8.268 2.943 9.543 7a10.024 10.024 0 0 1-4.132 5.411M6.59 6.59l10.821 10.821m0 0L21 21" stroke={strokeColor} /></svg>;