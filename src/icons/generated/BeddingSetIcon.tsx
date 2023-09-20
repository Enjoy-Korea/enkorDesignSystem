import React from "react";
import type { IconProps } from "../types";
export const BeddingSetIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinejoin="round" strokeWidth={2} d="M3 7a4 4 0 0 1 4-4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.4 17.5H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h12a2 2 0 0 1 2 2v9.941" stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={2} d="M21 14H6" stroke={strokeColor} /></svg>;