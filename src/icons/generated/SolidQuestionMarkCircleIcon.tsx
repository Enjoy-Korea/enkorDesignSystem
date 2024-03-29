import React from "react";

import type { IconProps } from "../types";

export const SolidQuestionMarkCircleIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><circle cx={12} cy={12} r={12} fill="#ECECEC" stroke={strokeColor} /><path fill="#8B8B8B" d="M12.61 14.746h-1.832c.007-.645.063-1.173.168-1.583.111-.416.292-.796.542-1.139.25-.342.581-.732.995-1.17.302-.315.578-.61.827-.886.256-.283.463-.585.621-.908.158-.329.237-.722.237-1.179 0-.464-.083-.864-.247-1.2a1.712 1.712 0 0 0-.71-.776c-.308-.181-.692-.272-1.152-.272-.38 0-.742.07-1.084.212a1.87 1.87 0 0 0-.827.655c-.21.289-.319.669-.325 1.14H8c.013-.76.197-1.412.552-1.957a3.517 3.517 0 0 1 1.458-1.25C10.62 4.144 11.304 4 12.06 4c.833 0 1.543.155 2.127.464.591.309 1.041.752 1.35 1.33.309.572.463 1.25.463 2.037 0 .604-.121 1.162-.364 1.673a6.437 6.437 0 0 1-.917 1.421 16.56 16.56 0 0 1-1.192 1.27c-.361.343-.604.73-.729 1.16-.125.43-.187.894-.187 1.391Zm-1.91 3.196c0-.303.091-.558.275-.767.184-.208.45-.312.798-.312.355 0 .624.104.808.312.184.209.276.464.276.767 0 .288-.092.537-.276.745-.184.209-.453.313-.808.313-.348 0-.614-.104-.798-.312a1.09 1.09 0 0 1-.275-.746Z" stroke={strokeColor} /></svg>;