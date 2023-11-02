import React from "react";

import type { IconProps } from "../types";

export const PingpongIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><circle cx={6} cy={5.5} r={3} strokeWidth={2} stroke={strokeColor} /><mask id="Pingpong_svg__a" fill="#fff"><path fillRule="evenodd" d="M4.353 10.73a9.471 9.471 0 0 0 2.782 6.812 9.471 9.471 0 0 0 6.812 2.782l-9.594-9.595Z" clipRule="evenodd" /></mask><path fill="#515151" d="m4.353 10.73 1.414-1.415L2.4 5.948l-.047 4.762 2 .02Zm9.594 9.594.02 2 4.761-.047-3.367-3.367-1.414 1.414Zm-5.398-4.196a7.471 7.471 0 0 1-2.197-5.379l-4-.04a11.472 11.472 0 0 0 3.368 8.247l2.829-2.828Zm5.378 2.196a7.471 7.471 0 0 1-5.378-2.196L5.72 18.956a11.472 11.472 0 0 0 8.247 3.368l-.04-4Zm1.434.586L5.767 9.315l-2.829 2.829 9.595 9.594 2.828-2.828Z" mask="url(#Pingpong_svg__a)" stroke={strokeColor} /><path fill="#515151" d="m6.91 15.409 2.357 2.357-3.67 4.522a2 2 0 0 1-2.967.154l-.397-.397a2 2 0 0 1 .154-2.967l4.523-3.67Z" stroke={strokeColor} /><path fill="#515151" fillRule="evenodd" d="M7.914 10.12a4.986 4.986 0 0 1-2.48.349l9.76 9.76a9.457 9.457 0 0 0 5.374-2.687 9.5 9.5 0 0 0 0-13.435A9.504 9.504 0 0 0 9.786 2.235c.437.505.773 1.099.98 1.75a7.503 7.503 0 1 1 5.083 14.07L7.914 10.12Z" clipRule="evenodd" stroke={strokeColor} /></svg>;