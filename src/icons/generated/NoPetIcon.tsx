import React from "react";

import type { IconProps } from "../types";

export const NoPetIcon = ({
  size = 24,
  fillColor = "none",
  strokeColor = "#515151",
  className = "",
  style = {},
  viewBox = "0 0 24 24"
}: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fillColor} style={style} className={className} viewBox={viewBox}><g clipPath="url(#NoPet_svg__a)"><path stroke="#515151" strokeLinecap="round" strokeWidth={2} d="M1.45 22.586 22.663 1.373" /><path fill="#515151" fillRule="evenodd" d="M5.202 21.625c.284.142.597.256.942.332l.007.002.007.002c.348.072.772.044 1.121.011l1.123-.136.201-.026 3.296-.268h.18c1.17 0 2.316.137 3.298.264l.225.029 1.096.132c.349.034.767.062 1.109-.004l.014-.003.014-.003c1.774-.393 2.718-1.776 3.075-3.02l.018-.062.01-.064c.204-1.346-.24-2.47-.857-3.383-.524-.776-1.222-1.468-1.804-2.045l-.202-.201-.865-1.017-1.171-1.376-1.418 1.418 1.057 1.242.902 1.061.026.03.028.028.24.239c.598.594 1.145 1.138 1.551 1.739.425.629.63 1.232.546 1.901-.23.741-.733 1.362-1.542 1.551-.013.001-.055.005-.136.003l-.401-.026-1.021-.123-.236-.031c-.986-.128-2.244-.281-3.555-.281h-.18c-1.311 0-2.571.156-3.556.285l-.208.027-1.046.127-.263.02-1.625 1.625zM17.93 3.24A2.998 2.998 0 0 0 15.5 2a3 3 0 0 0-3 3c0 .999.489 1.885 1.24 2.43l1.472-1.472A1 1 0 0 1 15.5 4a1 1 0 0 1 .958.712L17.93 3.24zm-.925 6.581 2.816-2.816L20 7a3 3 0 1 1 0 6 3 3 0 0 1-3-3l.005-.178zm-4.354-1.303-9.658 9.658c-.002-1.066.397-1.978.915-2.743.524-.773 1.221-1.464 1.803-2.041l.206-.204 1.55-1.817.902-1.061.006-.008c.499-.574 1.219-1.277 2.171-1.606a3.02 3.02 0 0 1 .479-.13c.353-.067.703-.067.945-.067H12.028l.623.019zM7.5 5a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm1-3a3 3 0 1 0 0 6 3 3 0 1 0 0-6zM3 10a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm1-3a3 3 0 1 0 0 6 3 3 0 1 0 0-6zm15 3a1 1 0 1 1 2 0 1 1 0 1 1-2 0z" /></g><defs><clipPath id="NoPet_svg__a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;