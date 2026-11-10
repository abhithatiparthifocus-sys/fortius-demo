import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type CtaLinkProps = {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'lime' | 'secondary' | 'outline-light';
  className?: string;
  showArrow?: boolean;
};

const VARIANT_CLASSES: Record<NonNullable<CtaLinkProps['variant']>, string> = {
  primary: 'bg-brand-800 text-white hover:bg-brand-700 focus-visible:ring-brand-400',
  accent: 'bg-accent-700 text-white hover:bg-accent-800 focus-visible:ring-accent-400',
  lime: 'bg-lime-500 text-brand-900 hover:bg-lime-400 focus-visible:ring-lime-500',
  secondary: 'bg-brand-50 text-brand-800 hover:bg-brand-100 focus-visible:ring-brand-400',
  'outline-light': 'border border-white/70 text-white hover:bg-white hover:text-brand-900 focus-visible:ring-white',
};

const BASE_CLASSES =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

export default function CtaLink({ to, children, variant = 'primary', className = '', showArrow = false }: CtaLinkProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;
  const isExternal = /^https?:\/\//.test(to);

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      )}
    </Link>
  );
}
