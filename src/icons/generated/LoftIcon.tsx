import React from "react";
import type { IconProps } from "../types";
export const LoftIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 10.571 12 2l10 8.571m-20 0V22h11M2 10.571h11m9 0V22h-4.316M22 10.571h-4.316m-4.684 0h4.684m-4.684 0v3.81M13 22h4.684M13 22v-3.81m4.684-7.619v3.81m0 7.619v-3.81M13 14.381h4.684m-4.684 0v3.81m4.684-3.81v3.81m-4.684 0h4.684" stroke={strokeColor} /></svg>;