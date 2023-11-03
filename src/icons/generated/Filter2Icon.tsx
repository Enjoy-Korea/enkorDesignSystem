import React from "react";

import type { IconProps } from "../types";

export const Filter2Icon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.39 6.225h13.171M3.439 12.448h10.366m0 0c0 1.227.983 2.223 2.195 2.223 1.212 0 2.195-.995 2.195-2.223m-4.39 0c0-1.228.983-2.223 2.195-2.223 1.212 0 2.195.995 2.195 2.223m0 0h2.366m-13.17 6.054h13.17M7.391 6.222c0 1.228-.984 2.223-2.196 2.223C3.983 8.445 3 7.45 3 6.223 3 4.995 3.983 4 5.195 4c1.212 0 2.195.995 2.195 2.223Zm0 12.278c0 1.227-.984 2.223-2.196 2.223C3.983 20.723 3 19.727 3 18.5c0-1.227.983-2.223 2.195-2.223 1.212 0 2.195.995 2.195 2.223Z" stroke={strokeColor} /></svg>;