import React from "react";

import type { IconProps } from "../types";

export const ShuttleBusIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><mask id="ShuttleBus_svg__a" fill="#fff"><path fillRule="evenodd" d="M22 4a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h.897a2.77 2.77 0 0 0 2.77-2.77.1.1 0 0 1 .1-.1h6.466a.1.1 0 0 1 .1.1 2.77 2.77 0 0 0 2.77 2.77H19a3 3 0 0 0 3-3V4Z" clipRule="evenodd" /></mask><path fill="#515151" d="M5 3h14v-4H5v4ZM4 20V4H0v16h4Zm1.897 1H5v4h.897v-4Zm4.77-.77a1.9 1.9 0 0 1-1.9 1.9v-4a2.1 2.1 0 0 0-2.1 2.1h4Zm-1.9 1.9h6.466v-4H8.767v4Zm6.466 0a1.9 1.9 0 0 1-1.9-1.9h4a2.1 2.1 0 0 0-2.1-2.1v4ZM19 21h-.897v4H19v-4Zm1-17v16h4V4h-4Zm-1 21a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1v4Zm-5.667-4.77a4.77 4.77 0 0 0 4.77 4.77v-4a.77.77 0 0 1-.77-.77h-4ZM5.897 25a4.77 4.77 0 0 0 4.77-4.77h-4a.77.77 0 0 1-.77.77v4ZM0 20a5 5 0 0 0 5 5v-4a1 1 0 0 1-1-1H0ZM19 3a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4ZM5-1a5 5 0 0 0-5 5h4a1 1 0 0 1 1-1v-4Z" mask="url(#ShuttleBus_svg__a)" stroke={strokeColor} /><path strokeWidth={2} d="M3 12h19" stroke={strokeColor} /><path strokeLinecap="round" strokeWidth={2} d="M15 15.5h3M6 15.5h3M12 12V5" stroke={strokeColor} /><rect width={2} height={6} x={21} y={6} fill="#515151" rx={1} /><rect width={2} height={6} x={1} y={6} fill="#515151" rx={1} /></svg>;