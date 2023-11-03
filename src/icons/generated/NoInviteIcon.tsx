import React from "react";

import type { IconProps } from "../types";

export const NoInviteIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><g clipPath="url(#NoInvite_svg__a)"><path stroke="#515151" strokeLinecap="round" strokeWidth={2} d="M1.45 22.586 22.663 1.373" /><path fill="#515151" fillRule="evenodd" d="M4.83 22H21a1 1 0 0 0 1-1v-1a7 7 0 0 0-3.5-6.063 7 7 0 0 0-3.5-.938c-.434 0-.866.04-1.289.12L11.28 15.55c.46.235.884.543 1.256.915A5 5 0 0 1 14 20H6.83l-2 2zm10.003-10.003a5 5 0 0 0 4.281-2.155A5 5 0 0 0 20 7l-.003-.167-5.164 5.164zm3.265-8.922a5 5 0 0 0-4.302-.928A5 5 0 0 0 12 3a5 5 0 0 0-6.535.465 5 5 0 0 0 0 7.071A5 5 0 0 0 9 12l.176-.003 4.821-4.821L14 7a5 5 0 0 0-.667-2.495 3 3 0 0 1 2.727-.312 3 3 0 0 1 .606.312l1.431-1.431zm-9.98 9.981-6.061 6.061a7 7 0 0 1 6.061-6.061zm-1.24-8.177a3 3 0 0 1 4.243 0 3 3 0 0 1 0 4.243 3 3 0 0 1-4.243 0 3 3 0 0 1 0-4.243zM16 20a7 7 0 0 0-2.001-4.9A4.999 4.999 0 0 1 15 14.999a5 5 0 0 1 4.33 2.5A5 5 0 0 1 20 20h-4z" /></g><defs><clipPath id="NoInvite_svg__a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;