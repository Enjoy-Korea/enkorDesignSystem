import React from "react";

import type { IconProps } from "../types";

export const UserIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 9.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656ZM7.05 16.05A7 7 0 0 1 19 21H5a7 7 0 0 1 2.05-4.95Z" stroke={strokeColor} /></svg>;