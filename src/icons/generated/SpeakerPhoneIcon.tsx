import React from "react";
import type { IconProps } from "../types";
export const SpeakerPhoneIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 0 1-3.417.592l-2.147-6.15m0 0A3.999 3.999 0 0 1 7 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.066-3-9.168-3H7c-.537 0-1.069-.108-1.564-.318ZM18 13a3 3 0 0 0 0-6v6Z" stroke={strokeColor} /></svg>;