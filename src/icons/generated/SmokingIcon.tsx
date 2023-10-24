import React from "react";
import type { IconProps } from "../types";
export const SmokingIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path fill="#515151" d="m5.186 3.25.71-.704a1 1 0 0 0-1.42 0l.71.704zm10.648 10.732.71.704a1 1 0 0 0 0-1.409l-.71.704zm-2.686 2.707-.71.704a1 1 0 0 0 1.42 0l-.71-.704zM2.5 5.957l-.71-.704a1 1 0 0 0 0 1.409l.71-.704zm16.057 10.826a1 1 0 0 0-1.42-1.409l1.42 1.409zm-4.04 1.232a1 1 0 0 0 1.42 1.409l-1.42-1.409zm6.054.798a1 1 0 0 0-1.42-1.409l1.42 1.409zm-4.04 1.232a1 1 0 0 0 1.42 1.409l-1.42-1.409zm3.314-6.409a1 1 0 1 0 .897 1.788l-.897-1.788zm1.523-2.263-.957.289.957-.289zM19.173 2.24A1 1 0 0 0 17.827.76l1.345 1.48zM4.476 3.954l10.648 10.732 1.42-1.409L5.896 2.546l-1.42 1.409zm10.648 9.324-2.686 2.707 1.42 1.409 2.686-2.707-1.42-1.409zm-1.266 2.707L3.21 5.253 1.79 6.661l10.648 10.732 1.42-1.409zM3.21 6.661l2.686-2.707-1.42-1.409L1.79 5.253l1.42 1.409zm13.928 8.713-2.62 2.641 1.42 1.409 2.62-2.641-1.42-1.409zm2.014 2.03-2.62 2.641 1.42 1.409 2.62-2.641-1.42-1.409zm1.591-1.981c.503-.252 1.035-.817 1.373-1.517a3.848 3.848 0 0 0 .21-2.822l-1.915.578a1.852 1.852 0 0 1-.097 1.375 1.87 1.87 0 0 1-.298.445c-.11.12-.18.159-.17.154l.897 1.788zm1.584-4.34c-.338-1.12-1.169-2.002-1.928-2.706l-2.164-2c-.568-.632-.79-1.131-.752-1.625.04-.521.39-1.331 1.691-2.514L17.827.76c-1.449 1.317-2.243 2.569-2.34 3.842-.099 1.3.549 2.324 1.258 3.113.674.75 1.638 1.523 2.291 2.128.734.682 1.203 1.252 1.375 1.819l1.915-.578z" stroke={strokeColor} /></svg>;