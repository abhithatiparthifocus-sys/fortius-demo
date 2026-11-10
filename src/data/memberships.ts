import { getSportBySlug } from '@/data/sports';

export type PriceRow = {
  label: string;
  price: string;
};

export type MembershipPlan = {
  slug: 'badminton' | 'pickleball' | 'table-tennis' | 'combo';
  name: string;
  tagline: string;
  image: string;
  prices: PriceRow[];
  note: string;
  enrollUrl: string;
  extraLink?: { label: string; href: string };
};

const FAMILY_NOTE = 'Family of 2 saves 10%, family of 3 saves 20%, family of 4+ saves 30%. Pay yearly for an extra 10% off.';

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    slug: 'badminton',
    name: 'Badminton',
    tagline: 'For endless smashes',
    image: getSportBySlug('badminton')?.image ?? '',
    prices: [
      { label: 'Adult monthly', price: '$65' },
      { label: 'Junior (<18), college student & senior (55+) monthly', price: '$55' },
      { label: 'Off hours (M-F 9AM to 3PM) monthly', price: '$30' },
      { label: 'Fortius Academy trainee monthly', price: '$35' },
      { label: 'Day pass', price: '$15' },
      { label: '10 day passes (valid 3 months)', price: '$120' },
    ],
    note: FAMILY_NOTE,
    enrollUrl: 'https://app.clubworx.com/s/wQmO2m1v',
  },
  {
    slug: 'pickleball',
    name: 'Pickleball',
    tagline: 'Fun loaded dinks',
    image: getSportBySlug('pickleball')?.image ?? '',
    prices: [{ label: 'Annual membership', price: '$240' }],
    note: 'Annual members can use the facility any time courts are available. Dedicated court reservations are $20.',
    enrollUrl: 'https://app.clubworx.com/s/BJjHr2vC',
    extraLink: { label: 'Reserve a Court', href: 'https://www.fsaatl.com/book-online' },
  },
  {
    slug: 'table-tennis',
    name: 'Table Tennis',
    tagline: 'Ping pong enthusiasts',
    image: getSportBySlug('table-tennis')?.image ?? '',
    prices: [
      { label: 'Adult monthly', price: '$55' },
      { label: 'Senior (55+) monthly', price: '$50' },
      { label: 'Off hours (M-F 9AM to 3PM) monthly', price: '$30' },
      { label: 'Day pass', price: '$10' },
      { label: '10 day passes (valid 3 months)', price: '$80' },
    ],
    note: FAMILY_NOTE,
    enrollUrl: 'https://app.clubworx.com/s/ErPzPBye',
  },
  {
    slug: 'combo',
    name: 'Combo',
    tagline: 'Love all? Dink, ping pong and smash!',
    image: 'https://images.pexels.com/photos/4716817/pexels-photo-4716817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    prices: [{ label: 'Badminton, pickleball & table tennis adult monthly', price: '$85' }],
    note: 'One membership unlocks every sport we offer.',
    enrollUrl:
      'https://app.clubworx.com/websites/fortius-sports-academy/waivers/pickleball-membership-1/signed_waivers/new',
  },
];

export const MEMBERSHIP_BENEFITS = [
  'Unlimited open play',
  'Member-only events and tournaments',
  'Free gym access',
  'Referral bonuses',
  'No long-term contracts',
  'Family membership discounts',
  'Exclusive member discounts at the pro shop',
  'Access to locker rooms and showers',
  '5% off food and beverage purchases',
  'Free Wi-Fi throughout the facility',
  'Flexible freeze and skip policy',
];
