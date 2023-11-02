import React from "react";

import type { IconProps } from "../types";

export const BilliardsIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><circle cx={7.58} cy={16.749} r={5.5} strokeWidth={2} stroke={strokeColor} /><path strokeWidth={2} d="m15.702 16.285 2.121-2.122" stroke={strokeColor} /><path fill="#515151" fillRule="evenodd" d="m3.686 2.767 16.946 15.787a.882.882 0 1 1-1.247 1.247l-4.484-4.813a7.484 7.484 0 0 1 .108 3.05l2.913 3.127a2.882 2.882 0 1 0 4.074-4.074L5.05 1.303A2.063 2.063 0 0 0 2.134 4.22L6.91 9.344a7.557 7.557 0 0 1 3.034.322l-6.345-6.81a.063.063 0 0 1 .088-.09Z" clipRule="evenodd" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.83 18.999v-4.5l-1.5 1" stroke={strokeColor} /></svg>;