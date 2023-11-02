import React from "react";

import type { IconProps } from "../types";

export const GymIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeWidth={2} d="M1 11.5h2M21 11.5h2M9 11.5h5" stroke={strokeColor} /><mask id="Gym_svg__a" fill="#fff"><rect width={5} height={13} x={21.5} y={18.5} rx={1} transform="rotate(-180 21.5 18.5)" /></mask><rect width={5} height={13} x={21.5} y={18.5} stroke="#515151" strokeWidth={4} mask="url(#Gym_svg__a)" rx={1} transform="rotate(-180 21.5 18.5)" /><mask id="Gym_svg__b" fill="#fff"><rect width={5} height={19} x={18.5} y={21.5} rx={1} transform="rotate(-180 18.5 21.5)" /></mask><rect width={5} height={19} x={18.5} y={21.5} stroke="#515151" strokeWidth={4} mask="url(#Gym_svg__b)" rx={1} transform="rotate(-180 18.5 21.5)" /><mask id="Gym_svg__c" fill="#fff"><rect width={5} height={13} x={2.5} y={5.5} rx={1} /></mask><rect width={5} height={13} x={2.5} y={5.5} stroke="#515151" strokeWidth={4} mask="url(#Gym_svg__c)" rx={1} /><mask id="Gym_svg__d" fill="#fff"><rect width={5} height={19} x={5.5} y={2.5} rx={1} /></mask><rect width={5} height={19} x={5.5} y={2.5} stroke="#515151" strokeWidth={4} mask="url(#Gym_svg__d)" rx={1} /></svg>;