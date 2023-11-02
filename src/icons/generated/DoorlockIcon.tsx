import React from "react";

import type { IconProps } from "../types";

export const DoorlockIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={11} height={3} x={10.5} y={15} stroke="#515151" strokeWidth={2} rx={1.5} /><path fill="#515151" fillRule="evenodd" d="M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2h-2v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v9h2V5a3 3 0 0 0-3-3h-8Z" clipRule="evenodd" stroke={strokeColor} /><circle cx={6.5} cy={6} r={1} fill="#515151" stroke={strokeColor} /><circle cx={9.5} cy={6} r={1} fill="#515151" stroke={strokeColor} /><circle cx={12.5} cy={6} r={1} fill="#515151" stroke={strokeColor} /><circle cx={6.5} cy={9} r={1} fill="#515151" stroke={strokeColor} /><circle cx={9.5} cy={9} r={1} fill="#515151" stroke={strokeColor} /><circle cx={12.5} cy={9} r={1} fill="#515151" stroke={strokeColor} /><circle cx={6.5} cy={12} r={1} fill="#515151" stroke={strokeColor} /><circle cx={9.5} cy={12} r={1} fill="#515151" stroke={strokeColor} /><circle cx={12.5} cy={12} r={1} fill="#515151" stroke={strokeColor} /></svg>;