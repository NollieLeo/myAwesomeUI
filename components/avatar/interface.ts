import React from "react";

export interface Props {
  size?: 'default' | 'small' | 'large' | number,
  shape?: 'circle' | 'square',
  src?: string,
  icon?: React.ReactNode,
  style?: React.CSSProperties,
  className?: string,
  alt?: string,
}
