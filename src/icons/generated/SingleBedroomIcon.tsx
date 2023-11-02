import React from "react";

import type { IconProps } from "../types";

export const SingleBedroomIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.636 11.667H4a1 1 0 0 0-1 1v4.666a1 1 0 0 0 1 1h1.455m-.819-6.666V6a1 1 0 0 1 1-1h12.728a1 1 0 0 1 1 1v5.667m-14.728 0H9m10.364 0H20a1 1 0 0 1 1 1v4.666a1 1 0 0 1-1 1h-1.454m.818-6.666H15m-6 0V8.5h6v3.167m-6 0h6m-9.545 6.666V20m0-1.667h13.09m0 0V20" stroke={strokeColor} /></svg>;