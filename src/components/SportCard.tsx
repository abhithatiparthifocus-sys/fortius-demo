import { ArrowRight, ShieldCheck } from 'lucide-react';
import CtaLink from '@/components/CtaLink';
import type { Sport } from '@/data/sports';

type SportCardProps = {
  sport: Sport;
};

export default function SportCard({ sport }: SportCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={sport.image}
          alt={`${sport.name} courts at Fortius Sports Academy`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-800 shadow">
          {sport.headline}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent-700">{sport.tagline}</p>
          <h3 className="mt-2 font-display text-2xl font-bold uppercase text-brand-900">{sport.name}</h3>
        </div>
        <p className="text-sm leading-relaxed text-brand-600">{sport.description}</p>

        <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row">
          <CtaLink to="/membership" variant="primary" className="flex-1 !px-4">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Sign up here
          </CtaLink>
          <CtaLink to={`/courts/${sport.slug}`} variant="secondary" className="flex-1 !px-4">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </CtaLink>
        </div>
      </div>
    </article>
  );
}
