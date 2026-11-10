import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  actions?: ReactNode;
  size?: 'default' | 'tall';
};

export default function PageHero({ eyebrow, title, description, image, actions, size = 'default' }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/40" />
      <div
        className={`mx-auto flex max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 ${
          size === 'tall' ? 'min-h-[70vh] py-28' : 'py-24 sm:py-28'
        }`}
      >
        <div className="max-w-2xl animate-fade-up">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-300">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-brand-100 sm:text-lg">{description}</p>
          {actions && <div className="mt-10 flex flex-wrap gap-4">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
