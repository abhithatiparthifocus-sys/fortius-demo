import CtaLink from '@/components/CtaLink';
import PageHero from '@/components/PageHero';
import { BOOKING_URL } from '@/data/links';
import { SPORTS } from '@/data/sports';

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Trained"
        title="Coaching Programs"
        description="Premier academy with top coaches. Train for fun, for fitness or for competition, in badminton, pickleball and table tennis."
        image="https://images.pexels.com/photos/8007494/pexels-photo-8007494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        actions={
          <CtaLink to={BOOKING_URL} variant="accent">
            Book Now!
          </CtaLink>
        }
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Programs</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
              Interested to get trained?
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {SPORTS.map((sport) => (
              <CtaLink
                key={sport.slug}
                to={`/coaching/${sport.slug}`}
                variant="primary"
                className="!flex-col !items-stretch !justify-start !gap-0 !overflow-hidden !rounded-3xl !p-0 !text-left"
              >
                <span className="block aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={sport.image}
                    alt={`${sport.name} coaching`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </span>
                <span className="flex flex-col gap-2 bg-brand-800 p-8">
                  <span className="font-display text-2xl font-bold uppercase">{sport.name} Coaching</span>
                  <span className="text-sm font-normal text-brand-100">{sport.description}</span>
                </span>
              </CtaLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
