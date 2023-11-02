import React from "react";

import type { IconProps } from "../types";

export const LivingRoomIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeWidth={2} d="M6.5 13.5v-1.75a2.25 2.25 0 0 0-4.5 0v3.75a2 2 0 0 0 2 2m2.5-4h11m-11 0H12m5.5 0v-1.75a2.25 2.25 0 0 1 4.5 0v3.763a2 2 0 0 1-2 1.987m-2.5-4H12m8 4v3m0-3H4m0 0v3m8-15v8m0-8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4m7-4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V10" stroke={strokeColor} /></svg>;