import React from 'react';

export type Kind = 'info' | 'positive' | 'negative' | 'warning';

export type KindMap = Record<Kind, string>;

export interface AlertProps {
  kind?: 'info' | 'positive' | 'negative' | 'warning';

  message: React.ReactNode;

  description?: React.ReactNode;

  showIcon?: boolean;

  showClosedIcon?: boolean;

  style?: React.CSSProperties;

  onClose?: React.ReactEventHandler<HTMLSpanElement>;

  closable?: boolean;

  afterClose?: () => void;
}
