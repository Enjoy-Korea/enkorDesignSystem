import React from "react";

import type { IconProps } from "../types";

export const CleaningHostIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><g stroke="#515151" strokeMiterlimit={10} strokeWidth={2}><path d="M10.756 13.874c-.64 0-1.16-.541-1.16-1.209v-2.158h-4v9.927c0 .866.673 1.568 1.504 1.568h7.064c.831 0 1.504-.702 1.504-1.568v-1.441c0-2.827-2.198-5.121-4.911-5.121v.002z" /><g strokeLinecap="round"><path d="M5.596 10.51V9.073a.575.575 0 0 0-.158-.399L3.143 6.28A.52.52 0 0 1 3 5.922V3.614c0-.28.216-.505.485-.505h10.653c.268 0 .485.226.485.505v2.829c0 .28-.216.505-.485.505h-1.123c-1.887 0-3.416 1.595-3.416 3.562m5.186-6.007h1.487M10.82 8.027l2.478 3.019" /></g></g><g fill="#515151"><ellipse cx={18.562} cy={4.487} rx={0.979} ry={0.994} /><ellipse cx={20.521} cy={5.978} rx={0.979} ry={0.994} /><ellipse cx={20.521} cy={2.995} rx={0.979} ry={0.994} /></g></svg>;