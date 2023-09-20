import React from "react";
import type { IconProps } from "../types";
export const DryingRackIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinejoin="round" strokeWidth={2} d="M3.5 3h15a2 2 0 1 1 0 4h-15V3Z" stroke={strokeColor} /><path fill="#515151" fillRule="evenodd" d="M7.736 3A3 3 0 0 0 2.5 5v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7h-2v13h-2V6.732A2 2 0 0 1 5.5 3h2.236Z" clipRule="evenodd" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.961 12.469a1.59 1.59 0 1 1 1.12 2.71H12.93m.465 5.547a1.59 1.59 0 1 0 1.121-2.71H12.5M19.783 20.726a1.589 1.589 0 1 0 1.121-2.71h-3.088" stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={2} d="M11 8v2M14 8v2M17 8v2" stroke={strokeColor} /></svg>;