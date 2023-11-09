import React from "react";

import type { IconProps } from "../types";

export const WaterDispenserIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeWidth={2} d="M4 6h6v13H4z" stroke={strokeColor} /><path strokeLinejoin="round" strokeWidth={2} d="M4 20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H4v1Z" stroke={strokeColor} /><path strokeWidth={2} d="M4 6h16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2ZM15 6h2v1h-2z" stroke={strokeColor} /><path strokeMiterlimit={10} strokeWidth={2} d="M18 13.883c0 1.3-.773 2.117-2 2.117-1.227 0-2-.818-2-2.117 0-1.395 1.434-3.277 1.874-3.821A.166.166 0 0 1 16 10c.024 0 .048.005.07.016.022.01.041.026.057.046.44.544 1.873 2.426 1.873 3.82Z" stroke={strokeColor} /></svg>;