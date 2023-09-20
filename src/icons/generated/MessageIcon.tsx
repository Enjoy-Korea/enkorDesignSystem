import React from "react";
import type { IconProps } from "../types";
export const MessageIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.422 12.275v6.43l2.995-2.756L12.695 21 22 3 2 8.602l3.422 3.673Zm0 0 7.273-3.673" stroke={strokeColor} /></svg>;