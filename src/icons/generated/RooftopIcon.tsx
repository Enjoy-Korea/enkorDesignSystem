import React from "react";
import type { IconProps } from "../types";
export const RooftopIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 22v-3h5m15 3v-3h-5m-5 0V8.667M12 19H7m5 0h5M12 8.667H5V6.762L12 2l7 4.762v1.905h-7ZM9 12h6M5 11v4h2m2 0H7m0 0v4m12-8v4h-2m-2 0h2m0 0v4" stroke={strokeColor} /></svg>;