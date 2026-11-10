import { ArrowRight, Dumbbell, Gift, Sparkles } from 'lucide-react';
import CtaLink from '@/components/CtaLink';
import FacilityHighlights from '@/components/FacilityHighlights';
import SportCard from '@/components/SportCard';
import { BOOKING_URL, REFER_URL } from '@/data/links';
import { SPORTS } from '@/data/sports';

const STATS = [
  { value: '24', label: 'Badminton Courts' },
  { value: '4', label: 'Pickleball Courts' },
  { value: '10', label: 'Table Tennis Tables' },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-900">
        <img
          src="https://images.pexels.com/photos/8007494/pexels-photo-8007494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Two players on an indoor badminton court"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-900 via-brand-900/70 to-brand-900/30" />
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent-100 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Brand-new facility
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.05] tracking-wide text-white sm:text-6xl lg:text-7xl">
              Fortius Sports Academy!
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
              A high-performance space to play, train, and compete. 15 badminton courts and 4 pickleball courts at the
              Game & Grill location, plus 9 more badminton courts and table tennis tables at Atlanta Recreation Club
              (ARC).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaLink to="/membership" variant="lime">
                Join Us
              </CtaLink>
              <CtaLink to="/coaching" variant="outline-light">
                Get Trained
              </CtaLink>
              <CtaLink to={BOOKING_URL} variant="lime">
                Book Now!
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="flex items-center gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Gift className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold uppercase tracking-wide">Refer and win!!!</p>
              <p className="mt-1 text-sm text-accent-50 sm:text-base">
                10% OFF on First Month for Both. Chance to Win a $100 Pro-Shop Credit. Refer more! Win more!
              </p>
            </div>
          </div>
          <CtaLink to={REFER_URL} variant="secondary" showArrow>
            Refer Now!
          </CtaLink>
        </div>
      </section>

      <section className="border-b border-brand-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-brand-100 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-10 text-center">
              <span className="font-display text-5xl font-bold text-brand-800">{stat.value}</span>
              <span className="mt-2 font-display text-sm font-bold uppercase tracking-[0.25em] text-accent-700">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Our Sports</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
              Play Your Way
            </h2>
            <p className="mt-4 text-base text-brand-600">
              Pick the sport you love, or combine them. Sign up for a membership and start playing this week.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {SPORTS.map((sport) => (
              <SportCard key={sport.slug} sport={sport} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-800 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
          <Dumbbell className="h-10 w-10 text-accent-300" aria-hidden="true" />
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide sm:text-5xl">
            Love all? You can Dink, Ping Pong and Smash!
          </h2>
          <p className="max-w-2xl text-base text-brand-100 sm:text-lg">
            Get the combo membership and play every sport we offer, all in one place.
          </p>
          <CtaLink to="/membership" variant="accent">
            Combo Membership
          </CtaLink>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Coaching</p>
              <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
                Interested to get trained?
              </h2>
              <p className="mt-4 text-base text-brand-600">Or enroll your junior. Premier academy with top coaches.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink to="/coaching" variant="primary">
                  View Coaching Programs
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </CtaLink>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/26238663/pexels-photo-26238663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="A player training on an indoor badminton court"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">The Facility</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
              Built for Performance
            </h2>
          </div>
          <div className="mt-12">
            <FacilityHighlights />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <CtaLink
            to="/pro-shop"
            variant="primary"
            className="!flex-col !items-start !justify-end !rounded-3xl !px-8 !py-12 !text-left !text-base"
          >
            <span className="font-display text-3xl font-bold uppercase">Pro Shop</span>
            <span className="text-sm font-normal text-brand-100">
              Yonex badminton gear and Selkirk pickleball paddles, plus stringing service.
            </span>
          </CtaLink>
          <CtaLink
            to="/deals"
            variant="accent"
            className="!flex-col !items-start !justify-end !rounded-3xl !px-8 !py-12 !text-left !text-base"
          >
            <span className="font-display text-3xl font-bold uppercase">Deal Zone</span>
            <span className="text-sm font-normal text-accent-50">
              Member offers and referral rewards to help you save on your first month.
            </span>
          </CtaLink>
        </div>
      </section>
    </>
  );
}
