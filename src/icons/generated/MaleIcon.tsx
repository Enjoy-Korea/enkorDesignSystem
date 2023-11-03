import React from "react";

import type { IconProps } from "../types";

export const MaleIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8.528a6 6 0 1 0-8 8.944 6 6 0 0 0 8-8.944Zm0 0L20 3.5m0 0h-4.5m4.5 0V8" stroke={strokeColor} /></svg>;