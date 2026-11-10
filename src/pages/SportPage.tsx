import { Check } from 'lucide-react';
import { useParams } from 'react-router-dom';
import CtaLink from '@/components/CtaLink';
import PageHero from '@/components/PageHero';
import SportCard from '@/components/SportCard';
import { BOOKING_URL } from '@/data/links';
import { SPORTS, getSportBySlug } from '@/data/sports';
import NotFoundPage from '@/pages/NotFoundPage';

export default function SportPage() {
  const { sport: sportSlug } = useParams();
  const sport = getSportBySlug(sportSlug);

  if (!sport) {
    return <NotFoundPage />;
  }

  const otherSports = SPORTS.filter((item) => item.slug !== sport.slug);

  return (
    <>
      <PageHero
        eyebrow={sport.tagline}
        title={sport.headline}
        description={sport.description}
        image={sport.image}
        size="tall"
        actions={
          <>
            <CtaLink to="/membership" variant="accent">
              {sport.name} Membership
            </CtaLink>
            <CtaLink to={BOOKING_URL} variant="outline-light">
              Book Now!
            </CtaLink>
          </>
        }
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Highlights</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
              Why Play {sport.name}
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              {sport.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-700">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-base text-brand-700">{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink to={`/coaching/${sport.slug}`} variant="primary">
                {sport.name} Coaching
              </CtaLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {sport.gallery.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt={`${sport.name} action at Fortius Sports Academy`}
                loading="lazy"
                className={`w-full rounded-3xl object-cover shadow-lg ${index === 0 ? 'aspect-[3/4]' : 'mt-12 aspect-[3/4]'}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Explore More</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">Other Courts</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {otherSports.map((item) => (
              <SportCard key={item.slug} sport={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
