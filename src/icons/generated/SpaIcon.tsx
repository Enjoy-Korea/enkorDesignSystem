import React from "react";
import type { IconProps } from "../types";
export const SpaIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12.943 13.111-.786-.855a3.205 3.205 0 0 1 .393-4.7v0a3.205 3.205 0 0 0 .393-4.701L12.157 2M7.993 13.111l-.786-.855a3.205 3.205 0 0 1 .393-4.7v0a3.205 3.205 0 0 0 .393-4.701L7.207 2M17.343 13.111l-.786-.855a3.205 3.205 0 0 1 .393-4.7v0a3.206 3.206 0 0 0 .393-4.701L16.557 2" stroke={strokeColor} /><path fill="#515151" fillRule="evenodd" d="M4.623 10.96C3.521 11.975 3 13.124 3 14.223c0 1.325.757 2.722 2.376 3.867 1.615 1.142 3.95 1.91 6.624 1.91 2.673 0 5.009-.768 6.623-1.91C20.244 16.944 21 15.547 21 14.222c0-1.325-.757-2.721-2.377-3.867a8.87 8.87 0 0 0-.957-.587c.13-.517.514-1.048 1.27-1.583 2.48 1.426 4.064 3.6 4.064 6.037C23 18.518 18.075 22 12 22S1 18.518 1 14.222c0-2.416 1.559-4.576 4.004-6.002-.435.765-.542 1.761-.38 2.74Z" clipRule="evenodd" stroke={strokeColor} /></svg>;