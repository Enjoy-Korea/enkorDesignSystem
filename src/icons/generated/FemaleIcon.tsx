import React from "react";

import type { IconProps } from "../types";

export const FemaleIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.5 12.91c3.038 0 5.5-2.443 5.5-5.455C18 4.442 15.538 2 12.5 2S7 4.442 7 7.455c0 3.012 2.462 5.454 5.5 5.454Zm0 0v4.305m-4.583 0H12.5m0 0h4.583m-4.583 0V22" stroke={strokeColor} /></svg>;