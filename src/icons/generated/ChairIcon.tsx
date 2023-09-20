import React from "react";
import type { IconProps } from "../types";
export const ChairIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.4 17.75v2.85M5.35 10.15V5.4c0-1.05.85-1.9 1.9-1.9h9.5c1.05 0 1.9.85 1.9 1.9v4.75" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.125 10.15a2.375 2.375 0 0 0-2.375 2.375v1.425h-9.5v-1.425a2.375 2.375 0 1 0-2.85 2.327v2.898h15.2v-2.898a2.376 2.376 0 0 0-.475-4.702ZM19.6 17.75v2.85" stroke={strokeColor} /></svg>;