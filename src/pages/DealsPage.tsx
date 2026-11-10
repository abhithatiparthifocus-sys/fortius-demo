import { Gift, Percent, Trophy } from 'lucide-react';
import CtaLink from '@/components/CtaLink';
import PageHero from '@/components/PageHero';
import { REFER_URL } from '@/data/links';

const DEALS = [
  {
    icon: Percent,
    title: '10% OFF First Month',
    text: 'Available to both you and your referral on a first membership month.',
  },
  {
    icon: Trophy,
    title: 'Win a $100 Pro-Shop Credit',
    text: 'Refer a friend for a chance to win a $100 credit to spend in our pro shop.',
  },
  {
    icon: Gift,
    title: 'Combo Membership',
    text: 'Love all? Dink, ping pong and smash with one combined membership.',
  },
];

export default function DealsPage() {
  return (
    <>
      <PageHero
        eyebrow="Save More"
        title="Deal Zone"
        description="Member offers and referral rewards to help you save on your first month and on your gear."
        image="https://images.pexels.com/photos/38777310/pexels-photo-38777310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        actions={
          <CtaLink to="/membership" variant="accent">
            Join Us
          </CtaLink>
        }
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {DEALS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group flex flex-col gap-5 rounded-3xl border border-brand-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-700 transition-colors duration-300 group-hover:bg-accent-700 group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="font-display text-2xl font-bold uppercase text-brand-900">{title}</h2>
                <p className="text-sm leading-relaxed text-brand-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand-50 p-8 sm:flex-row sm:items-center sm:p-12">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase text-brand-900 sm:text-3xl">
                Refer a friend and save together
              </h2>
              <p className="mt-2 text-base text-brand-600">Send your referral link and you could win a $100 pro-shop credit.</p>
            </div>
            <CtaLink to={REFER_URL} variant="primary" showArrow>
              Refer Now!
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
