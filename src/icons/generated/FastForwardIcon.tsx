import React from "react";

import type { IconProps } from "../types";

export const FastForwardIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.227 12.447a.999.999 0 0 1-.294.353l-5.333 4A1 1 0 0 1 5 16V8a1 1 0 0 1 1.6-.8l5.333 4a.999.999 0 0 1 .294 1.247ZM20.227 12.447a.999.999 0 0 1-.294.353l-5.333 4A1 1 0 0 1 13 16V8a1 1 0 0 1 1.6-.8l5.333 4a.999.999 0 0 1 .294 1.247Z" stroke={strokeColor} /></svg>;