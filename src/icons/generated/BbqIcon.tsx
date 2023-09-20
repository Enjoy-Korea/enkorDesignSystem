import React from "react";
import type { IconProps } from "../types";
export const BbqIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><rect width={8} height={2} x={8} y={11} fill="#515151" rx={1} /><path strokeLinecap="round" strokeWidth={2} d="M12 17v6M8 17l-2 5.928M16 17l2 5.928" stroke={strokeColor} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v-.547c0-1.262.442-2.484 1.25-3.453l.29-.348c.62-.744.96-1.683.96-2.652v0M14 9v-.547c0-1.262.442-2.484 1.25-3.453l.29-.348c.62-.744.96-1.683.96-2.652v0" stroke={strokeColor} /><path fill="#515151" fillRule="evenodd" d="M7.75 9v-.547c0-.409.046-.918.137-1.453H3a1 1 0 0 0-1 1v2a8 8 0 0 0 8 8h4a8 8 0 0 0 8-8V8a1 1 0 0 0-1-1h-4.35c-.262.367-.4.748-.4 1.453V9H20v1a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V9h3.75Z" clipRule="evenodd" stroke={strokeColor} /></svg>;