import React from "react";
import type { IconProps } from "../types";
export const AllGenderIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13.182c2.21 0 4-1.832 4-4.091C11 6.83 9.21 5 7 5S3 6.832 3 9.09c0 2.26 1.79 4.092 4 4.092Zm0 0v3.23m-3.333 0H7m0 0h3.333m-3.333 0V20M17 11.818c-2.21 0-4 1.832-4 4.091C13 18.17 14.79 20 17 20s4-1.832 4-4.09c0-2.26-1.79-4.092-4-4.092Zm0 0V5m0 0-2.285 2.38M17 5l2.304 2.211" stroke={strokeColor} /></svg>;