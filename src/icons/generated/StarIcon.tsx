import React from "react";

import type { IconProps } from "../types";

export const StarIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.951 2.927c-.299-.92-1.602-.92-1.902 0L9.53 7.601a1 1 0 0 1-.95.69H3.664c-.968 0-1.372 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118l-1.518 4.674c-.3.921.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0l3.976 2.888c.783.57 1.838-.196 1.538-1.118l-1.518-4.674a1 1 0 0 1 .363-1.118l3.976-2.888c.783-.57.381-1.81-.588-1.81H15.42a1 1 0 0 1-.95-.69l-1.519-4.674Z" stroke={strokeColor} /></svg>;