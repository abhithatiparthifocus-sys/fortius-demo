import { Gift, Percent, Trophy } from 'lucide-react';
import CtaLink from '@/components/CtaLink';
import PageHero from '@/components/PageHero';
import { REFER_URL } from '@/data/links';

const REFER_OFFERS = [
  {
    icon: Percent,
    title: '10% OFF First Month',
    text: 'Both you and the friend you refer get 10% off the first month.',
  },
  {
    icon: Trophy,
    title: 'Chance to Win $100',
    text: 'Every referral is an entry for a chance to win a $100 Pro-Shop credit.',
  },
];

export default function ReferPage() {
  return (
    <>
      <PageHero
        eyebrow="Refer a Friend"
        title="Refer and Win!!!"
        description="Bring your friends to Fortius. Refer more, win more."
        image="https://images.pexels.com/photos/8007075/pexels-photo-8007075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        actions={
          <CtaLink to={REFER_URL} variant="accent" showArrow>
            Refer Now!
          </CtaLink>
        }
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {REFER_OFFERS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col gap-5 rounded-3xl border border-brand-100 bg-brand-50/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-700 text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="font-display text-3xl font-bold uppercase text-brand-900">{title}</h2>
                <p className="text-base leading-relaxed text-brand-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl bg-brand-800 px-6 py-12 text-center text-white sm:px-12">
            <Gift className="h-10 w-10 text-accent-300" aria-hidden="true" />
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">Refer more! Win more!</h2>
            <p className="max-w-2xl text-base text-brand-100">
              Ready to share the game? Start your referral and enjoy your first month at 10% off.
            </p>
            <CtaLink to="/membership" variant="accent">
              Join Us
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
