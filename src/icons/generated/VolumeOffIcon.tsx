import React from "react";

import type { IconProps } from "../types";

export const VolumeOffIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 15h1.586l4.707 4.707c.63.63 1.707.184 1.707-.707V5c0-.891-1.077-1.337-1.707-.707L5.586 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1ZM19 12l2 2m-4 0 2-2-2 2Zm2-2 2-2-2 2Zm0 0-2-2 2 2Z" stroke={strokeColor} /></svg>;