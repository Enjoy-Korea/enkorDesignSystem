import React from "react";

import type { IconProps } from "../types";

export const StationIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><g clipPath="url(#Station_svg__a)"><rect width={12} height={13} x={6} y={3} stroke="#515151" strokeWidth={2} rx={1} /><mask id="Station_svg__b" fill="#fff"><rect width={8} height={6} x={8} y={5} rx={1} /></mask><rect width={8} height={6} x={8} y={5} stroke="#515151" strokeWidth={4} mask="url(#Station_svg__b)" rx={1} /><circle cx={9} cy={13} r={1} fill="#515151" /><circle cx={15} cy={13} r={1} fill="#515151" /><path stroke="#515151" strokeLinecap="round" strokeWidth={2} d="m9 16-5 5M18.465 19.535H6M15 16l5 5" /></g><defs><clipPath id="Station_svg__a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;