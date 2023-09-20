import React from "react";
import type { IconProps } from "../types";
export const SquashIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path fill="#515151" fillRule="evenodd" d="m10.92 19.494.883-5.006-1.97-.347-.883 5.006a3.443 3.443 0 0 1-.956 1.836l-2.39 2.39a2.062 2.062 0 0 0 2.916 2.916l2.39-2.39c.5-.5 1.14-.833 1.836-.956l4.28-.755c.083-.53.25-1.034.485-1.495l-.106-.603-5.006.884a5.442 5.442 0 0 0-2.903 1.51l-2.39 2.39a.062.062 0 0 1-.088-.087l2.39-2.39a5.442 5.442 0 0 0 1.511-2.903Z" clipRule="evenodd" stroke={strokeColor} /><path fill="#515151" fillRule="evenodd" d="M21.602 17.979 23.3 16.28a5.436 5.436 0 1 0-7.688-7.688l-2.253 2.254a5.436 5.436 0 0 0 4.52 9.238 4.973 4.973 0 0 0-.843 2.04 7.436 7.436 0 0 1-5.092-12.693l2.254-2.253a7.436 7.436 0 1 1 10.517 10.516l-.707.707a4.982 4.982 0 0 0-2.406-.422Z" clipRule="evenodd" stroke={strokeColor} /><circle cx={21.966} cy={22.966} r={3} strokeWidth={2} stroke={strokeColor} /><path strokeLinecap="round" d="m14.532 14.608 4.95-4.95M17.361 17.436l4.949-4.949M17.361 9.658l4.949 4.95M14.532 12.486l4.95 4.95" stroke={strokeColor} /></svg>;