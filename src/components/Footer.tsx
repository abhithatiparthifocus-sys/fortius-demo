import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';
import { BOOKING_URL, REFER_URL } from '@/data/links';

const QUICK_LINKS = [
  { label: 'Courts', to: '/courts' },
  { label: 'Membership', to: '/membership' },
  { label: 'Coaching', to: '/coaching' },
  { label: 'Pro Shop', to: '/pro-shop' },
  { label: 'Refer & Win', to: '/refer' },
  { label: 'Deal Zone', to: '/deals' },
];

const EXTERNAL_LINKS = [
  { label: 'Book a Session', href: BOOKING_URL },
  { label: 'Refer Now', href: REFER_URL },
];

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-5">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-brand-200">
            A brand-new high-performance facility for badminton, pickleball and table tennis. Play, train and compete.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Explore</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-brand-200 transition-colors hover:text-accent-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Get Started</h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {EXTERNAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-200 transition-colors hover:text-accent-300"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Locations</h3>
          <ul className="mt-5 flex flex-col gap-4 text-sm text-brand-200">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
              <span>Game & Grill, Alpharetta: 15 badminton courts and 4 pickleball courts</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
              <span>Atlanta Recreation Club (ARC): 9 badminton courts and table tennis tables</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Fortius Sports Academy. All rights reserved.</p>
          <p>Badminton, Pickleball and Table Tennis</p>
        </div>
      </div>
    </footer>
  );
}
