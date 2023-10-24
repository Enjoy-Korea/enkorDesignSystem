import React from "react";
import type { IconProps } from "../types";
export const PetIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} stroke="#515151" strokeWidth={2} style={style} className={className} viewBox={viewBox}><path d="M4 12a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm4.5-5a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm7 0a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm4.5 5a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm-2.66 1.86-2.48-2.91c-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32l-2.48 2.91c-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z" stroke={strokeColor} /></svg>;