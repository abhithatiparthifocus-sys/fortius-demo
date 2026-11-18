import type { ElementType, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  threshold?: number;
};

const VARIANT_CLASS: Record<NonNullable<RevealProps['variant']>, string> = {
  up: '',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  variant = 'up',
  delay = 0,
  threshold,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold });

  return (
    <Tag
      ref={ref}
      className={`reveal ${VARIANT_CLASS[variant]} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
