import React from "react";

import type { IconProps } from "../types";

export const NoSmokingIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><g clipPath="url(#NoSmoking_svg__a)"><path stroke="#515151" strokeLinecap="round" strokeWidth={2} d="M1.45 22.586 22.663 1.373" /><path fill="#515151" fillRule="evenodd" d="M19.482 1.692A1 1 0 0 0 17.827.76c-1.449 1.317-2.243 2.569-2.34 3.842a3.39 3.39 0 0 0 .073 1.011l3.921-3.921zm-.113 5.77-1.417 1.417.395.347.691.617c.734.682 1.203 1.252 1.375 1.819a1.85 1.85 0 0 1-.097 1.375 1.87 1.87 0 0 1-.298.445c-.092.101-.156.144-.169.153a1 1 0 0 0 .895 1.789c.503-.252 1.035-.817 1.373-1.517a3.848 3.848 0 0 0 .21-2.822c-.338-1.119-1.169-2.002-1.928-2.706l-.864-.772-.165-.145zm-7.132 1.475L5.896 2.546a1 1 0 0 0-1.42 0L1.79 5.253a1 1 0 0 0 0 1.409l6.336 6.386 1.414-1.414-5.631-5.676L5.186 4.67l5.636 5.681 1.414-1.414zm1.403 4.254 1.414-1.414 1.49 1.502a1 1 0 0 1 0 1.409l-2.686 2.707a1 1 0 0 1-1.42 0l-1.495-1.507 1.414-1.414.79.797 1.277-1.287-.785-.792zm4.918 3.593a1 1 0 1 0-1.42-1.409l-2.62 2.641a1 1 0 1 0 1.42 1.409l2.62-2.641zm2.014 2.03a1 1 0 0 0-1.42-1.409l-2.62 2.641a1 1 0 0 0 1.42 1.409l2.62-2.641z" /></g><defs><clipPath id="NoSmoking_svg__a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;