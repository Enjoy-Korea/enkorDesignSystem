import React from "react";
import type { IconProps } from "../types";
export const SimcardIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path fill="#fff" d="M5 20V8h17v9.23L19.167 20H5Z" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.833 14v-3H11m-3.167 3v3H11m-3.167-3H11m0 0v-3m0 3v3m0-6h4.5v6H11M5 8v12h14.167L22 17.23V8H5Z" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.833 17H2V5h17v2.77" stroke={strokeColor} /></svg>;