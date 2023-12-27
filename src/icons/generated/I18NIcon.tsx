import React from "react";

import type { IconProps } from "../types";

export const I18NIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 21a9 9 0 0 1-9-9m9 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18a9 9 0 0 0 3.5-.708M11 3a9 9 0 0 1 8.944 8M11 3a9 9 0 0 0-9 9m9-9c1.544 0 2.816 3.5 2.982 8M2 12h9" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 19.353h-1V21a1 1 0 0 1-1.727.687l-2.204-2.334H13c-.55 0-1.064-.232-1.434-.624A2.09 2.09 0 0 1 11 17.294V13.06c0-.528.198-1.046.566-1.435.37-.392.884-.624 1.434-.624h7c.55 0 1.064.232 1.434.624.368.39.566.907.566 1.435v4.235a2.09 2.09 0 0 1-.566 1.435c-.37.392-.885.624-1.434.624Z" stroke={strokeColor} /></svg>;