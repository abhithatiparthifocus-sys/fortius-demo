import CtaLink from '@/components/CtaLink';
import FacilityHighlights from '@/components/FacilityHighlights';
import PageHero from '@/components/PageHero';
import SportCard from '@/components/SportCard';
import { SPORTS } from '@/data/sports';

export default function CourtsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Facility"
        title="Courts & Tables"
        description="Brand-new courts in Alpharetta and at Atlanta Recreation Club (ARC). 24 badminton courts, 4 pickleball courts and 10 table tennis tables, designed for play, training and competition."
        image="https://images.pexels.com/photos/40371849/pexels-photo-40371849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        actions={
          <CtaLink to="/membership" variant="accent">
            Join Us
          </CtaLink>
        }
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Choose a Sport</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">Our Courts</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {SPORTS.map((sport) => (
              <SportCard key={sport.slug} sport={sport} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Facility Standards</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
              Built for Performance
            </h2>
          </div>
          <div className="mt-12">
            <FacilityHighlights />
          </div>
        </div>
      </section>
    </>
  );
}
