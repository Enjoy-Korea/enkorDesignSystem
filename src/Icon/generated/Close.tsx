import React from 'react';
import type { IconProps } from '../types';
export const Close = React.memo<IconProps>(({
  size = 24,
  fillColor = '#1B1C1D',
  className,
  style
}) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" style={style} className={className} viewBox="0 0 24 24"><path stroke="#8B8B8B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 6 12 12M6 18 18 6 6 18Z" /></svg>);