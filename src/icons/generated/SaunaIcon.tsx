import React from "react";
import type { IconProps } from "../types";
export const SaunaIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><circle cx={8} cy={4.75} r={2.5} strokeWidth={2} stroke={strokeColor} /><path fill="#515151" fillRule="evenodd" d="M11.706 13.75c-.466-1.778-2.006-3-3.706-3-1.7 0-3.24 1.222-3.706 3H2.25c.504-2.845 2.887-5 5.75-5s5.246 2.155 5.75 5h-2.044Z" clipRule="evenodd" stroke={strokeColor} /><path strokeWidth={2} d="M2 13.75h20v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7Z" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9.75v-.547c0-1.262.442-2.484 1.25-3.453v0a5.393 5.393 0 0 0 1.25-3.453V1.75M19 9.75v-.547c0-1.262.442-2.484 1.25-3.453v0a5.393 5.393 0 0 0 1.25-3.453V1.75" stroke={strokeColor} /></svg>;