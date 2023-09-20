import React from "react";
import type { IconProps } from "../types";
export const AirConditinerIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.001 2v19.63M14.53 4.103a4.884 4.884 0 0 1-2.53.701 4.884 4.884 0 0 1-2.529-.701M9.47 19.527a4.912 4.912 0 0 1 5.06 0M20.5 6.907l-17 9.815M19.942 10.15a4.911 4.911 0 0 1-2.528-4.382M4.057 13.481a4.911 4.911 0 0 1 2.529 4.382M3.5 6.907l17 9.815M4.057 10.15a4.91 4.91 0 0 0 2.529-4.382M19.942 13.481a4.911 4.911 0 0 0-2.528 4.382" stroke={strokeColor} /></svg>;