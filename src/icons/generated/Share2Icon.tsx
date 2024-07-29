import React from "react";

import type { IconProps } from "../types";

export const Share2Icon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m13 2 9 9-9 8.5V14c-7 0-10 7.5-10 7.5 0-8.5 2.5-14 10-14V2Z" stroke={strokeColor} /></svg>;