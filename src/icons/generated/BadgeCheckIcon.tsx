import React from "react";

import type { IconProps } from "../types";

export const BadgeCheckIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 12 2 2 4-4M7.835 4.697A3.42 3.42 0 0 0 9.78 3.89a3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138c.057.717.34 1.398.806 1.946a3.42 3.42 0 0 1 0 4.438 3.419 3.419 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.419 3.419 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.419 3.419 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138Z" stroke={strokeColor} /></svg>;