import { Check } from 'lucide-react';
import CtaLink from '@/components/CtaLink';
import PageHero from '@/components/PageHero';
import { MEMBERSHIP_BENEFITS, MEMBERSHIP_PLANS } from '@/data/memberships';

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Tailor Made For Everyone"
        title="Membership Programs"
        description="Unlimited open play across badminton, pickleball and table tennis. Choose the plan that fits how you play."
        image="https://images.pexels.com/photos/4716817/pexels-photo-4716817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        actions={
          <a
            href="#plans"
            className="inline-flex items-center justify-center rounded-full bg-accent-700 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-800 hover:shadow-lg"
          >
            View Plans
          </a>
        }
      />

      <section id="plans" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Plans</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">Choose Your Membership</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {MEMBERSHIP_PLANS.map((plan) => (
              <article
                key={plan.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={`${plan.name} membership`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent-300">{plan.tagline}</p>
                    <h3 className="mt-1 font-display text-3xl font-bold uppercase text-white">{plan.name} Membership</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
                  <ul className="flex flex-col divide-y divide-brand-100">
                    {plan.prices.map((row) => (
                      <li key={row.label} className="flex items-center justify-between gap-4 py-3">
                        <span className="text-sm text-brand-700">{row.label}</span>
                        <span className="shrink-0 font-display text-xl font-bold text-brand-900">{row.price}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm leading-relaxed text-brand-600">{plan.note}</p>
                  <div className="mt-auto flex flex-col gap-3">
                    <CtaLink to={plan.enrollUrl} variant="primary" className="w-full" showArrow>
                      Enroll in {plan.name}
                    </CtaLink>
                    {plan.extraLink && (
                      <CtaLink to={plan.extraLink.href} variant="secondary" className="w-full" showArrow>
                        {plan.extraLink.label}
                      </CtaLink>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-base text-brand-700">
            Contact us for the latest special promotions on membership pricing.{' '}
            <a
              href="https://www.fsaatl.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-700 underline underline-offset-4 transition-colors hover:text-accent-800"
            >
              Contact our team
            </a>
          </p>
        </div>
      </section>

      <section className="bg-brand-50/60 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Benefits</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">Every Membership Includes</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-600">
              Some benefits, amenities and services are subject to availability and may vary based on scheduling, facility usage,
              membership tier, or at the discretion of the club.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {MEMBERSHIP_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-700">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-brand-800">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-800 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-300">Share the fun</p>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide sm:text-5xl">Refer Friends. Win Store Credit.</h2>
          <p className="max-w-2xl text-base text-brand-100">
            A successful referral gets you and your friend 10% off your membership fee. Every referral also enters you into our
            bi-weekly raffle for a $100 store credit.
          </p>
          <CtaLink to="/refer" variant="accent">
            Refer and Win
          </CtaLink>
        </div>
      </section>
    </>
  );
}
