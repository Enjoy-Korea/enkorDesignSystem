import React from "react";

import type { IconProps } from "../types";

export const SettingIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.675 4.317c-.426-1.756-2.924-1.756-3.35 0a1.723 1.723 0 0 1-2.572 1.065c-1.544-.94-3.31.827-2.37 2.37a1.724 1.724 0 0 1-1.066 2.573c-1.756.426-1.756 2.924 0 3.35a1.725 1.725 0 0 1 1.065 2.572c-.94 1.544.827 3.31 2.37 2.37a1.724 1.724 0 0 1 2.573 1.066c.426 1.756 2.924 1.756 3.35 0a1.725 1.725 0 0 1 2.572-1.065c1.544.94 3.31-.827 2.37-2.37a1.725 1.725 0 0 1 1.066-2.573c1.756-.426 1.756-2.924 0-3.35a1.724 1.724 0 0 1-1.065-2.572c.94-1.544-.827-3.31-2.37-2.37a1.724 1.724 0 0 1-2.573-1.066Z" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z" stroke={strokeColor} /></svg>;