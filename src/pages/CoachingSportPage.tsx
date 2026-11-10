import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import CtaLink from '@/components/CtaLink';
import PageHero from '@/components/PageHero';
import { getProgramsForSport } from '@/data/programs';
import { getSportBySlug } from '@/data/sports';
import NotFoundPage from '@/pages/NotFoundPage';

export default function CoachingSportPage() {
  const { sport: sportSlug } = useParams();
  const sport = getSportBySlug(sportSlug);

  if (!sport) {
    return <NotFoundPage />;
  }

  const programs = getProgramsForSport(sport.slug);

  return (
    <>
      <PageHero
        eyebrow="Coaching Programs"
        title={`${sport.name} Coaching`}
        description={`Premier academy with top coaches. Choose the ${sport.name.toLowerCase()} program that matches your level and goals.`}
        image={sport.image}
        actions={
          <CtaLink to="/membership" variant="accent">
            View Memberships
          </CtaLink>
        }
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Programs</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">Choose Your Program</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={program.slug}
                to={`/coaching/${sport.slug}/${program.slug}`}
                className="group flex flex-col gap-4 rounded-3xl border border-brand-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl"
              >
                <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent-700">{program.nickname}</p>
                <h3 className="font-display text-2xl font-bold uppercase text-brand-900">{program.name}</h3>
                <p className="text-sm leading-relaxed text-brand-600">{program.summary}</p>
                <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-brand-500">{program.schedule}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 transition-colors group-hover:text-accent-700">
                  View program
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
