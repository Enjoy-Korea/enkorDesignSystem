import React from "react";

import type { IconProps } from "../types";

export const MicrowaveIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={20} height={16} x={2} y={4} stroke="#515151" strokeWidth={2} rx={2} /><path strokeLinejoin="round" strokeWidth={2} d="M5.158 7h10.526v9H5.158z" stroke={strokeColor} /><path d="M19.395 8c0 .252-.223.5-.553.5-.33 0-.552-.248-.552-.5s.223-.5.552-.5c.33 0 .553.248.553.5ZM19.395 12c0 .252-.223.5-.553.5-.33 0-.552-.248-.552-.5s.223-.5.552-.5c.33 0 .553.248.553.5Z" stroke={strokeColor} /></svg>;