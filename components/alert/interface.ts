export type kind = 'info' | 'positive' | 'negative' | 'warning';

export type KindMap = Record<kind, string>;

export interface AlertProps {
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}