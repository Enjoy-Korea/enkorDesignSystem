import React from "react";
import type { IconProps } from "../types";
export const SurfaceIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={19} height={19} x={2.5} y={2.5} stroke="#515151" strokeWidth={2} rx={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.5 12.5v5h5M12.5 6.5h5v5" stroke={strokeColor} /><path strokeWidth={2} d="M6.5 17.5 17.62 6.379" stroke={strokeColor} /></svg>;