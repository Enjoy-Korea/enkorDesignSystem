import React from "react";
import type { IconProps } from "../types";
export const InviteIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 0 1 4.414-1.096A4 4 0 0 1 19 7a4 4 0 0 1-2.586 3.742A4 4 0 0 1 12 9.646M15 21H3v-1a6 6 0 0 1 6-6 6 6 0 0 1 6 6v1zm0 0h6v-1a6 6 0 0 0-3-5.197 6 6 0 0 0-6 0M13 7a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z" stroke={strokeColor} /></svg>;