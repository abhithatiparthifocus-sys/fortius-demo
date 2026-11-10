import { Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import CtaLink from '@/components/CtaLink';
import PageHero from '@/components/PageHero';
import { COACHING_ENROLL_URLS, getProgram } from '@/data/programs';
import { getSportBySlug } from '@/data/sports';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ProgramPage() {
  const { sport: sportSlug, program: programSlug } = useParams();
  const sport = getSportBySlug(sportSlug);
  const program = sport && getProgram(sport.slug, programSlug);

  if (!sport || !program) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHero
        eyebrow={`${sport.name} Coaching`}
        title={program.name}
        description={program.nickname}
        image={sport.image}
        actions={
          <Link
            to={`/coaching/${sport.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-900"
          >
            All {sport.name} Programs
          </Link>
        }
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="flex flex-col gap-10 lg:col-span-2">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Overview</p>
              <p className="mt-4 text-lg leading-relaxed text-brand-700">{program.summary}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-brand-900 sm:text-3xl">Training Focus</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {program.focus.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-brand-50/60 p-5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-700 text-white">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-brand-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-brand-900 sm:text-3xl">Ideal For</h2>
              <p className="mt-4 text-base leading-relaxed text-brand-600">{program.idealFor}</p>
            </div>
          </div>

          <aside className="h-fit rounded-3xl bg-brand-800 p-8 text-white shadow-xl lg:sticky lg:top-28">
            <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent-300">Schedule</p>
            <p className="mt-3 text-base leading-relaxed text-brand-100">{program.schedule}</p>
            <div className="mt-8">
              <CtaLink to={COACHING_ENROLL_URLS[sport.slug]} variant="accent" className="w-full" showArrow>
                Enroll Now
              </CtaLink>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-brand-200">
              Enrollment is completed on our official registration page.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
